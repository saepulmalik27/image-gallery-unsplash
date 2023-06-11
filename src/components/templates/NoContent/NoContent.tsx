import Image from 'next/image'
import React from 'react'

const NoContent = () => {
    return (
        <div className="flex w-full flex-col items-center  justify-center p-4">
            <Image
                src={'/assets/images/no_content.jpg'}
                width={500}
                height={500}
                alt="no_content"
                className="aspect-square"
            />
            <h1 className="text-title-1">Oops! Empty Content</h1>
        </div>
    )
}

export default NoContent
