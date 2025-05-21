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
    linkToProject: string;
}
