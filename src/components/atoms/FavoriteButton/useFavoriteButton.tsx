import { Photo } from '@/lib/types'
import { setMyFavoritePhotos } from '@/store/actions/photos.slice'
import { useDispatch } from 'react-redux'

const useFavoriteButton = () => {
    const dispatch = useDispatch()
    const handleToggleFavorite = (photo: Photo) => {
        dispatch(setMyFavoritePhotos(photo))
    }

    return {
        saveFavorite: handleToggleFavorite,
    }
}

export default useFavoriteButton
