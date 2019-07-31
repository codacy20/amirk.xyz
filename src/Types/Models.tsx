export interface IPost {
    body: object,
    id: number,
    title: string,
    image: []
}

export interface IWork {
    title: string,
    id: number,
    description: string,
    company: string,
    year: number
}

export interface IProject {
    name: string,
    id: number,
    description: string,
    html_url: string,
    language: string
}
