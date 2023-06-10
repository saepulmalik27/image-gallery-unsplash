import breakpoints from '@/config/breakpoints'
import { chunkIntoN } from '@/utils/helper'
// import { useResponsive } from './useResponsive'
import React from 'react'

const useMasonry = (photos: Array<string>) => {
    const [columns, setColumns] = React.useState(1)

    React.useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth

            if (screenWidth >= breakpoints.lg) {
                setColumns(3)
            } else if (screenWidth >= breakpoints.sm && screenWidth < breakpoints.lg) {
                setColumns(2)
            } else {
                setColumns(1)
            }
        }

        // Initial screen size calculation on component mount
        handleResize()

        // Add event listener for window resize
        window.addEventListener('resize', handleResize)

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return chunkIntoN(photos, columns)
}

export default useMasonry
