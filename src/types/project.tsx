export class Project {
    id: string
    projectCat: string
    title: string
    image: string
    description: string

    constructor(id: string, projectCat: string, title: string, image: string, description: string) {
        this.id = id
        this.projectCat = projectCat
        this.title = title
        this.image = image
        this.description = description
    }
}