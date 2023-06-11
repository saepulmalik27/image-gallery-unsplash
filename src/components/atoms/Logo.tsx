import { resetQuery } from '@/store/actions/searchBar.slice'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'

const Logo = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const handleClick = () => {
        router.push('/')
        dispatch(resetQuery())
    }
    return (
        <div className="cursor-pointer select-none items-center" onClick={handleClick}>
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
