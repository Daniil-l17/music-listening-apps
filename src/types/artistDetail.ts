export interface RootArtist {
  data: Daum[]
}

export interface Daum {
  id: string
  type: string
  href: string
  attributes: Attributes
  relationships: Relationships
  views: Views
  meta: Meta
}

export interface Attributes {
  bornOrFormed: string
  genreNames: string[]
  editorialArtwork: EditorialArtwork
  origin: string
  name: string
  artwork: Artwork
  url: string
  artistBio: string
}

export interface EditorialArtwork {
  bannerUber: BannerUber
  centeredFullscreenBackground: CenteredFullscreenBackground
  subscriptionHero: SubscriptionHero
  storeFlowcase: StoreFlowcase
}

export interface BannerUber {
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

export interface CenteredFullscreenBackground {
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

export interface SubscriptionHero {
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

export interface StoreFlowcase {
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

export interface Views {
  "latest-release": LatestRelease
  "top-songs": TopSongs
  "featured-playlists": FeaturedPlaylists
  "full-albums": FullAlbums
  "similar-artists": SimilarArtists
  "featured-albums": FeaturedAlbums
  "top-music-videos": TopMusicVideos
  playlists: Playlists
}

export interface LatestRelease {
  href: string
  attributes: Attributes2
  data: Daum3[]
}

export interface Attributes2 {
  title: string
}

export interface Daum3 {
  id: string
  type: string
  href: string
  attributes: Attributes3
}

export interface Attributes3 {
  copyright: string
  genreNames: string[]
  releaseDate: string
  upc: string
  isMasteredForItunes: boolean
  artwork: Artwork2
  url: string
  playParams: PlayParams
  recordLabel: string
  isCompilation: boolean
  trackCount: number
  isPrerelease: boolean
  audioTraits: string[]
  editorialArtwork: EditorialArtwork2
  isSingle: boolean
  name: string
  artistName: string
  contentRating: string
  isComplete: boolean
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

export interface EditorialArtwork2 {}

export interface TopSongs {
  href: string
  next: string
  attributes: Attributes4
  data: Daum4[]
}

export interface Attributes4 {
  title: string
}

export interface Daum4 {
  id: string
  type: string
  href: string
  attributes: Attributes5
}

export interface Attributes5 {
  albumName: string
  hasTimeSyncedLyrics: boolean
  genreNames: string[]
  trackNumber: number
  releaseDate: string
  durationInMillis: number
  isVocalAttenuationAllowed: boolean
  isMasteredForItunes: boolean
  isrc: string
  artwork: Artwork3
  audioLocale: string
  composerName: string
  url: string
  playParams: PlayParams2
  discNumber: number
  hasCredits: boolean
  hasLyrics: boolean
  isAppleDigitalMaster: boolean
  audioTraits: string[]
  editorialArtwork: EditorialArtwork3
  name: string
  previews: Preview[]
  artistName: string
  contentRating?: string
}

export interface Artwork3 {
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

export interface EditorialArtwork3 {}

export interface Preview {
  url: string
}

export interface FeaturedPlaylists {
  href: string
  attributes: Attributes6
  data: Daum5[]
}

export interface Attributes6 {
  title: string
}

export interface Daum5 {
  id: string
  type: string
  href: string
  attributes: Attributes7
}

export interface Attributes7 {
  lastModifiedDate: string
  supportsSing: boolean
  description: Description
  artwork: Artwork4
  url: string
  playParams: PlayParams3
  hasCollaboration: boolean
  trackCount: number
  curatorName: string
  audioTraits: any[]
  editorialArtwork: EditorialArtwork4
  isChart: boolean
  name: string
  playlistType: string
  editorialNotes: EditorialNotes
}

export interface Description {
  standard: string
  short?: string
}

export interface Artwork4 {
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

export interface PlayParams3 {
  id: string
  kind: string
  versionHash: string
}

export interface EditorialArtwork4 {
  subscriptionHero: SubscriptionHero2
  subscriptionCover: SubscriptionCover
}

export interface SubscriptionHero2 {
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

export interface SubscriptionCover {
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

export interface EditorialNotes {
  name: string
  standard: string
  short: string
}

export interface FullAlbums {
  href: string
  attributes: Attributes8
  data: Daum6[]
}

export interface Attributes8 {
  title: string
}

export interface Daum6 {
  id: string
  type: string
  href: string
  attributes: Attributes9
}

export interface Attributes9 {
  copyright: string
  genreNames: string[]
  releaseDate: string
  isMasteredForItunes: boolean
  upc: string
  artwork: Artwork5
  playParams: PlayParams4
  url: string
  recordLabel: string
  trackCount: number
  isCompilation: boolean
  isPrerelease: boolean
  audioTraits: string[]
  editorialArtwork: EditorialArtwork5
  isSingle: boolean
  name: string
  contentRating?: string
  artistName: string
  editorialNotes: EditorialNotes2
  isComplete: boolean
}

export interface Artwork5 {
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

export interface PlayParams4 {
  id: string
  kind: string
}

export interface EditorialArtwork5 {
  staticDetailTall?: StaticDetailTall
  subscriptionHero?: SubscriptionHero3
  staticDetailSquare?: StaticDetailSquare
  storeFlowcase?: StoreFlowcase2
  originalFlowcaseBrick?: OriginalFlowcaseBrick
}

export interface StaticDetailTall {
  width: number
  url: string
  textGradient: string[]
  height: number
  textColor3: string
  textColor2: string
  textColor4: string
  textColor1: string
  bgColor: string
  hasP3: boolean
}

export interface SubscriptionHero3 {
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

export interface StaticDetailSquare {
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

export interface StoreFlowcase2 {
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

export interface OriginalFlowcaseBrick {
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

export interface EditorialNotes2 {
  short?: string
  standard?: string
}

export interface SimilarArtists {
  href: string
  next: string
  attributes: Attributes10
  data: Daum7[]
}

export interface Attributes10 {
  title: string
}

export interface Daum7 {
  id: string
  type: string
  href: string
  attributes: Attributes11
  relationships: Relationships2
}

export interface Attributes11 {
  bornOrFormed: string
  genreNames: string[]
  editorialArtwork: EditorialArtwork6
  name: string
  artwork: Artwork6
  url: string
  artistBio: string
  origin?: string
}

export interface EditorialArtwork6 {
  bannerUber?: BannerUber2
  centeredFullscreenBackground?: CenteredFullscreenBackground2
  subscriptionHero?: SubscriptionHero4
  storeFlowcase?: StoreFlowcase3
  originalFlowcaseBrick?: OriginalFlowcaseBrick2
}

export interface BannerUber2 {
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

export interface CenteredFullscreenBackground2 {
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

export interface SubscriptionHero4 {
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

export interface StoreFlowcase3 {
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

export interface OriginalFlowcaseBrick2 {
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

export interface Artwork6 {
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

export interface Relationships2 {
  albums: Albums2
}

export interface Albums2 {
  href: string
  next: string
  data: Daum8[]
}

export interface Daum8 {
  id: string
  type: string
  href: string
}

export interface FeaturedAlbums {
  href: string
  attributes: Attributes12
  data: Daum9[]
}

export interface Attributes12 {
  title: string
}

export interface Daum9 {
  id: string
  type: string
  href: string
  attributes: Attributes13
}

export interface Attributes13 {
  copyright: string
  genreNames: string[]
  releaseDate: string
  isMasteredForItunes: boolean
  upc: string
  artwork: Artwork7
  url: string
  playParams: PlayParams5
  recordLabel: string
  trackCount: number
  isCompilation: boolean
  isPrerelease: boolean
  audioTraits: string[]
  editorialArtwork: EditorialArtwork7
  isSingle: boolean
  name: string
  artistName: string
  editorialNotes: EditorialNotes3
  isComplete: boolean
}

export interface Artwork7 {
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

export interface PlayParams5 {
  id: string
  kind: string
}

export interface EditorialArtwork7 {
  originalFlowcaseBrick: OriginalFlowcaseBrick3
}

export interface OriginalFlowcaseBrick3 {
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

export interface EditorialNotes3 {
  standard: string
}

export interface TopMusicVideos {
  href: string
  next: string
  attributes: Attributes14
  data: Daum10[]
}

export interface Attributes14 {
  title: string
}

export interface Daum10 {
  id: string
  type: string
  href: string
  attributes: Attributes15
}

export interface Attributes15 {
  genreNames: string[]
  releaseDate: string
  durationInMillis: number
  isrc: string
  artwork: Artwork8
  playParams: PlayParams6
  url: string
  has4K: boolean
  editorialArtwork: EditorialArtwork8
  hasHDR: boolean
  name: string
  previews: Preview2[]
  artistName: string
  videoTraits: any[]
  contentRating?: string
}

export interface Artwork8 {
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

export interface PlayParams6 {
  id: string
  kind: string
}

export interface EditorialArtwork8 {}

export interface Preview2 {
  url: string
  hlsUrl: string
  artwork: Artwork9
}

export interface Artwork9 {
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

export interface Playlists {
  href: string
  attributes: Attributes16
  data: Daum11[]
}

export interface Attributes16 {
  title: string
}

export interface Daum11 {
  id: string
  type: string
  href: string
  attributes: Attributes17
}

export interface Attributes17 {
  lastModifiedDate: string
  supportsSing: boolean
  description: Description2
  artwork: Artwork10
  url: string
  playParams: PlayParams7
  hasCollaboration: boolean
  trackCount: number
  curatorName: string
  audioTraits: any[]
  editorialArtwork: EditorialArtwork9
  isChart: boolean
  name: string
  playlistType: string
  editorialNotes: EditorialNotes4
}

export interface Description2 {
  standard: string
  short?: string
}

export interface Artwork10 {
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

export interface PlayParams7 {
  id: string
  kind: string
  versionHash: string
}

export interface EditorialArtwork9 {
  subscriptionHero: SubscriptionHero5
  subscriptionCover: SubscriptionCover2
}

export interface SubscriptionHero5 {
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

export interface SubscriptionCover2 {
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

export interface EditorialNotes4 {
  name: string
  standard: string
  short: string
}

export interface Meta {
  views: Views2
}

export interface Views2 {
  order: string[]
}
