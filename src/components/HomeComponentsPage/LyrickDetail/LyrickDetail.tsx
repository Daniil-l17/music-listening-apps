import {useAppSelector} from '@/hooks/useAppSelector'
import {Track} from '@/types/topTracksRussia'
import {CirclePause, CirclePlay, Pause} from 'lucide-react'
import Link from 'next/link'
import {memo} from 'react'

export const LyrickDetail = memo(
  ({track, playTrack, stopTrack}: {track: Track; playTrack: () => void; stopTrack: () => void}) => {
    const index = useAppSelector((state) => state.Track.Track)
    return (
      <li key={track.id} className='w-[330px] flex justify-center relative h-[300px]'>
        <Link href={`/track-info/${track.id}`}>
          <div
            style={{
              backgroundImage: `url(${track.attributes.artwork.url.substr(
                0,
                track.attributes.artwork.url.indexOf('{'),
              )}/500x600.jpg)`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
              backgroundSize: 'cover',
            }}
            className={` ${
              track.id === index.currentTrack.index && index.currentTrackIsPlaying ? 'activeSong' : null
            } dsds rounded-[50%] flex justify-center items-center w-[250px] h-[250px] cursor-pointer `}>
            {track.id === index.currentTrack.index && (
              <span className='loadermain'>
                <span className='loaderssss'></span>
              </span>
            )}
          </div>
        </Link>
        <div
          style={{border: '1px solid #8585853c'}}
          className=' justify-between items-center p-2 cursor-pointer transition duration-100 hover:bg-[#626262bf] h-[80px] bottom-0 flex rounded-xl left-0 right-0 bg-[#535353bf] absolute'>
          <div className='flex justify-between items-center'>
            <div className='flex ml-3 flex-col'>
              <p className=' text-sm text-[#818892] font-medium'>Сингл</p>
              <h2 className='w-[185px] truncate  text-sm font-medium'>{track.attributes.name}</h2>
              <Link href={`/artist-info/${track.relationships.artists.data[0].id}`}>
                <p className='w-[185px] truncate font-medium text-sm'>{track.attributes.artistName}</p>
              </Link>
            </div>
          </div>
          {track.id === index.currentTrack.index && index.currentTrackIsPlaying ? (
            <CirclePause onClick={stopTrack} style={{width: '32px'}} className='mainds mr-2' />
          ) : (
            <CirclePlay onClick={playTrack} style={{width: '32px'}} className='mainds mr-2' />
          )}
        </div>
      </li>
    )
  },
)
