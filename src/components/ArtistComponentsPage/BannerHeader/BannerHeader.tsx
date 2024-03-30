import { RootArtist } from '@/types/artistDetail'
import style from '../../../provaders/style.module.scss'

export const BannerHeader = ({data,currentPerformerPlaying}:{data: RootArtist,currentPerformerPlaying: boolean}) => {
  
  return (
    <div style={{height: '530px'}} className=''>
    <div
      style={{
        backgroundImage: `url(${data?.data[0].attributes.editorialArtwork.bannerUber?.url.substr(
          0,
          data?.data[0].attributes.editorialArtwork.bannerUber?.url.indexOf('{'),
        )}/2000x2000.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        width: '100%',
        height: '400px',
        position: 'relative',
      }}
      className={`${style.banner}`}>
      <div style={{left: '50px', top: '290px'}} className=' absolute flex gap-3 '>
        <div
          style={{
            backgroundImage: `url(${data?.data[0].attributes.artwork.url.substr(
              0,
              data?.data[0].attributes.artwork.url.indexOf('{'),
            )}/500x500.jpg)`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'cover',
            borderRadius: '50%',
            width: '200px',
            height: '200px',
          }}
          className={`${
            currentPerformerPlaying && 'activeSong'
          }  bg-[#373737ce] rounded-[10%] `}></div>
        <div
          style={{justifyContent: 'end', paddingBottom: '18px'}}
          className='flex-col flex items-start '>
          <h2 style={{fontSize: '34px'}} className=' cursor-pointer  font-medium '>
            {data?.data[0].attributes.name}
          </h2>
          <p style={{color: '#808080'}} className=' font-medium'>
            {data?.data[0].attributes.bornOrFormed}
          </p>
        </div>
      </div>
    </div>
  </div>

  )
}
