import useMasonry from '@/lib/hooks/useMasonry'
import { Photo } from '@/lib/types'
import Image from 'next/image'
import React from 'react'

type ContentSectionProps = {
    photos: Array<Photo>
}

const ContentSection: React.FC<ContentSectionProps> = ({ photos }) => {
    /**
     * @description logic for masonry layout
     */
    const dataImage = useMasonry(photos)

    return (
        <section className="w-full max-w-screen-init px-5 init:mx-auto init:my-0">
            <div className="grid grid-cols-1 items-start gap-x-6 sm:grid-cols-2 lg:grid-cols-3 ">
                {dataImage.map((item, index) => (
                    <div key={index} className="grid grid-cols-1 gap-y-6">
                        {item.map(image => (
                            <Image
                                src={image.urls.thumb}
                                width={image.width}
                                height={image.height}
                                alt={image.alt_description}
                                key={image.id}
                                blurDataURL={image.blur_hash}
                                className="cursor-zoom-in"
                            />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ContentSection
