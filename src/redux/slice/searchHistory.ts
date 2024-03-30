import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Daum3 } from '../../types/TrackSearch'

interface State {
	SearchHistory: Daum3[]
}

const initialState: State = {
	SearchHistory: [],
}

export const SearchHistory = createSlice({
	name: 'SearchHistory',
	initialState,
	reducers: {
		AddSearchHistory: (state, { payload }: PayloadAction<Daum3>) => {
			const result = state.SearchHistory.some((el) => el.id === payload.id)
			if (!result) {
				if (state.SearchHistory.length >= 45) {
					const lastElement = state.SearchHistory.at(-1)
					state.SearchHistory = state.SearchHistory.filter((item) => item.id !== lastElement?.id)
					state.SearchHistory.unshift(payload)
				} else {
					state.SearchHistory.unshift(payload)
				}
			}
		},
		deleteSearchHistory: (state) => {
			state.SearchHistory = state.SearchHistory = []
		},
	},
})

export const { reducer: searchHistoryReducer, actions: actionsSearch } = SearchHistory
