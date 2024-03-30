'use client'
import {memo} from 'react'
import {useDebounce} from '@/hooks/useDebounce'
import {useGetTrackSearchQuery} from '@/redux/api/api'
import {actions} from '@/redux/slice/slice'
import {ChevronRight, Heart, ListRestart, Pause, Play, Search} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import style from './style.module.scss'
import {useAppSelector} from '@/hooks/useAppSelector'
import {actionsSearch} from '@/redux/slice/searchHistory'
import {actions as action} from '../redux/slice/modelSlice'
export const SearchProvader = memo(() => {
  const [search, setSearch] = useState('')
  const debounce = useDebounce(search)
  const db = useDispatch()
  const [open, setOpen] = useState(false)
  const playing = useAppSelector((state) => state.Track.Track)
  const stateHistory = useAppSelector((state) => state.SearchHistory.SearchHistory)
  const {data, isLoading, error} = useGetTrackSearchQuery(debounce, {
    skip: debounce.length < 3,
  })
  const es = useAppSelector((state) => state.model.render)

  useEffect(() => {
    if (!es) {
      if (stateHistory.length) {
        db(actions.AllSongsSearch(stateHistory))
        db(actions.addMet('search'))
        db(action.isExOne(true))
      }
    }
  }, [es])

  useEffect(() => {
    setOpen(debounce.length > 3)
  }, [debounce])

  return (
    <div className=''>
      <div className='flex gap-1 mb-4 items-center cursor-pointer w-[200px]'>
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
        <h2 className='font-semibold'>Поиск</h2>
        <ChevronRight width={20} />
      </div>
      <div
        style={{
          border: '1px solid #9999997b',
        }}
        className=' flex gap-3 rounded-2xl px-4 py-2'>
        <Search className='text-[#838383] w-[20px]' />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=' flex-1'
          type='text'
          placeholder='Трек, исполнитель'
        />
      </div>
      <div className=' mt-6'>
        <div className='flex justify-between items-center'>
          <h2 className='text-[25px] font-semibold mt-3 '>{open ? 'Лучшие результаты' : 'История Поиска'}</h2>
          <p style={{marginRight: '10px'}} className='text-[#cfcfcf] '>
            {' '}
            <ListRestart
              onClick={() => db(actionsSearch.deleteSearchHistory())}
              className=' cursor-pointer'
              width={30}
              height={30}
            />
          </p>
        </div>
        {!open ? (
          <ul
            style={{
              gap: '3rem',
            }}
            className='mt-3 flex  flex-wrap'>
            {stateHistory.map((track, index) => (
              <li key={track.id} className={style.searchHover}>
                <div
                  style={{
                    backgroundImage: `url(${track.attributes.artwork.url.substr(
                      0,
                      track.attributes.artwork.url.indexOf('{'),
                    )}/500x500.jpg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '50% 50%',
                    backgroundSize: 'cover',
                    borderRadius: '10%',
                  }}
                  className={style.hoverActive}>
                  <Link href={`/track-info/${track.id}`}>
                    {playing.currentTrack.index === track.id && <span className='loadermainsearch'></span>}
                    <div
                      className={
                        playing.currentTrack.index === track.id
                          ? style.modalsearchHoverActive
                          : style.modalsearchHover
                      }>
                      <div className=''>
                        <span className={style.spanbtn}>
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
                                db(actions.playTrack(true))
                                db(actions.AllSongsSearch(stateHistory)),
                                  db(actions.addMet('search')),
                                  db(actions.currentIndexTrack(index))
                              }}
                              className={style.playbtn}
                              width={30}
                              height={30}
                            />
                          )}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className='mt-1 px-1'>
                  <h1 className=' font-semibold '>{track.attributes.name}</h1>
                  <p className='text-[#838383] font-medium text-sm'> {track.attributes.artistName}</p>
                  <p className='text-[#838383]  font-medium  text-sm'>
                    {new Date(track.attributes.releaseDate).getFullYear()} · Сингл
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <>
            {data?.results.artists?.data.length && (
              <div className='flex flex-col'>
                <h2 className=' font-semibold text-[28px]'>Исполнители</h2>
                <ul
                  style={{
                    gap: '3rem',
                  }}
                  className='mt-3 flex  flex-wrap'>
                  {!!data?.results.artists.data.length &&
                    data.results.artists?.data
                      ?.filter((el) => el.attributes?.artwork?.url.length)
                      .map((artist) => (
                        <Link href={`/artist-info/${artist.id}`}>
                          <li>
                            <div
                              style={{
                                backgroundImage: `url(${artist?.attributes?.artwork.url.substr(
                                  0,
                                  artist?.attributes?.artwork.url.indexOf('{'),
                                )}/500x500.jpg)`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: '50% 50%',
                                backgroundSize: 'cover',
                                borderRadius: '10%',
                              }}
                              className={` relative bg-[#373737ce] rounded-[10%] w-[200px] h-[200px] cursor-pointer`}></div>
                            <div className='mt-1 flex flex-col  px-1'>
                              <h1 className=' font-semibold'>{artist.attributes.name}</h1>
                              <div className='flex'>
                                {artist.attributes.genreNames.map((el) => (
                                  <p className='text-[#838383] font-medium text-sm'>{el}</p>
                                ))}
                              </div>
                            </div>
                          </li>
                        </Link>
                      ))}
                </ul>
              </div>
            )}
            <div className=' mt-4'>
              <h2 className='font-semibold  text-[28px]'>Треки</h2>
              <ul
                style={{
                  gap: '3rem',
                }}
                className='mt-3 flex  flex-wrap'>
                {isLoading ? (
                  <p>loading....</p>
                ) : error ? (
                  <p>ничего не найденно</p>
                ) : !data?.results?.songs?.data.length ? (
                  <p>ничего не найденно!!!</p>
                ) : (
                  data?.results.songs.data.map((track, index) => (
                    <li key={track.id} className={style.searchHover}>
                      <div
                        style={{
                          backgroundImage: `url(${track.attributes.artwork.url.substr(
                            0,
                            track.attributes.artwork.url.indexOf('{'),
                          )}/500x500.jpg)`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: '50% 50%',
                          backgroundSize: 'cover',
                          borderRadius: '10%',
                        }}
                        className={style.hoverActive}>
                        {playing.currentTrack.index === track.id && (
                          <span className='loadermainsearch'></span>
                        )}
                        <div
                          className={
                            playing.currentTrack.index === track.id
                              ? style.modalsearchHoverActive
                              : style.modalsearchHover
                          }>
                          <div className=''>
                            <span className={style.spanbtn}>
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
                                    db(actions.AllSongsSearch(data.results.songs.data))
                                    db(actions.addMet('search'))
                                    db(actions.currentIndexTrack(index))
                                    db(actionsSearch.AddSearchHistory(track))
                                    playing.met === 'search' && db(actions.playTrack(true))
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
                      <div className='mt-1 px-1'>
                        <h1 className=' font-semibold'>{track.attributes.name}</h1>
                        <p className='text-[#838383] font-medium text-sm'> {track.attributes.artistName}</p>
                        <p className='text-[#838383] font-medium text-sm'>
                          {new Date(track.attributes.releaseDate).getFullYear()} · Сингл
                        </p>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  )
})
