'use client'

import {useGetPopularArtickQuery} from '@/redux/api/api'
import style from './style.module.scss'
import {useAppSelector} from '@/hooks/useAppSelector'
import {ArrowRight, ChevronRight, Pause, Play} from 'lucide-react'
import {useDispatch} from 'react-redux'
import {actions as action} from '../redux/slice/modelSlice'
import {actions} from '@/redux/slice/slice'
import {useEffect, useRef} from 'react'
import Link from 'next/link'
import {BannerHeader} from '@/components/ArtistComponentsPage/BannerHeader/BannerHeader'
import {Line} from '@/components/ArtistComponentsPage/Line/Line'
import {SimilarArtists} from '@/components/ArtistComponentsPage/similarArtistsComponent/SimilarArtists'
import {AlbumComponent} from '@/components/ArtistComponentsPage/AlbumComponent/AlbumComponent'
import {TrackComponent} from '@/components/ArtistComponentsPage/TrackComponent/TrackComponent'
import {Track} from '@/types/topTracksRussia'
import {Attributes5, Daum4} from '@/types/artistDetail'
import {Loading} from '@/components/СommonСomponents/Loading/Loading'

export const ArtistInfoProvader = ({id}: {id: number}) => {
  const {data, isLoading} = useGetPopularArtickQuery(id)
  const playing = useAppSelector((state) => state.Track.Track)
  const es = useAppSelector((state) => state.model.render)

  const db = useDispatch()

  useEffect(() => {
    if (data?.data[0].views['top-songs'].data) {
      if (!es) {
        db(actions.AddArtistId(data.data[0].id))
        //@ts-ignore
        db(actions.AllSongs(data?.data[0].views['top-songs'].data))
        db(actions.addMet('artist'))
        db(action.isExOne(true))
      }
    }
  }, [es, data])

  const currentPerformerPlaying = data?.data[0].views['top-songs'].data.some(
    (el) => el.id === playing.currentTrack.index,
  )

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
          artist-info/
        </h2>
        <ChevronRight width={20} />
        <h2 className='font-semibold'>{id}</h2>
        <ChevronRight width={20} />
      </div>
      {isLoading ? (
        <div style={{height: '80vh'}} className=' flex justify-center items-center'>
          <Loading />
        </div>
      ) : (
        <>
          <BannerHeader currentPerformerPlaying={currentPerformerPlaying!} data={data!} />
          <div style={{background: '#47474794', padding: '14px'}} className='  bg-[#47474794] rounded-2xl '>
            <p style={{color: '#cfcfcf', textAlign: 'start'}} className=' text-[#cfcfcf] font-medium'>
              {data?.data[0].attributes.artistBio?.length
                ? data?.data[0].attributes.artistBio
                : 'Информация об артисте отсутствует'}
            </p>
          </div>
          <Line />
          <div className=' mt-3'>
            <div className='flex justify-between items-center'>
              <h2 style={{fontSize: '24px'}} className=' font-medium'>
                {data?.data[0].views['top-songs'].attributes.title} Исполнителя
              </h2>
            </div>
            <ul
              style={{
                gap: '3rem',
              }}
              className='mt-3 flex  flex-wrap'>
              {data?.data[0].views['top-songs'].data.map((track, index) => (
                <TrackComponent data={data} playing={playing} track={track} index={index} />
              ))}
              <Line />
            </ul>
            <div style={{marginTop: '24px'}}>
              <h2 style={{fontSize: '24px'}} className=' font-medium'>
                {data?.data[0].views['full-albums'].attributes.title} Исполнителя
              </h2>
              <ul
                style={{
                  gap: '3rem',
                }}
                className='mt-4 flex  flex-wrap'>
                {data?.data[0].views['full-albums'].data.map((album) => (
                  <AlbumComponent album={album} />
                ))}
              </ul>
            </div>
            <Line />
            <div className=' mb-4 mt-4'>
              <h2 style={{fontSize: '24px'}} className=' font-medium'>
                {data?.data[0].views['similar-artists'].attributes.title}
              </h2>
              <ul
                style={{
                  gap: '3rem',
                }}
                className='mt-4 flex  flex-wrap'>
                {data?.data[0].views['similar-artists'].data.map((artist) => (
                  <SimilarArtists artist={artist} />
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
