export interface Root {
  results: Results
  meta: Meta
}

export interface Results {
  artists: Artists
  songs: Songs
}

export interface Artists {
  href: string
  data: Daum[]
}

export interface Daum {
  id: string
  type: string
  href: string
  attributes: Attributes
  relationships: Relationships
}

export interface Attributes {
  name: string
  genreNames: string[]
  artwork: Artwork
  url: string
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

export interface Relationships {
  albums: Albums
}

export interface Albums {
  href: string
  next: string
  data: Daum2[]
}

export interface Daum2 {
  id: string
  type: string
  href: string
}

export interface Songs {
  href: string
  next: string
  data: Daum3[]
}

export interface Daum3 {
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
  url: string
  playParams: PlayParams
  discNumber: number
  hasCredits: boolean
  hasLyrics: boolean
  isAppleDigitalMaster: boolean
  audioTraits: string[]
  name: string
  previews: Preview[]
  contentRating: string
  artistName: string
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

export interface PlayParams {
  id: string
  kind: string
}

export interface Preview {
  url: string
}

export interface Meta {
  results: Results2
  metrics: Metrics
}

export interface Results2 {
  order: string[]
  rawOrder: string[]
}

export interface Metrics {
  dataSetId: string
}
