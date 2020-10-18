export interface ProjectSchema {
    message: string,
    id: string,
    metadata: {
        _id: string,
        title: string,
        description: string,
        date: string
    }
}