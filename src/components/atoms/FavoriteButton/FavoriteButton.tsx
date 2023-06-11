import { Photo } from '@/lib/types'
import React from 'react'
import SVG from 'react-inlinesvg'

import { twMerge } from 'tailwind-merge'
import useFavoriteButton from './useFavoriteButton'

type FavoriteButtonProps = {
    photo: Photo
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ photo }) => {
    const { saveFavorite } = useFavoriteButton()
    return (
        <div
            className={twMerge(
                'flex aspect-square h-8 w-8 cursor-pointer items-center justify-center rounded-sm border border-solid'
            )}
            onClick={() => {
                saveFavorite(photo)
            }}>
            <SVG src="/assets/icons/save.svg" className="h-4 w-4" />
        </div>
    )
}

export default FavoriteButton
