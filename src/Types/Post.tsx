export default interface IPost {
    body: object,
    id: number,
    title: string,
    image: []
}

export default interface IWork {
    title: string,
    id: number,
    description: string,
    company: string,
    year: number
}

export default interface IProject {
    title: string,
    id: number,
    description: string,
    link: string
}
