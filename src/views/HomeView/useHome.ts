import { setPhotos } from '@/store/actions/photos.slice'
import { useGetPhotosQuery, useGetRandomPhotoQuery } from '@/store/queryApi/photos.api'
import { RootState } from '@/store/store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useHome = () => {
    /**
     * get random photo for hero section
     */
    const {
        data: randomPhoto,
        isLoading,
        isFetching,
        isError: isErrorRandomPhoto,
        isSuccess: isSuccessRandomPhoto,
    } = useGetRandomPhotoQuery({})

    /**
     * get list of photos for photo content section
     */

    const {
        data: photosData,
        isLoading: isLoadingPhotos,
        isFetching: isFetchingPhotos,
        isError: isErrorPhotos,
        isSuccess: isSuccessPhotos,
    } = useGetPhotosQuery({
        page: 1,
    })

    const dispatch = useDispatch()

    React.useEffect(() => {
        if (isSuccessPhotos) {
            dispatch(setPhotos(photosData))
        }
    }, [isSuccessPhotos])

    /**
     * get global state photos for photo content section
     */
    const { results: photos, total, total_pages } = useSelector((state: RootState) => state.photos)

    return {
        randomPhoto,
        isLoadingRandomPhoto: isLoading || isFetching,
        isErrorRandomPhoto,
        isSuccessRandomPhoto,
        photos,
        total,
        total_pages,
    }
}

export default useHome
