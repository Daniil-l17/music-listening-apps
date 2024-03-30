import { Daum7 } from "@/types/artistDetail"
import Link from "next/link"


export const SimilarArtists = ({artist}:{artist:Daum7}) => {
  return (
    <li key={artist.id} className='w-[200px] flex justify-center relative h-[270px]'>
    <Link href={`/artist-info/${artist.id}`}>
      <div
        style={{
          backgroundImage: `url(${artist.attributes.artwork?.url.substr(
            0,
            artist.attributes.artwork.url.indexOf('{'),
          )}/500x600.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 50%',
          backgroundSize: 'cover',
          width: '200px',
          height: '200px',
        }}
        className={` dsds rounded-[50%] flex justify-center items-center cursor-pointer `}></div>
    </Link>
    <div
      style={{border: '1px solid #8585853c', height: '52px', bottom: '35px'}}
      className=' justify-between items-center p-2 cursor-pointer transition duration-100 hover:bg-[#626262bf] h-[52px]  flex rounded-xl left-0 right-0 bg-[#535353bf] absolute'>
      <div className='flex justify-between items-center'>
        <div className='flex ml-3 flex-col'>
          <p className=' text-sm font-medium'>{artist.attributes.name}</p>
          <div className='flex gap-2 truncate w-[190px]'>
            {artist.attributes.genreNames.map((ganre) => (
              <p className=' text-sm text-[#818892]'>{ganre}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </li>
  )
}
