import { createSlice } from '@reduxjs/toolkit'

const SearchBarSlice = createSlice({
    name: 'searchBar',
    initialState: {
        query: '',
    },
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload
        },
        resetQuery: state => {
            state.query = ''
        },
    },
})

export const { setQuery, resetQuery } = SearchBarSlice.actions
export default SearchBarSlice.reducer
