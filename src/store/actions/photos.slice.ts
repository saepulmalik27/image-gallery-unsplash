import { Photo, PhotoSearchResult } from '@/lib/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type PhotosState = {
    results: Photo[]
    total: number
    total_pages: number
    current_page: number
    isError: boolean
    favoritePhotos: Photo[]
}

const initialState: PhotosState = {
    results: [],
    total: 0,
    total_pages: 0,
    current_page: 1,
    isError: false,
    favoritePhotos: [],
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
        setErrorPage: (state: PhotosState) => {
            state.results = []
            state.total = 0
            state.total_pages = 0
            state.current_page = 1
            state.isError = true
        },
        resetErrorPage: (state: PhotosState) => {
            state.isError = false
        },
        setMyFavoritePhotos: (state: PhotosState, action: PayloadAction<Photo>) => {
            state.favoritePhotos = [...state.favoritePhotos, action.payload]
        },
        removeMyFavoritePhotos: (state: PhotosState, action: PayloadAction<Photo>) => {
            state.favoritePhotos = state.favoritePhotos.filter(
                photo => photo.id !== action.payload.id
            )
        },
    },
})

export const {
    setPhotos,
    setCurrentPage,
    concatPhotos,
    setErrorPage,
    resetErrorPage,
    setMyFavoritePhotos,
} = PhotosSlice.actions
export default PhotosSlice.reducer
