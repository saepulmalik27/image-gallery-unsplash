import { RootState } from '@/store/store'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const useHeader = () => {
    const { favoritePhotos } = useSelector((state: RootState) => state.photos)
    const router = useRouter()
    const handleClickFavorite = () => {
        router.push('/favorite')
    }

    return {
        favoritePhotos,
        handleClickFavorite,
    }
}

export default useHeader
