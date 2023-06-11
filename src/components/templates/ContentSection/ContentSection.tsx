import { Photo } from '@/lib/types'
import React from 'react'
import useContent from './useContent'
import ModalPhoto from '@/components/molecules/PhotoModal'
import PhotoFigure from '@/components/molecules/PhotoFigure'

type ContentSectionProps = {
    photos: Array<Photo>
}

const ContentSection: React.FC<ContentSectionProps> = ({ photos }) => {
    /**
     * @description logic for masonry layout
     */

    const { selectedContent, handleSelectContent, isOpenModal, handleCloseModal } = useContent()
    return (
        <section className="w-full  max-w-screen-init px-5 init:mx-auto init:my-0">
            <div className="columns-1 sm:columns-2 lg:columns-3">
                {photos.map((photo, index) => (
                    <PhotoFigure
                        key={photo.id + index}
                        photo={photo}
                        onClick={() => {
                            handleSelectContent(photo)
                        }}
                    />
                ))}
            </div>
            <ModalPhoto
                isOpen={isOpenModal}
                handleCloseModal={handleCloseModal}
                data={selectedContent}
            />
        </section>
    )
}

export default ContentSection
