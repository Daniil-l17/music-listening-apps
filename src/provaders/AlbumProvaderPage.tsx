'use client'

import {useGetDetailAlbumQuery} from '@/redux/api/api'
import {ChevronRight, Pause, Play} from 'lucide-react'
import Link from 'next/link'
import style from './style.module.scss'
import {useAppSelector} from '@/hooks/useAppSelector'
import {useDispatch} from 'react-redux'
import {actions as action} from '../redux/slice/modelSlice'
import {actions} from '@/redux/slice/slice'
import {TimeDuration} from '@/utils/TimeDuration'
import {useEffect} from 'react'
import {Loading} from '@/components/СommonСomponents/Loading/Loading'
export const AlbumProvaderPage = ({id}: {id: number}) => {
  const {data, isLoading} = useGetDetailAlbumQuery(id)
  const playing = useAppSelector((state) => state.Track.Track)
  const es = useAppSelector((state) => state.model.render)
  useEffect(() => {
    if (data) {
      if (!es) {
        //@ts-ignore
        db(actions.AllSongs(data?.data[0].relationships.tracks.data))
        db(actions.addMet('album'))
        db(actions.AddArtistId(data.data[0].relationships.artists.data[0].id))
        db(action.isExOne(true))
      }
    }
  }, [es, data])
  const db = useDispatch()

  return (
    <div>
      <div className='flex gap-1 mb-4 items-center cursor-pointer w-[260px]'>
        <Link href={'/'}>
          <h2
            className='font-semibold'
            style={{
              color: '#adadad',
            }}>
            Главная
          </h2>
        </Link>
        <ChevronRight width={20} />
        <h2
          className='font-semibold'
          style={{
            color: '#adadad',
          }}>
          album/
        </h2>
        <ChevronRight width={20} />
        <h2 className='font-semibold'>{id}</h2>
        <ChevronRight width={20} />
      </div>
      {isLoading ? (
        <div style={{height: '90vh'}} className='flex justify-center items-center'>
          <Loading />
        </div>
      ) : (
        <div>
          <div style={{gap: '40px'}} className='flex mt-4'>
            <div
              style={{
                backgroundImage: `url(${data?.data[0].attributes.artwork.url.substr(
                  0,
                  data?.data[0].attributes.artwork.url.indexOf('{'),
                )}/500x500.jpg)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50% 50%',
                backgroundSize: 'cover',
                borderRadius: '4%',
                width: '250px',
                height: '250px',
              }}
              //  currentPerformerPlaying && 'activeSong'
              className={`bg-[#373737ce] rounded-[10%] `}></div>
            <div className='flex flex-col py-2'>
              <h2 style={{color: '#808080', fontSize: '20px'}} className='  '>
                Альбом
              </h2>
              <h2 style={{fontSize: '32px'}} className=' font-medium'>
                {data?.data[0].attributes.name}
              </h2>
              <p> {data?.data[0].attributes.artistName}</p>
              <div className='flex mt-2 gap-2 items-center'>
                <p style={{color: '#808080'}}>
                  {new Date(data?.data[0].attributes.releaseDate!).getFullYear()}
                </p>
                <span style={{color: '#808080'}}>|</span>
                <div style={{gap: '4px'}} className='flex gap-1'>
                  {data?.data[0].attributes.genreNames.map((ganre) => (
                    <p style={{color: '#808080'}}>{ganre}</p>
                  ))}
                </div>
              </div>
              <div className=' flex-1 flex  items-end'>
                <button
                  style={{background: '#676767b9', borderRadius: '10px'}}
                  onClick={() => {
                    playing.met === 'album' && db(actions.toggleTrack()),
                    playing.met !== 'album' &&
                    //@ts-ignore
                        db(actions.AllSongs(data?.data[0].relationships.tracks.data)),
                      playing.met !== 'album' && db(actions.currentIndexTrack(0)),
                      db(actions.addMet('album')),
                      playing.met !== 'album' && db(actions.playTrack(true))
                  }}
                  className={`${style.playbtn} bg-[#676767b9] flex  items-center gap-2 px-8 py-2 `}>
                  слушать
                  {playing.currentTrackIsPlaying && playing.met === 'album' ? (
                    <Pause width={20} height={20} />
                  ) : (
                    <Play width={20} height={20} />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div
            className='bg-[#63636363]'
            style={{background: '#63636363', width: '100%', height: '2px', marginTop: '20px'}}></div>
          <div className=' mt-4'>
            <ul className='flex flex-col gap-4'>
              {data?.data[0].relationships.tracks.data.map((track, index) => (
                <li
                  style={{
                    width: '70%',
                    borderRadius: '10px',
                    paddingTop: '15px',
                    background: `${playing.currentTrack.index === track.id ? '#8282829e' : '#4242429e'}`,
                    paddingBottom: '15px',
                  }}
                  className={` px-4 `}
                  key={track.id}>
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-2'>
                      <h2 className='text-[#838383]'>{track.attributes.trackNumber}</h2>
                      <h1 className=' w-[200px] truncate font-semibold'>{track.attributes.name}</h1>
                    </div>
                    <div className='flex items-center gap-4'>
                      <h2>{TimeDuration(track.attributes.durationInMillis / 1000)}</h2>
                      <span
                        style={{
                          background: '#444444b2',
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                        }}
                        className={`${style.spanbtn} items-center flex justify-center cursor-pointer bg-[#6666668c] `}>
                        {playing.currentTrack.index === track.id && playing.currentTrackIsPlaying ? (
                          <Pause
                            className={style.playbtn}
                            width={30}
                            onClick={() => db(actions.playTrack(false))}
                            height={30}
                          />
                        ) : (
                          <Play
                            onClick={() => {
                              //@ts-ignore
                              db(actions.AllSongs(data.data[0].relationships.tracks.data))
                              db(actions.addMet('album'))
                              db(actions.currentIndexTrack(index))
                              playing.met === 'album' && db(actions.playTrack(true))
                            }}
                            className={style.playbtn}
                            width={30}
                            height={30}
                          />
                        )}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
