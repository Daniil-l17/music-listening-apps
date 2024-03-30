import {Daum4, RootArtist} from '@/types/artistDetail'
import style from '../../../provaders/style.module.scss'
import {Pause, Play} from 'lucide-react'
import {useDispatch} from 'react-redux'

import {actions} from '@/redux/slice/slice'
export const TrackComponent = ({
  track,
  index,
  playing,
  data,
}: {
  index: number
  track: Daum4
  playing: any
  data: RootArtist
}) => {
  const db = useDispatch()
  return (
    <li key={track.id}>
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
                    //@ts-ignore
                    db(actions.AllSongs(data.data[0].views['top-songs'].data))
                    db(actions.addMet('artist'))
                    db(actions.currentIndexTrack(index))
                    db(actions.AddArtistId(data.data[0].id))
                    playing.met === 'artist' && db(actions.playTrack(true))
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
      <div className='mt-1 flex flex-col  px-1'>
        <h1 className=' w-[200px] truncate font-semibold'>{track.attributes.name}</h1>
        <div style={{width: '170px'}} className='flex gap-2 truncate'>
          {track.attributes.genreNames.map((el) => (
            <p className='text-[#838383] font-medium text-sm'>{el}</p>
          ))}
        </div>
        <p className='text-[#838383] font-medium text-sm'>
          {new Date(track.attributes.releaseDate).getFullYear()}
        </p>
      </div>
    </li>
  )
}
