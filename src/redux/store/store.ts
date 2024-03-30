import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { api } from '../api/api'
import { reducer } from '../slice/slice'
import { reducerSetting } from '../slice/applicationSetupSlice'
import { reduceModel } from '../slice/modelSlice'
import { searchHistoryReducer } from '../slice/searchHistory'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['SearchHistory'],
}

const combainer = combineReducers({
	Track: reducer,
	model: reduceModel,
	SearchHistory: searchHistoryReducer,
	applicationSetup: reducerSetting,
	[api.reducerPath]: api.reducer,
})

const persistedReducer = persistReducer(persistConfig, combainer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(api.middleware),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
