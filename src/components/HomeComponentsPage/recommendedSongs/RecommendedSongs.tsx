'use client'
import { forwardRef, memo } from 'react'
import { LyrickDetail } from '../LyrickDetail/LyrickDetail'
import LoaderHoem from '../LoaderHome/LoaderHoem'
import Error from '../../СommonСomponents/Error/Error'
import { actions } from '@/redux/slice/slice'
import { Track } from '@/types/topTracksRussia'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { Dispatch, SerializedError } from '@reduxjs/toolkit'
import { useAppSelector } from '@/hooks/useAppSelector'
export const RecommendedSongs = memo(
	({
		data,
		isLoading,
		error,
		db,
	}: {
		data: Track[]
		isLoading: boolean
		error: FetchBaseQueryError | SerializedError | undefined
		db: Dispatch
	}) => {
		const meta = useAppSelector((state) => state.Track.Track.met)


    

		const playTrack = (index: number) => {
			if (meta !== 'home') {
				db(actions.AllSongs(data))
			}
			db(actions.addMet('home'))
			db(actions.playTrack(true))
			db(actions.currentIndexTrack(index))
		}

		return (
			<div className=' '>
				<h2 className=' text-[25px] font-semibold mb-4'>Рекомендуем новинки</h2>
				<ul className='flex justify-between px-8 pt-4 mt-4 gap-6 flex-wrap   '>
					{isLoading ? (
						<div className='h-[200px] w-full flex justify-center items-center'>
							<LoaderHoem />
						</div>
					) : error ? (
						<div className='h-[200px] w-full flex justify-center items-center'>
							<Error />
						</div>
					) : (
						data
							?.filter((el) => el.attributes.previews.length)
							.map((track, index) => (
								<LyrickDetail stopTrack={() => db(actions.playTrack(false))} playTrack={() => playTrack(index)} track={track} />
							))
					)}
				</ul>
			</div>
		)
	},
)
