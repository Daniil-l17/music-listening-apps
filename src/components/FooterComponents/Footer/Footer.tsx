'use client'

import {useAppSelector} from '@/hooks/useAppSelector'
import {actions} from '@/redux/slice/slice'
import {ArrowLeftToLine, ArrowRightToLine, Heart, HeartOff, Pause, Play, Volume2, VolumeX} from 'lucide-react'
import React, {memo, useEffect, useRef, useState} from 'react'
import {useDispatch} from 'react-redux'
import {FooterBar} from '../FooterBar/FooterBar'
import {TimeDuration} from '@/utils/TimeDuration'
import {arrayRemove, arrayUnion, doc, onSnapshot, updateDoc} from 'firebase/firestore'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth, dbfirebase} from '@/config/firebaseConfig'
import {Daum3} from '@/types/topTracksRussia'
import {ids} from '@/types/slicetype'
import Link from 'next/link'
import {toast} from 'react-toastify'

export const Footer = memo(() => {
  const track = useAppSelector((state) => state.Track.Track)
  const audioRef = useRef<HTMLMediaElement>(null)
  const [progress, setProgres] = useState(0)
  const db = useDispatch()
  const {playerColor} = useAppSelector((state) => state.applicationSetup)
  const clickRef = useRef<HTMLMediaElement>(null)
  const [active, setActive] = useState(true)
  const [data, setDate] = useState<ids[]>([])
  const [user] = useAuthState(auth)
  const render = useAppSelector((state) => state.model.render)
  const [value, setValue] = useState(1)
  const isActiveSongMenu = useAppSelector((state) => state.Track.Track.met)
  const playTrack = () => {
    setProgres((audioRef.current?.currentTime! / audioRef.current?.duration!) * 100)
    if (audioRef.current?.currentTime === audioRef.current?.duration) {
      db(actions.addPlusIndex())
    }
  }

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

  const addTrack = async () => {
    if (user) {
      const isExsict = data.some((el) => el.index === track.currentTrack.index)
      const washingtonRef = doc(dbfirebase, 'users', user?.email!)
      if (isExsict) {
        toast.error(`Песня ${track.currentTrack.title} удалена`, {theme: 'colored'})
        await updateDoc(washingtonRef, {
          likeTrack: arrayRemove(track.currentTrack),
        })
      } else {
        toast.success(`Песня ${track.currentTrack.title} добавлена `, {theme: 'colored'})
        await updateDoc(washingtonRef, {
          likeTrack: arrayUnion(track.currentTrack),
        })
      }
    }
  }

  useEffect(() => {
    if (track.allSongs.length) {
      !active ? (audioRef.current!.volume = 0) : (audioRef.current!.volume = value)
    }
  }, [active])

  const nextrSong = () => {
    db(actions.addPlusIndex())
  }

  const prevSong = () => {
    db(actions.addMinusIndex())
  }

  useEffect(() => {
    if (isActiveSongMenu) {
      if (isActiveSongMenu !== 'search' && isActiveSongMenu !== 'mycollection') {
        //@ts-ignore
        db(actions.AddTrack(track.allSongs[track.indexTrack]))
        if (!render) {
          db(actions.playTrack(true))
        }
      }
    }
    if (isActiveSongMenu === 'search') {
      // @ts-ignore
      db(actions.AddTrackSearch(track.allSongs[track.indexTrack]))
      if (!render) {
        db(actions.playTrack(true))
      }
    }
    if (isActiveSongMenu === 'mycollection') {
      // @ts-ignore
      db(actions.AddTrackmyCollection(track.allSongs[track.indexTrack]))
      if (!render) {
        db(actions.playTrack(true))
      }
    }
  }, [track.indexTrack, track.allSongs])

  useEffect(() => {
    setProgres(0)
  }, [track.currentTrack.index])

  useEffect(() => {
    if (track.allSongs.length) {
      if (track.currentTrackIsPlaying) {
        audioRef.current?.play()
      } else {
        audioRef.current?.pause()
      }
    }
  }, [track.currentTrackIsPlaying, track.currentTrack.index])

  const chewidth = (e: any) => {
    let width = clickRef.current?.clientWidth!
    const offect = e.nativeEvent.offsetX
    const result = (offect / width) * 100
    audioRef.current!.currentTime = (result / 100) * audioRef.current?.duration!
  }

  useEffect(() => {
    if (track.allSongs.length) {
      !active ? setValue(0) : setValue(1)
    }
  }, [active])

  useEffect(() => {
    if (track.allSongs.length) {
      if (active) {
        audioRef.current!.volume! = value
      }
    }
  }, [value])

  const setVolume = (el: any) => setValue(el)

  return (
    <div className=' mt-4'>
      <FooterBar clickRef={clickRef} progress={progress} chewidth={chewidth} />
      <footer
        style={{
          border: '1px solid #8585853c',
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px',
        }}
        className={`w-[99%] justify-between top-0 sticky flex items-center px-3 pr-8 py-3 h-[90px]   bg-[${'#242424'}]`}>
        <div className='flex gap-2 items-center w-[360px]'>
          <div
            style={{
              backgroundImage: `url(${track.currentTrack.url.substr(
                0,
                track.currentTrack.url.indexOf('{'),
              )}/500x600.jpg)`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              backgroundSize: 'cover',
            }}
            className=' rounded-xl w-[70px] h-[70px] cursor-pointer bg-[#5b5b5bd2]  '></div>
          <div className='flex gap-6'>
            <div>
              <Link href={`/track-info/${track.currentTrack.index}`}>
                {' '}
                <h2 className=' cursor-pointer max-w-[230px] truncate  font-medium'>
                  {track.currentTrack.title ? track.currentTrack.title : 'Пользователь'}
                </h2>
              </Link>
              <Link href={`/artist-info/${track.currentTrack.artistId}`}>
                {' '}
                <p className='text-[#838383] max-w-[230px] truncate '>
                  {track.currentTrack.description ? track.currentTrack.description : 'описание'}
                </p>
              </Link>
            </div>
            {user?.email &&
              (data.some((el) => el.index === track.currentTrack.index) ? (
                <HeartOff onClick={addTrack} className='dsds text-[#838383] cursor-pointer' />
              ) : (
                <Heart onClick={addTrack} className='dsds text-[#838383] cursor-pointer' />
              ))}
          </div>
        </div>
        <div className='flex  mr-20 gap-3 items-center flex-col'>
          <div className='flex gap-3 items-center'>
            <p className=' font-medium'>
              {!!track.currentTrack.index &&
                TimeDuration(audioRef ? Math.floor(audioRef.current?.currentTime!) : 0)}
            </p>
            <ArrowLeftToLine
              onClick={prevSong}
              className='text-[#838383] hover:text-[#d7d7d7] transition duration-100 w-[30px] cursor-pointer'
            />
            <span
              onClick={() => {
                db(actions.toggleTrack())
              }}
              className='bg-[#eaeaeaea] hover:scale-110 px-2 py-2 rounded-[50%] flex justify-center items-center cursor-pointer text-[#111]'>
              {track.currentTrackIsPlaying ? <Pause /> : <Play />}
            </span>
            <ArrowRightToLine
              onClick={nextrSong}
              className='text-[#838383] hover:text-[#d7d7d7] transition duration-100 w-[30px] cursor-pointer'
            />
            {!!track.currentTrack.index && (
              <p className=' font-medium'>
                {!!track.currentTrack.index &&
                  TimeDuration(!!audioRef && Math.floor(audioRef.current?.duration!))}
              </p>
            )}
          </div>
          {!!track.allSongs.length && (
            <audio onTimeUpdate={playTrack} ref={audioRef} autoFocus src={track.currentTrack.audio}></audio>
          )}
        </div>
        <div className='w-[160px] flex gap-3 items-center '>
          {active ? (
            <Volume2
              onClick={() => setActive((prev) => !prev)}
              className='w-[25px] cursor-pointer hover:text-[#e3e3e3] transition duration-100 text-[#838383]'
            />
          ) : (
            <VolumeX
              onClick={() => setActive((prev) => !prev)}
              className='w-[25px] cursor-pointer hover:text-[#e3e3e3] transition duration-100 text-[#838383]'
            />
          )}
          <input
            className={'win10-thumb'}
            onChange={(e) => setVolume(e.target.value)}
            min='0'
            max='1'
            value={value}
            step='0.01'
            defaultValue='1'
            type='range'
          />
        </div>
      </footer>
    </div>
  )
})
