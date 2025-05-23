interface Title {
    en: string;
    pt: string;
}

interface Category {
    id: number;
    title: Title;
}

interface Content {
    en: string;
    pt: string;
}

export interface Project {
    id: number;
    title: string;
    category: Category;
    content: Content;
    image: string;
    alt: string;
    linkToProject: string;
}

export interface Skill {
    id: number;
    title: string;
    descriptionKey: string;
    icon: string;
}
