import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryApi } from './basequery.api'
import { GetPhotoList, Photo, PhotoSearchQuery } from '@/lib/types'

export const photosApi = createApi({
    reducerPath: 'photosApi',
    baseQuery: baseQueryApi,
    tagTypes: ['Photos', 'RandomPhoto', 'SearchPhoto'],
    endpoints: builder => ({
        getPhotos: builder.query<GetPhotoList.Data, GetPhotoList.Args>({
            query: ({ page }) => `/photos?page=${page}&per_page=12`,
            providesTags: ['Photos'],
            transformResponse(response: Array<Photo>) {
                return {
                    results: response,
                    total: 0,
                    total_pages: 0,
                }
            },
        }),
        searchPhoto: builder.query<PhotoSearchQuery.Data, PhotoSearchQuery.Args>({
            query: ({ query, page }) => `/search/photos?page=${page}&per_page=12&query=${query}`,
            providesTags: ['SearchPhoto'],
            transformResponse(response: PhotoSearchQuery.Result) {
                return response
            },
        }),
        getRandomPhoto: builder.query({
            query: () => `/photos/random`,
            providesTags: ['RandomPhoto'],
        }),
    }),
})

export const { useGetPhotosQuery, useSearchPhotoQuery, useGetRandomPhotoQuery } = photosApi
