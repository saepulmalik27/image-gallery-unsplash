import Search from '@/components/atoms/Search/Search'
import { DATA_BLUR_64 } from '@/lib/constant'
import { Photo } from '@/lib/types'
import Image from 'next/image'
import React from 'react'

type HeroSectionProps = {
    randomPhoto: Photo
}

const HeroSection: React.FC<HeroSectionProps> = ({ randomPhoto }) => {
    return (
        <section className="relative h-80 md:h-[600]">
            <div className="absolute left-0 top-0 z-0 h-full w-full bg-black bg-opacity-50">
                <Image
                    fill={true}
                    src={randomPhoto?.urls?.regular}
                    alt="hero"
                    className="h-96 w-full object-cover"
                    placeholder="blur"
                    blurDataURL={DATA_BLUR_64}
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                        e.currentTarget.onerror = null
                        e.currentTarget.src = '/assets/images/default_hero.avif'
                    }}
                />
            </div>
            <div className="relative z-10 flex h-full w-full items-center justify-center bg-black bg-opacity-30">
                <div className="flex h-fit w-full max-w-lg flex-col gap-4 p-4">
                    <div className="text-white">
                        <h1 className="text-title-1">Unsplash_</h1>
                        <p>
                            The internet’s source for visuals. <br /> Powered by creators
                            everywhere.
                        </p>
                    </div>
                    <div className="hidden h-fit w-full sm:block">
                        <Search className="rounded-sm" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
