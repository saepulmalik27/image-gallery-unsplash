import FavoriteView from '@/views/FavoriteView/FavoriteView'
import Head from 'next/head'
import React from 'react'

export default function Favorite() {
    return (
        <React.Fragment>
            <Head>
                <title>Favorite Photo</title>
            </Head>
            <FavoriteView />
        </React.Fragment>
    )
}
