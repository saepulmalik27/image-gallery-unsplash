import Search from '@/components/atoms/Search'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <section className="relative h-80 md:h-[600]">
            <div className="absolute left-0 top-0 z-0 h-full w-full bg-black bg-opacity-50">
                <Image
                    fill={true}
                    src={
                        'https://images.unsplash.com/photo-1684999574712-e1b53b87b709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTkwMDB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODYyOTI3MDl8&ixlib=rb-4.0.3&q=80&w=1080'
                    }
                    alt="hero"
                    className="h-96 w-full object-cover"
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
