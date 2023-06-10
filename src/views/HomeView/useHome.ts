import { concatPhotos, setCurrentPage, setPhotos } from '@/store/actions/photos.slice'
import { photosApi, useGetRandomPhotoQuery } from '@/store/queryApi/photos.api'
import { RootState } from '@/store/store'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useDispatch, useSelector } from 'react-redux'

const useHome = () => {
    const dispatch = useDispatch()
    const { ref: infiniteScrollRef, inView, entry } = useInView()
    /**
     * get global state photos for initial photo content section
     */
    const {
        results: photos,
        total,
        total_pages,
        current_page,
    } = useSelector((state: RootState) => state.photos)
    const { query } = useSelector((state: RootState) => state.search)
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
    const [handleGetPhotoList] = photosApi.useLazyGetPhotosQuery()

    /**
     * get list of photos by query for photo content section
     */
    const [handleGetPhotoListByQuery] = photosApi.useLazySearchPhotoQuery()

    /**
     * infinite scroll
     */

    React.useEffect(() => {
        if (entry && entry.intersectionRatio > 0 && inView) {
            if (query) {
                handleGetPhotoListByQuery({ query, page: current_page + 1 })
                    .unwrap()
                    .then(res => {
                        dispatch(concatPhotos(res))
                        dispatch(setCurrentPage(current_page + 1))
                    })
            } else {
                handleGetPhotoList({ page: current_page + 1 })
                    .unwrap()
                    .then(res => {
                        dispatch(concatPhotos(res))
                        dispatch(setCurrentPage(current_page + 1))
                    })
            }
        }
    }, [inView, entry, query])

    // set initial photos
    React.useEffect(() => {
        handleGetPhotoList({ page: current_page })
            .unwrap()
            .then(res => {
                dispatch(setPhotos(res))
            })
    }, [])

    return {
        randomPhoto,
        isLoadingRandomPhoto: isLoading || isFetching,
        isErrorRandomPhoto,
        isSuccessRandomPhoto,
        photos,
        total,
        total_pages,
        infiniteScrollRef,
    }
}

export default useHome
