import { Photo, PhotoSearchResult } from '@/lib/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type PhotosState = {
    results: Photo[]
    total: number
    total_pages: number
    current_page: number
}

const initialState: PhotosState = {
    results: [],
    total: 0,
    total_pages: 0,
    current_page: 1,
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
        setCurrentPage: (state: PhotosState, action: PayloadAction<number>) => {
            state.current_page = action.payload
        },
        concatPhotos: (state: PhotosState, action: PayloadAction<PhotoSearchResult>) => {
            state.results = [...state.results, ...action.payload.results]
            state.total = action.payload.total
            state.total_pages = action.payload.total_pages
        },
    },
})

export const { setPhotos, setCurrentPage, concatPhotos } = PhotosSlice.actions
export default PhotosSlice.reducer
