'use client'

import {auth, dbfirebase} from '@/config/firebaseConfig'
import {ids} from '@/types/slicetype'
import {doc, onSnapshot} from 'firebase/firestore'
import {ChevronRight, Pause, Play} from 'lucide-react'
import Link from 'next/link'
import {useEffect, useState} from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import style from './style.module.scss'
import {useAppSelector} from '@/hooks/useAppSelector'
import {useDispatch} from 'react-redux'
import {actions} from '@/redux/slice/slice'
import {actions as action} from '../redux/slice/modelSlice'
import {Loading} from '@/components/СommonСomponents/Loading/Loading'
const MycollectionProvader = () => {
  const [user, loading] = useAuthState(auth)
  const [data, setDate] = useState<ids[]>([])
  const db = useDispatch()
  const es = useAppSelector((state) => state.model.render)
  const playing = useAppSelector((state) => state.Track.Track)
  useEffect(() => {
    if (user) {
      onSnapshot(doc(dbfirebase, 'users', user?.email!), (doc) => {
        setDate(doc.data()!.likeTrack)
      })
    }
    if (!user) {
      setDate([])
    }
  }, [user?.email])

  useEffect(() => {
    if (data.length) {
      if (!es) {
        db(actions.addMyCollectionSong(data))
        db(actions.addMet('mycollection'))
        db(action.isExOne(true))
      }
    }
  }, [es, data])

  return (
    <div>
      <div className='flex gap-1 mb-4 items-center cursor-pointer w-[340px]'>
        <Link href={'/'}>
          <h2
            className=' font-semibold'
            style={{
              color: '#adadad',
            }}>
            Главная
          </h2>
        </Link>
        <ChevronRight width={20} />
        <h2 className=' font-semibold'>Мои Лайки</h2>
        <ChevronRight width={20} />
      </div>
      {loading ? (
        <div style={{height: '80vh', width: '100%'}} className='flex justify-center items-center'>
          <Loading />
        </div>
      ) : !user ? (
        <p>Авторизуйтесь</p>
      ) : (
        <ul
          style={{
            gap: '3rem',
          }}
          className='mt-3 flex  flex-wrap'>
          {data.map((track, index) => (
            <li key={track.index} className={style.searchHover}>
              <Link href={`/track-info/${track.index}`}>
                <div
                  style={{
                    backgroundImage: `url(${track.url.substr(0, track.url.indexOf('{'))}/500x500.jpg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '50% 50%',
                    backgroundSize: 'cover',
                    borderRadius: '10%',
                  }}
                  className={style.hoverActive}>
                  {playing.currentTrack.index === track.index && <span className='loadermainsearch'></span>}
                  <div
                    className={
                      playing.currentTrack.index === track.index
                        ? style.modalsearchHoverActive
                        : style.modalsearchHover
                    }>
                    <div className=''>
                      <span className={style.spanbtn}>
                        {playing.currentTrack.index === track.index && playing.currentTrackIsPlaying ? (
                          <Pause
                            className={style.playbtn}
                            width={30}
                            onClick={() => db(actions.playTrack(false))}
                            height={30}
                          />
                        ) : (
                          <Play
                            onClick={() => {
                              db(actions.addMet('mycollection'))
                              db(actions.addMyCollectionSong(data))
                              db(actions.currentIndexTrack(index)), db(actions.playTrack(true))
                            }}
                            className={style.playbtn}
                            width={30}
                            height={30}
                          />
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              <div style={{marginTop: '5px'}} className=' px-1'>
                <h1 className=' cursor-pointer font-semibold'>{track.title}</h1>
                <Link href={`/artist-info/${track.artistId}`}>
                  {' '}
                  <p className='text-[#838383] cursor-pointer font-medium text-sm'>{track.description}</p>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default MycollectionProvader
