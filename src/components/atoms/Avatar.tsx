import Image from 'next/image'
import React from 'react'

type AvatarProps = {
    src: string
    alt: string
}

const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
    return (
        <div className="flex items-center justify-between">
            <Image
                src={src}
                width={40}
                height={40}
                alt={alt}
                className="rounded-full border border-solid"
            />
        </div>
    )
}

export default Avatar
