'use client'
import {HeaderHome} from '@/components/HomeComponentsPage/AnimateHeaderHome/HeaderHome'
import {RecommendedSongs} from '@/components/HomeComponentsPage/recommendedSongs/RecommendedSongs'
import {ChevronRight} from 'lucide-react'
import {Fragment, forwardRef, memo, useEffect, useState} from 'react'
import style from './style.module.scss'
import {useGetTopTracksRussiaQuery} from '@/redux/api/api'
import {useInView} from 'react-intersection-observer'
import {CirclePlay} from 'lucide-react'
import {useDispatch} from 'react-redux'
import {actions} from '@/redux/slice/slice'
import {useAppSelector} from '@/hooks/useAppSelector'
import {Track} from '@/types/topTracksRussia'
import {actions as act} from '../redux/slice/modelSlice'
export const HomeProvader = memo(() => {
  const [step, setStep] = useState(42)
  const {data, isLoading, error, refetch} = useGetTopTracksRussiaQuery(step)
  const db = useDispatch()
  const isExsit = useAppSelector((state) => state.model.render)
  const states = useAppSelector((state) => state.Track.Track)
  const es = useAppSelector((state) => state.model.render)
  const {ref, inView} = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if (!es) {
      if (data?.data) {
        if (states.met !== 'search' && states.met !== 'mycollection') {
          db(actions.AllSongs(data.data))
        }
      }
    }
  }, [data?.data])

  useEffect(() => {
    if (data) {
      if (states.allSongs.length - 2 === states.indexTrack) {
        setStep((prev) => prev + 20)
      }
    }
  }, [states.indexTrack])

  useEffect(() => {
    if (data) {
      setStep((prev) => prev + 20)
    }
  }, [inView])

  useEffect(() => {
    if (data?.data) {
      if (states.met === 'home') {
        db(actions.AllSongs(data.data))
      }
    }
  }, [data?.data])

  useEffect(() => {
    if (!es) {
      if (data?.data) {
        if (states.met === 'home') {
          db(actions.AllSongs(data.data))
        }
      }
    }
  }, [data?.data])

  useEffect(() => {
    if (data?.data?.length) {
      if (states.met !== 'search' && 'mycollection') {
        if (!isExsit) {
          db(actions.currentIndexTrack(0))
          db(act.isExOne(true))
          db(actions.addMet('home'))
        }
      }
    }
  }, [data?.data])



  return (
    <Fragment>
      <div>
        <div className='flex gap-1 items-center cursor-pointer w-[90px]'>
          <h2>Главная</h2>
          <ChevronRight width={20} />
        </div>
        <div className={style.bga}>
          <HeaderHome data={data?.data!} />
        </div>
        <RecommendedSongs db={db} data={data?.data!} isLoading={isLoading} error={error} />
        <div ref={ref}>loading.....</div>
      </div>
    </Fragment>
  )
})
