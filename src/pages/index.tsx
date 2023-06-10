import HomeView from '@/views/HomeView/HomeView'
import Head from 'next/head'
import React from 'react'

export default function Home() {
    return (
        <React.Fragment>
            <Head>
                <title>Home | Search your Image</title>
            </Head>
            <HomeView />
        </React.Fragment>
    )
}
