import { Photo, PhotoSearchResult } from '@/lib/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type PhotosState = {
    results: Photo[]
    total: number
    total_pages: number
}

const initialState: PhotosState = {
    results: [],
    total: 0,
    total_pages: 0,
}

const PhotosSlice = createSlice({
    name: 'photos',
    initialState: initialState,
    reducers: {
        setPhotos: (state: PhotosState, action: PayloadAction<PhotoSearchResult>) => {
            state.results = action.payload.results
            state.total = action.payload.total
            state.total_pages = action.payload.total_pages
        },
    },
})

export const { setPhotos } = PhotosSlice.actions
export default PhotosSlice.reducer
