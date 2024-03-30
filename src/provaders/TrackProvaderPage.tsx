'use client'
import {useGetTrackInfoQuery} from '@/redux/api/api'
import {ChevronRight, Pause, Play} from 'lucide-react'
import Link from 'next/link'
import {memo, useEffect} from 'react'
import style from './style.module.scss'
import {useAppSelector} from '@/hooks/useAppSelector'
import {actions as action} from '../redux/slice/modelSlice'
import {actions} from '@/redux/slice/slice'
import {useDispatch} from 'react-redux'
export const TrackProvaderPage = memo(({id}: {id: number}) => {
  const playing = useAppSelector((state) => state.Track.Track)
  const es = useAppSelector((state) => state.model.render)
  const {data} = useGetTrackInfoQuery(id)

  const db = useDispatch()

  const isPlaying = +playing.currentTrack.index === id

  useEffect(() => {
    if (data) {
      if (!es) {
         //@ts-ignore
        db(actions.AllSongs(data.data))
        db(actions.addMet('track-info'))
        db(actions.AddArtistId(data.data[0].relationships.artists.data[0].id))
        db(action.isExOne(true))
      }
    }
  }, [data, es])

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
          track-info/
        </h2>
        <ChevronRight width={20} />
        <h2 className='font-semibold'>{id}</h2>
        <ChevronRight width={20} />
      </div>
      <div style={{gap: '25px'}} className='flex pt-2'>
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
          className={`bg-[#373737ce] ${isPlaying && 'activeSong'}  rounded-[10%] `}></div>
        <div className='flex flex-col'>
          <div>
            <h2 style={{fontSize: '28px'}} className=' font-medium'>
              {data?.data[0].attributes.name}
            </h2>
            <p style={{color: '#808080'}}>{`Дата выхода: ${data?.data[0].attributes.releaseDate} `}</p>
            <div className='flex items-center gap-2'>
              {data?.data[0].attributes.genreNames.map((ganre) => (
                <p style={{color: '#808080'}}>{ganre} |</p>
              ))}
            </div>
          </div>
          <div className='flex-1 items-end flex'>
            <button
              onClick={() => {
                db(actions.addMet('track-info'))
                db(actions.currentIndexTrack(0))
                //@ts-ignore
                db(actions.AllSongs(data?.data))
                playing.met !== 'track-info' && db(actions.playTrack(true))
                playing.met === 'track-info' && db(actions.toggleTrack())
              }}
              style={{background: '#676767b9', borderRadius: '10px'}}
              className={`${style.playbtnres} bg-[#676767b9] flex  items-center gap-2 px-8 py-2 `}>
              {!playing.currentTrackIsPlaying ? (
                <Play width={20} height={20} />
              ) : (
                <Pause width={20} hanging={20} />
              )}{' '}
              Слушать
            </button>
          </div>
        </div>
      </div>
    </div>
  )
})
