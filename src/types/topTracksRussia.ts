export interface ITopTrack {
  next: string
  data: Track[]
}

export interface Track {
  id: string
  type: string
  href: string
  attributes: Attributes
  relationships: Relationships
}

export interface Attributes {
  hasTimeSyncedLyrics: boolean
  albumName: string
  genreNames: string[]
  trackNumber: number
  releaseDate: string
  durationInMillis?: number
  isVocalAttenuationAllowed: boolean
  isMasteredForItunes: boolean
  isrc: string
  artwork: Artwork
  audioLocale: string
  composerName?: string
  url: string
  playParams?: PlayParams
  discNumber: number
  hasCredits: boolean
  isAppleDigitalMaster: boolean
  hasLyrics: boolean
  audioTraits: string[]
  name: string
  previews: Preview[]
  artistName: string
  contentRating?: string
}

export interface Artwork {
  width: number
  url: string
  height: number
  textColor3: string
  textColor2: string
  textColor4: string
  textColor1: string
  bgColor: string
  hasP3: boolean
}

export interface PlayParams {
  id: string
  kind: string
}

export interface Preview {
  url: string
}

export interface Relationships {
  artists: Artists
  "music-videos": MusicVideos
}

export interface Artists {
  href: string
  data: Daum2[]
}

export interface Daum2 {
  id: string
  type: string
  href: string
}

export interface MusicVideos {
  href: string
  data: Daum3[]
}

export interface Daum3 {
  id: string
  type: string
  href: string
}
