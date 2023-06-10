import { chunkIntoN } from '@/utils/helper'
import { useResponsive } from './useResponsive'

const useMasonry = (photos: Array<string>) => {
    const { lg, sm } = useResponsive()

    if (lg) {
        return chunkIntoN(photos, 3)
    } else if (sm) {
        return chunkIntoN(photos, 2)
    } else {
        return chunkIntoN(photos, 1)
    }
}

export default useMasonry
