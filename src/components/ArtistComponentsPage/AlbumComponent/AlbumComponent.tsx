import { Daum6 } from "@/types/artistDetail"
import Link from "next/link"
import style from '../../../provaders/style.module.scss'

export const AlbumComponent = ({album}:{album:Daum6}) => {
  return (
    <li key={album.id}>
    <Link href={`/album/${album.id}`}>
      <div
        style={{
          backgroundImage: `url(${album.attributes.artwork.url.substr(
            0,
            album.attributes.artwork.url.indexOf('{'),
          )}/500x500.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 50%',
          backgroundSize: 'cover',
          borderRadius: '5%',
        }}
        className={style.hoverActive}>
        <div className={style.modalsearchHoverAlbums}></div>
      </div>
    </Link >
    <div className='mt-1 flex flex-col  px-1'>
      <h1 className=' w-[200px] truncate font-semibold'>{album.attributes.name}</h1>
      <p
        style={{width: '200px'}}
        className='text-[#838383] truncate font-medium text-sm'>
        {album.attributes.recordLabel}
      </p>
      <p className='text-[#838383] font-medium text-sm'>
        {new Date(album.attributes.releaseDate).getFullYear()}
      </p>
    </div>
  </li>
  )
}
