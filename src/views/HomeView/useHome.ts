import {
    concatPhotos,
    resetErrorPage,
    setCurrentPage,
    setErrorPage,
    setPhotos,
} from '@/store/actions/photos.slice'
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
        isError,
    } = useSelector((state: RootState) => state.photos)
    const { query: searchQuery } = useSelector((state: RootState) => state.search)

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
    const [
        handleGetPhotoList,
        { isLoading: isLoadingPhotoList, isFetching: isFetchingPhotoList, error: errorPhotoList },
    ] = photosApi.useLazyGetPhotosQuery()

    /**
     * get list of photos by query for photo content section
     */
    const [
        handleGetPhotoListByQuery,
        {
            isLoading: isLoadingPhotoSearch,
            isFetching: isFetchingPhotoSearch,
            error: errorPhotoSearch,
        },
    ] = photosApi.useLazySearchPhotoQuery()

    /**
     * infinite scroll
     */
    React.useEffect(() => {
        if (entry && entry.intersectionRatio > 0 && inView) {
            if (searchQuery) {
                handleGetPhotoListByQuery({ query: searchQuery, page: current_page + 1 })
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
    }, [inView, entry, searchQuery])

    //get search query and set photos
    React.useEffect(() => {
        if (searchQuery) {
            handleGetPhotoListByQuery({ query: searchQuery, page: current_page })
                .unwrap()
                .then(res => {
                    dispatch(setPhotos(res))
                    dispatch(resetErrorPage())
                })
                .catch(err => {
                    dispatch(setErrorPage())
                })
        }
    }, [searchQuery])

    // set initial photos
    React.useEffect(() => {
        handleGetPhotoList({ page: current_page })
            .unwrap()
            .then(res => {
                dispatch(setPhotos(res))
                dispatch(resetErrorPage())
            })
            .catch(err => {
                dispatch(setErrorPage())
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
        isError,
        isLoadingPhotoList:
            isLoadingPhotoList ||
            isFetchingPhotoList ||
            isLoadingPhotoSearch ||
            isFetchingPhotoSearch,
    }
}

export default useHome
