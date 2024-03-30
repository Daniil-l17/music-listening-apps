
import {Daum, Daum3} from '@/types/TrackSearch'
import {Daumalbum} from '@/types/albumDetail'
import {Daum4} from '@/types/artistDetail'
import {ids} from '@/types/slicetype'
import {Track} from '@/types/topTracksRussia'
import {PayloadAction, createSlice} from '@reduxjs/toolkit'

interface State {
  Track: {
    indexTrack: number
    currentTrack: {
      url: string
      title: string
      description: string
      index: string
      audio: string
      artistId: string
    }
    currentTrackIsPlaying: boolean
    allSongs: Track[] | Daum3[] | ids[]
    met: 'search' | 'home' | '' | 'mycollection' | 'artist' | 'album' | 'track-info'
  }
}

const initialState: State = {
  Track: {
    indexTrack: 0,
    currentTrack: {
      url: '',
      title: '',
      description: '',
      index: '',
      audio: '',
      artistId: '',
    },
    currentTrackIsPlaying: false,
    allSongs: [],
    met: '',
  },
}

export const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    AllSongs: (state, {payload}: PayloadAction<Track[]>) => {
      state.Track.allSongs = payload.filter((el) => el.attributes.previews.length)
    },
    addMet: (
      state,
      {payload}: PayloadAction<'search' | 'home' | 'mycollection' | 'artist' | 'album' | 'track-info'>,
    ) => {
      state.Track.met = payload
    },
    AllSongsSearch: (state, {payload}: PayloadAction<Daum3[]>) => {
      state.Track.allSongs = payload
    },
    addPlusIndex: (state) => {
      if (state.Track.allSongs.length - 1 === state.Track.indexTrack) {
        state.Track.indexTrack = 0
      } else {
        state.Track.indexTrack += 1
      }
    },
    addMyCollectionSong: (state, {payload}: PayloadAction<ids[]>) => {
      state.Track.allSongs = payload
    },
    addMinusIndex: (state) => {
      if (state.Track.indexTrack !== 0) {
        state.Track.indexTrack -= 1
      }
    },
    AddTrack: (state, {payload}: PayloadAction<Track>) => {
      if (payload) {
        state.Track.currentTrack.index = payload.id
        state.Track.currentTrack.title = payload.attributes.name
        state.Track.currentTrack.audio = payload.attributes.previews[0].url
        state.Track.currentTrack.description = payload.attributes.artistName
        state.Track.currentTrack.url = payload.attributes.artwork.url
        if (state.Track.met === 'artist' && state.Track.met === 'artist') {
          state.Track.currentTrack.artistId = state.Track.currentTrack.artistId
        }
        if (state.Track.met !== 'artist' && state.Track.met !== 'album' ) {
          state.Track.currentTrack.artistId = payload.relationships.artists.data[0].id
        }
      }
    },
    AddArtistId: (state, {payload}: PayloadAction<string>) => {
        state.Track.currentTrack.artistId = payload
    },
    AddTrackmyCollection: (state, {payload}: PayloadAction<ids>) => {
      if (payload) {
        state.Track.currentTrack.audio = payload.audio
        state.Track.currentTrack.title = payload.title
        state.Track.currentTrack.description = payload.description
        state.Track.currentTrack.index = payload.index
        state.Track.currentTrack.url = payload.url
        state.Track.currentTrack.artistId = payload.artistId
      }
    },
    AddTrackSearch: (state, {payload}: PayloadAction<Daum3>) => {
      if (payload) {
        state.Track.currentTrack.index = payload.id
        state.Track.currentTrack.title = payload.attributes.name
        state.Track.currentTrack.audio = payload.attributes.previews[0].url
        state.Track.currentTrack.description = payload.attributes.artistName
        state.Track.currentTrack.url = payload.attributes.artwork.url
      }
    },
    playTrack: (state, {payload}: PayloadAction<boolean>) => {
      state.Track.currentTrackIsPlaying = payload
    },
    toggleTrack: (state) => {
      state.Track.currentTrackIsPlaying = !state.Track.currentTrackIsPlaying
    },
    currentIndexTrack: (state, {payload}: PayloadAction<number>) => {
      state.Track.indexTrack = payload
    },
  },
})

export const {reducer, actions} = slice
