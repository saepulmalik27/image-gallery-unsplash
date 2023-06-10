import React from 'react'
import SVG from 'react-inlinesvg'
import { twMerge } from 'tailwind-merge'
type SearchProps = {
    className?: string
}

const Search: React.FC<SearchProps> = ({ className }) => {
    return (
        <div
            className={twMerge(
                'flex items-center gap-1 border border-solid bg-white px-4 py-1',
                className
            )}>
            <SVG src="/assets/icons/search.svg" />
            <input
                placeholder="search your image"
                type="text"
                className="flex-1 bg-transparent outline-none placeholder:capitalize"
            />
        </div>
    )
}

export default Search
