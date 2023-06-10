import React from 'react'
import SVG from 'react-inlinesvg'

import { twMerge } from 'tailwind-merge'

const FavoriteButton = () => {
    const [isFavorite, setIsFavorite] = React.useState(false)
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite)
    }
    return (
        <div
            className={twMerge(
                'flex aspect-square h-8 w-8 cursor-pointer items-center justify-center rounded-sm border border-solid',
                isFavorite ? 'text-red-700' : 'text-slate-300'
            )}
            onClick={toggleFavorite}>
            <SVG src="/assets/icons/favorit.svg" className="h-4 w-4" />
        </div>
    )
}

export default FavoriteButton
