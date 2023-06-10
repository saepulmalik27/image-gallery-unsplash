import { Photo } from '@/lib/types'
import React from 'react'

const useContent = () => {
    const [selectedContent, setSelectedContent] = React.useState<Photo | null>(null)
    const handleSelectContent = (content: Photo) => {
        setSelectedContent(content)
        setIsOpenModal(true)
    }
    const [isOpenModal, setIsOpenModal] = React.useState(false)
    const handleCloseModal = () => {
        setIsOpenModal(false)
        selectedContent && setSelectedContent(null)
    }

    return {
        selectedContent,
        handleSelectContent,
        isOpenModal,
        handleCloseModal,
    }
}

export default useContent
