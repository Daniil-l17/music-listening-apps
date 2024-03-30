import { TrackProvaderPage } from "@/provaders/TrackProvaderPage"
import { Metadata } from "next"


  export const metadata:Metadata = {
    title: 'Трек'
  }

export default function page ({params}:{params:{id:string}}) {
  return (
    <TrackProvaderPage id={+params.id} />
  )
}

