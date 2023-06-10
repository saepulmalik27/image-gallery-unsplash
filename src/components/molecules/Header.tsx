import React from 'react'
import Logo from '@/components/atoms/Logo'
import Search from '@/components/atoms/Search/Search'

const Header = () => {
    return (
        <header className="sticky left-0 top-0 z-20 flex items-center gap-2 bg-white p-2 shadow-sm sm:p-3">
            <Logo />
            <div className="h-fit flex-1">
                <Search className="rounded-full" />
            </div>
            {/* <h1 className="text-title-1 hidden sm:block">Unsplash_</h1> */}
        </header>
    )
}

export default Header
