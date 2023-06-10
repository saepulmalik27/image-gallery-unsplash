import useMasonry from '@/lib/hooks/useMasonry'
import Image from 'next/image'
import React from 'react'

const images = [
    'https://images.unsplash.com/photo-1682695798256-28a674122872?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
    'https://plus.unsplash.com/premium_photo-1686149833505-0fe209f61a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1686087344672-8ed2a1862b81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1682695798256-28a674122872?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
    'https://plus.unsplash.com/premium_photo-1686149833505-0fe209f61a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1686087344672-8ed2a1862b81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
]

const ContentSection = () => {
    const dataImage = useMasonry(images)

    return (
        <section className="w-full max-w-screen-init px-5 init:mx-auto init:my-0">
            <div className="grid grid-cols-1 items-start gap-x-6 sm:grid-cols-2 lg:grid-cols-3 ">
                {dataImage.map((item, index) => (
                    <div key={index} className="grid grid-cols-1 gap-y-6">
                        {item.map((image, key) => (
                            <Image
                                src={image as string}
                                width={400}
                                height={400}
                                alt={`image-${key}`}
                                key={key}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ContentSection
