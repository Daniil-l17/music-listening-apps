'use client'
import { useAppSelector } from '@/hooks/useAppSelector'
import { actions } from '@/redux/slice/slice'
import { Pause, Play } from 'lucide-react'
import { memo } from 'react'
import { useDispatch } from 'react-redux'
import style from './HeaderHome.module.scss'
import { Track } from '@/types/topTracksRussia'
export const HeaderHome = memo(({ data }: { data: Track[] }) => {
	const db = useDispatch()
	const Isplay = useAppSelector((state) => state.Track.Track)
	return (
		<div className=' relative '>
			<div className={Isplay.currentTrackIsPlaying ? style.ids : style.active}></div>
			<div
				onClick={() => {
					Isplay.met === 'home' && db(actions.toggleTrack()),
						Isplay.met !== 'home' && 'mycollection' ? db(actions.AllSongs(data)) : null,
						Isplay.met !== 'home' && 'mycollection' ? db(actions.currentIndexTrack(0)) : null
					Isplay.met !== 'home' && 'mycollection' ? db(actions.addMet('home')) : null
					/*          Isplay.met !== 'home' && db(actions.AddTrack(Isplay.allSongs[0]))*/
				}}
				className='curactive cursor-pointer hover:text-[#81cdac]  transition duration-150  text-[25px] top-[227px] flex gap-2 right-[125px]  absolute'>
				{Isplay.currentTrackIsPlaying && Isplay.met === 'home' ? <Pause /> : <Play />}
				<h2 className=' font-semibold '>Моя волна</h2>
			</div>
		</div>
	)
})
