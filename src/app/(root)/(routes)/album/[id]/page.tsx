import { AlbumProvaderPage } from "@/provaders/AlbumProvaderPage"
import { Metadata } from "next"


export const metadata:Metadata = {
  title: 'альбом'
}

export default function page ({params}:{params: {id: string}}) {
  return (
    <AlbumProvaderPage id={+params.id} />
  )
}