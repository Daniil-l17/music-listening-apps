import { ArtistInfoProvader } from "@/provaders/ArtistInfoProvader";
import { Metadata } from "next";


  export const metadata:Metadata = {
    title: 'artist'
  }

export default function page ({params}:{params: {id:string}}) {
  return (
    <ArtistInfoProvader id={+params.id} />
  )
}
