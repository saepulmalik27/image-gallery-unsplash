import Layout from '@/components/Layout'
import React from 'react'
import useFavorite from './useFavorite'
import ContentSection from '@/components/templates/ContentSection/ContentSection'
import NoContent from '@/components/templates/NoContent/NoContent'

const FavoriteView = () => {
    const { favoritePhotos } = useFavorite()
    return (
        <Layout withSearch={false}>
            <main className="m-44 p-44">
                {favoritePhotos.length > 0 ? (
                    <ContentSection photos={favoritePhotos} />
                ) : (
                    <NoContent />
                )}
            </main>
        </Layout>
    )
}

export default FavoriteView
