import { Photo } from '@/lib/types'
import Image from 'next/image'
import React from 'react'
import Avatar from '../atoms/Avatar'
import { twMerge } from 'tailwind-merge'
import FavoriteButton from '../atoms/FavoriteButton'
import ShareButton from '../atoms/ShareButton'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { base83ToBase64 } from '@/utils/helper'
import { DATA_BLUR_64 } from '@/lib/constant'

type PhotoFigureProps = {
    photo: Photo
    onClick: () => void
}

const PhotoFigure: React.FC<PhotoFigureProps> = ({ photo, onClick }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const animationOptions = {
        initial: { opacity: 0, y: 20 }, //initial animation state
        animate: { opacity: inView ? 1 : 0, y: inView ? 0 : 20 }, // Animation based on inView variable
        transition: { duration: 0.6 }, // Animation duration
    }

    return (
        <motion.figure
            ref={ref}
            {...animationOptions}
            className="group flex flex-col gap-2 px-1 py-2 sm:relative">
            <div
                className={twMerge(
                    'flex items-center gap-2 sm:hidden',
                    figureGroupHover,
                    figureHeaderGroupHover
                )}>
                <Avatar src={photo.user.profile_image.small} alt={photo.user.name} />
                <p className="text-sm font-semibold">{photo.user.name}</p>
            </div>
            <Image
                src={photo.urls.thumb}
                width={photo.width}
                height={photo.height}
                alt={photo.alt_description}
                placeholder="blur"
                blurDataURL={DATA_BLUR_64}
                className="cursor-zoom-in group-hover:sm:relative group-hover:sm:z-0"
                onClick={onClick}
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = '/assets/images/default_image.png'
                }}
            />

            <div
                className={twMerge(
                    'flex items-center justify-between gap-2 sm:hidden',
                    figureGroupHover,
                    figureFooterGroupHover
                )}>
                <FavoriteButton />
                <figcaption className="truncate text-sm font-semibold sm:block">
                    {photo.description}
                </figcaption>
                <ShareButton
                    url={photo.urls.regular}
                    description={
                        'i git this awesome image from unsplash ' + ' ' + photo.description
                    }
                />
            </div>
        </motion.figure>
    )
}

const figureGroupHover =
    'group-hover:sm:absolute group-hover:sm:z-10 group-hover:sm:flex group-hover:sm:w-full group-hover:sm:bg-black group-hover:sm:bg-opacity-50 group-hover:sm:text-white group-hover:sm:p-1'
const figureHeaderGroupHover = 'group-hover:sm:left-0 group-hover:sm:top-0'
const figureFooterGroupHover = 'group-hover:sm:left-0 group-hover:sm:bottom-0'

export default PhotoFigure
