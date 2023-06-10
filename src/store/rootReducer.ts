import photosSlice from './actions/photos.slice'
import SearchBarSlice from './actions/searchBar.slice'
import { photosApi } from './queryApi/photos.api'
import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    // Add reducers here
    search: SearchBarSlice,
    photos: photosSlice,
    photosApi: photosApi.reducer,
})

export default rootReducer
