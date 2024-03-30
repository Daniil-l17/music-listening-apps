import {Root} from '@/types/TrackSearch'
import {IAlbumDetail} from '@/types/albumDetail'
import {RootArtist} from '@/types/artistDetail'
import {ITopTrack} from '@/types/topTracksRussia'
import {TrackInfo} from '@/types/trackInfo'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.shazam.com/services/amapi/v1/catalog/RU/',
  }),
  endpoints: (builder) => ({
    GetTopTracksRussia: builder.query<ITopTrack, number>({
      query: (number) => ({
        url: 'playlists/pl.b96cdf2da806490ea383b8a0cb45790d/tracks?l=ru&relate[songs]=artists,music-videos',
        params: {
          limit: number,
        },
      }),
    }),
    getTrackSearch: builder.query<Root, string>({
      query: (search) => ({
        url: '/search?types=songs,artists',
        params: {
          term: search,
          limit: 50,
        },
      }),
    }),
    getPopularArtick: builder.query<RootArtist, number>({
      query: (id) =>
        `/artists/${id}?extend=artistBio,bornOrFormed,editorialArtwork,origin,trackCount&views=full-albums,featured-albums,latest-release,top-music-videos,similar-artists,top-songs,playlists,featured-playlists`,
    }),
    getDetailAlbum: builder.query<IAlbumDetail, number>({
      query: (id) => `albums/${id}`,
    }),
    getTrackInfo: builder.query<TrackInfo, number>({
      query: (id) => `/songs/${id} `,
    }),
  }),
})

export const {
  useGetTrackInfoQuery,
  useGetTopTracksRussiaQuery,
  useGetTrackSearchQuery,
  useGetPopularArtickQuery,
  useGetDetailAlbumQuery,
} = api
