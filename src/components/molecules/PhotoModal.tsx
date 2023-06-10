import { Photo } from '@/lib/types'
import { Dialog } from '@headlessui/react'
import Image from 'next/image'
import React from 'react'

type ModalPhotoProps = {
    isOpen: boolean
    handleCloseModal: () => void
    data: Photo | null
}

const ModalPhoto: React.FC<ModalPhotoProps> = ({ isOpen, handleCloseModal, data }) => {
    return (
        <Dialog
            className={'relative z-30 cursor-zoom-out'}
            open={isOpen}
            onClose={handleCloseModal}>
            <Dialog.Backdrop className="fixed inset-0 bg-black opacity-30" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
                    {data && (
                        <React.Fragment>
                            <Dialog.Title>{data.description}</Dialog.Title>
                            <Image
                                src={data.urls.full}
                                width={data.width}
                                height={data.height}
                                alt={data.alt_description}
                                blurDataURL={data.blur_hash}
                                onClick={handleCloseModal}
                            />
                        </React.Fragment>
                    )}
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}

export default ModalPhoto
