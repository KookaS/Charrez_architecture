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
        id_: string,
        title: string
    }[]
}

export interface MetadataSchema {
    _id: string,
    title: string,
    description: string,
    date: string
}