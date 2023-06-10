export type Photo = {
    id: string
    slug: string
    width: number
    height: number
    color: string
    blur_hash: string
    alt_description: string
    description: string | null
    urls: PhotoUrls
    user: PhotoUser
}

type PhotoUrls = {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
}

type PhotoUser = {
    name: string
    profile_image: {
        small: string
        medium: string
        large: string
    }
}
