import Layout from '@/components/Layout'
import ContentSection from '@/components/templates/ContentSection/ContentSection'
import HeroSection from '@/components/templates/HeroSection/HeroSection'
import React from 'react'
// import photos from '@/mockup/images.json'
import useHome from './useHome'
import NoContent from '@/components/templates/NoContent/NoContent'

const HomeView = () => {
    const { randomPhoto, photos, infiniteScrollRef, isError } = useHome()
    return (
        <Layout>
            <main className="flex flex-col gap-4">
                <HeroSection randomPhoto={randomPhoto} />
                {isError ? (
                    <NoContent />
                ) : (
                    <React.Fragment>
                        <ContentSection photos={photos} />
                        {/*
                         * offset reference for infinite scroll
                         */}
                        <div className="visible" ref={infiniteScrollRef}></div>
                    </React.Fragment>
                )}
            </main>
        </Layout>
    )
}

export default HomeView
