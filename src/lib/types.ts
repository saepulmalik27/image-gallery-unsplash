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

export type PhotoSearchResult = {
    results: Photo[]
    total: number
    total_pages: number
}

export declare module PhotoSearchQuery {
    export type Args = {
        query: string
        page: number
    }
    export type Data = PhotoSearchResult
    export type Result = PhotoSearchResult
}

export declare module GetPhotoList {
    export type Args = {
        page: number
    }
    export type Data = PhotoSearchResult
    export type Result = PhotoSearchResult
}
