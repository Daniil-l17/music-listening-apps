export interface IAlbumDetail {
  data: Daumalbum[]
}

export interface Daumalbum {
  id: string
  type: string
  href: string
  attributes: Attributes
  relationships: Relationships
}

export interface Attributes {
  copyright: string
  genreNames: string[]
  releaseDate: string
  upc: string
  isMasteredForItunes: boolean
  artwork: Artwork
  url: string
  playParams: PlayParams
  recordLabel: string
  trackCount: number
  isCompilation: boolean
  isPrerelease: boolean
  audioTraits: string[]
  isSingle: boolean
  name: string
  artistName: string
  contentRating: string
  isComplete: boolean
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

export interface Relationships {
  tracks: Tracks
  artists: Artists
}

export interface Tracks {
  href: string
  data: Daum2[]
}

export interface Daum2 {
  id: string
  type: string
  href: string
  attributes: Attributes2
}

export interface Attributes2 {
  hasTimeSyncedLyrics: boolean
  albumName: string
  genreNames: string[]
  trackNumber: number
  releaseDate: string
  durationInMillis: number
  isVocalAttenuationAllowed: boolean
  isMasteredForItunes: boolean
  isrc: string
  artwork: Artwork2
  audioLocale: string
  composerName: string
  playParams: PlayParams2
  url: string
  discNumber: number
  hasCredits: boolean
  hasLyrics: boolean
  isAppleDigitalMaster: boolean
  audioTraits: string[]
  name: string
  previews: Preview[]
  artistName: string
  contentRating?: string
}

export interface Artwork2 {
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

export interface PlayParams2 {
  id: string
  kind: string
}

export interface Preview {
  url: string
}

export interface Artists {
  href: string
  data: Daum3[]
}

export interface Daum3 {
  id: string
  type: string
  href: string
}
