import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

const useFavorite = () => {
    const { favoritePhotos } = useSelector((state: RootState) => state.photos)

    return {
        favoritePhotos,
    }
}

export default useFavorite
