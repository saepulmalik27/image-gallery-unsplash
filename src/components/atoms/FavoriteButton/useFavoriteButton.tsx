import { Photo } from '@/lib/types'
import { removeMyFavoritePhotos, setMyFavoritePhotos } from '@/store/actions/photos.slice'
import { RootState } from '@/store/store'
import React, { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useFavoriteButton = (photo: Photo) => {
    const dispatch = useDispatch()

    const { favoritePhotos } = useSelector((state: RootState) => state.photos)

    const isFavoritePhoto = useMemo(() => {
        return favoritePhotos.some(favoritePhoto => favoritePhoto.id === photo.id)
    }, [favoritePhotos, photo])

    const handleToggleFavorite = useCallback(
        (photo: Photo) => {
            if (isFavoritePhoto) {
                dispatch(removeMyFavoritePhotos(photo))
            } else {
                dispatch(setMyFavoritePhotos(photo))
            }
        },
        [isFavoritePhoto]
    )

    return {
        saveFavorite: handleToggleFavorite,
        isFavoritePhoto,
    }
}

export default useFavoriteButton
