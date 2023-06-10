import React from 'react'
import Logo from '@/components/atoms/Logo'
import Search from '@/components/atoms/Search'

const Header = () => {
    return (
        <header className="flex gap-2 p-2 sm:p-3">
            <Logo />
            <div className="flex-1">
                <Search />
            </div>
        </header>
    )
}

export default Header
