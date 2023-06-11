import { Photo } from '@/lib/types'
import { Dialog } from '@headlessui/react'
import Image from 'next/image'
import React from 'react'
import Avatar from '../atoms/Avatar'
import FavoriteButton from '../atoms/FavoriteButton'
import ShareButton, { PopoverPosition } from '../atoms/ShareButton'
import SVG from 'react-inlinesvg'
import { base83ToBase64 } from '@/utils/helper'
import { DATA_BLUR_64 } from '@/lib/constant'

type ModalPhotoProps = {
    isOpen: boolean
    handleCloseModal: () => void
    data: Photo | null
}

const ModalPhoto: React.FC<ModalPhotoProps> = ({ isOpen, handleCloseModal, data }) => {
    return (
        <Dialog className={'relative z-50 '} open={isOpen} onClose={handleCloseModal}>
            {/* backdrop */}
            <div className="fixed inset-0 cursor-zoom-out bg-black/30" aria-hidden="true" />
            {/* scrollable modal */}
            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <Dialog.Panel className="relative mx-auto max-w-screen-init rounded bg-white px-5 py-12 sm:px-10 md:px-20 lg:px-40">
                        <div
                            className="absolute right-0 top-0 flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-sm border border-solid text-lg font-bold text-slate-700"
                            onClick={handleCloseModal}>
                            <SVG src="/assets/icons/close.svg" className="h-8 w-8" />
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
                                        <ShareButton
                                            url={data.urls.regular}
                                            description={
                                                'i git this awesome image from unsplash ' +
                                                ' ' +
                                                data.description
                                            }
                                            popover={PopoverPosition.BOTTOM_LEFT}
                                        />
                                    </div>
                                </Dialog.Title>
                                <Image
                                    src={data.urls.regular}
                                    width={data.width}
                                    height={data.height}
                                    alt={data.alt_description}
                                    blurDataURL={DATA_BLUR_64}
                                    placeholder="blur"
                                    className="cursor-zoom-out"
                                    onClick={handleCloseModal}
                                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                        e.currentTarget.onerror = null
                                        e.currentTarget.src = '/assets/images/default_image.png'
                                    }}
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
