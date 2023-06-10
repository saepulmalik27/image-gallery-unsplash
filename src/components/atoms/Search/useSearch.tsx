import { PhotoSearchResult } from '@/lib/types'
import { setPhotos } from '@/store/actions/photos.slice'
import { resetQuery, setQuery } from '@/store/actions/searchBar.slice'
import { photosApi } from '@/store/queryApi/photos.api'
import { RootState } from '@/store/store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useSearch = () => {
    const dispatch = useDispatch()
    const { query } = useSelector((state: RootState) => state.search)
    const [searchQuery, setSearchQuery] = React.useState<string>(query || '')
    const [searchPhoto] = photosApi.useLazySearchPhotoQuery()

    /**
     * set searchQuery state when global query search state change
     */
    React.useEffect(() => {
        setSearchQuery(query)
    }, [query])

    /**
     * @function handleClearSearch
     * method to clear search query
     */
    const handleClearSearch = () => {
        dispatch(resetQuery())
        setSearchQuery('')
    }

    /**
     * @function handleSearch
     * @param e
     * when user press enter, it will dispatch setQuery action
     */
    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            dispatch(setQuery(e.currentTarget.value))
            searchPhoto({ query: e.currentTarget.value, page: 1 })
                .unwrap()
                .then((res: PhotoSearchResult) => {
                    dispatch(setPhotos(res))
                })
        }
    }

    /**
     * @function handleChangeSearch
     * @param e
     * when user type in search input, it will set searchQuery state
     */
    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.currentTarget.value)
    }

    return {
        searchQuery,
        handleClearSearch,
        handleSearch,
        handleChangeSearch,
        query,
    }
}

export default useSearch
