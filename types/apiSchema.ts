export interface CollectionSchema {
    message: string,
    collection: string,
    metadata: MetadataSchema
}

export interface AllCollectionSchema {
    message: string,
    collections: {
        name: string,
        type: string
    }[]
}

export interface DocumentSchema {
    message: string,
    collection: string,
    documents: {
        _id: string,
        title: string
    }[]
}

export interface MetadataSchema {
    _id: string,
    title: string,
    description: string,
    date: string
}

export interface AccountSchema {
    user: string,
    password: string
}

export interface SessionSchema {
    _id: string,
    created_at: string
}

export interface NewDocSchema {
    file: File,
    title: string,
}