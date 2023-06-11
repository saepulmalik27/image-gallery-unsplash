import { Photo } from '@/lib/types'
import React from 'react'
import SVG from 'react-inlinesvg'

import { twMerge } from 'tailwind-merge'
import useFavoriteButton from './useFavoriteButton'
import Image from 'next/image'

type FavoriteButtonProps = {
    photo: Photo
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ photo }) => {
    const { saveFavorite, isFavoritePhoto } = useFavoriteButton(photo)
    return (
        <div
            className={twMerge(
                'flex aspect-square h-8 w-8 cursor-pointer items-center justify-center rounded-sm border border-solid'
            )}
            onClick={() => {
                saveFavorite(photo)
            }}>
            {!isFavoritePhoto ? (
                <SVG src="/assets/icons/save.svg" className="h-4 w-4" />
            ) : (
                <div className="flex items-center justify-center">
                    <p className="text-title-2 h-8 w-8 text-center font-bold">-</p>
                </div>
            )}
        </div>
    )
}

export default FavoriteButton
