import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <div className="cursor-pointer select-none items-center">
            <Image
                src="/logo.png"
                alt="logo"
                width={40}
                height={40}
                className="aspect-square w-8 sm:w-10"
            />
        </div>
    )
}

export default Logo
