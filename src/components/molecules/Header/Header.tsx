import React from 'react'
import Logo from '@/components/atoms/Logo'
import Search from '@/components/atoms/Search/Search'
import SVG from 'react-inlinesvg'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { useRouter } from 'next/router'
import useHeaeder from './useHeader'
import useHeader from './useHeader'
export type HeaderProps = {
    withSearch?: boolean
}

const Header: React.FC<HeaderProps> = ({ withSearch = true }) => {
    const { favoritePhotos, handleClickFavorite } = useHeader()

    return (
        <header className="sticky left-0 top-0 z-20 flex items-center justify-between gap-2 bg-white p-2 shadow-sm  sm:p-3">
            <Logo />
            {withSearch && (
                <div className="h-fit flex-1">
                    <Search className="rounded-full" />
                </div>
            )}
            <div className="flex cursor-pointer gap-2" onClick={handleClickFavorite}>
                <div className="flex">
                    <SVG src="/assets/icons/favorit.svg" className="h-6 w-6 sm:hidden" />
                    {favoritePhotos.length > 0 && (
                        <div className="h-6 w-6 rounded-full bg-red-600 text-center ">
                            <span className="text-sm font-semibold text-white">
                                {favoritePhotos.length}
                            </span>
                        </div>
                    )}
                </div>
                <p className="hidden sm:block">Favorite Photo</p>
            </div>
        </header>
    )
}

export default Header
