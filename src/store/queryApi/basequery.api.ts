import { UNSPLASH_API_KEY, UNSPLASH_API_URL } from '@/lib/constant'
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const baseQueryApi = fetchBaseQuery({
    baseUrl: UNSPLASH_API_URL,
    prepareHeaders: headers => {
        headers.set('Authorization', `Client-ID ${UNSPLASH_API_KEY}`)
        return headers
    },
})
