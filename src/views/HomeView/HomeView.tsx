import Layout from '@/components/Layout'
import ContentSection from '@/components/templates/ConetentSection/ContentSection'
import HeroSection from '@/components/templates/HeroSection/HeroSection'
import React from 'react'

const HomeView = () => {
    return (
        <Layout>
            <main className="flex flex-col gap-4">
                <HeroSection />
                <ContentSection />
            </main>
        </Layout>
    )
}

export default HomeView
