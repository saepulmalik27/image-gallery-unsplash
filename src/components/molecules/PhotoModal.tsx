import { Photo } from '@/lib/types'
import { Dialog } from '@headlessui/react'
import Image from 'next/image'
import React from 'react'
import Avatar from '../atoms/Avatar'
import FavoriteButton from '../atoms/FavoriteButton'
import ShareButton, { PopoverPosition } from '../atoms/ShareButton'

type ModalPhotoProps = {
    isOpen: boolean
    handleCloseModal: () => void
    data: Photo | null
}

const ModalPhoto: React.FC<ModalPhotoProps> = ({ isOpen, handleCloseModal, data }) => {
    return (
        <Dialog className={'relative z-50 '} open={isOpen} onClose={handleCloseModal}>
            <div className="fixed inset-0 cursor-zoom-out bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <Dialog.Panel className="relative mx-auto max-w-screen-init rounded bg-white p-5 sm:p-10 md:p-20 lg:p-40">
                        <div
                            className="absolute right-0 top-0 flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-sm border border-solid text-lg font-bold text-slate-700"
                            onClick={handleCloseModal}>
                            X
                        </div>
                        {data && (
                            <div className="flex flex-col gap-4">
                                <Dialog.Title className={'flex flex-col gap-4'}>
                                    <div className="flex items-center gap-2 text-black">
                                        <Avatar
                                            src={data.user.profile_image.medium}
                                            alt={data.user.name}
                                        />
                                        <p className="text-sm font-semibold sm:text-lg">
                                            {data.user.name}
                                        </p>
                                    </div>
                                    <p className="text-sm font-semibold sm:text-lg">
                                        {data.description}
                                    </p>
                                    <div className="flex gap-2">
                                        <FavoriteButton />
                                        <ShareButton popover={PopoverPosition.BOTTOM_LEFT} />
                                    </div>
                                </Dialog.Title>
                                <Image
                                    src={data.urls.full}
                                    width={data.width}
                                    height={data.height}
                                    alt={data.alt_description}
                                    blurDataURL={data.blur_hash}
                                    className="cursor-zoom-out"
                                    onClick={handleCloseModal}
                                />
                            </div>
                        )}
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>
    )
}

export default ModalPhoto
