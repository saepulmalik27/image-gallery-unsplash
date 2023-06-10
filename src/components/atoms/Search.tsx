import React from 'react'
import SVG from 'react-inlinesvg'
const Search = () => {
    return (
        <div className="flex items-center gap-1 rounded-full border border-solid bg-slate-300 px-4 py-1">
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
