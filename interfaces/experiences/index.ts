export interface Experience {
    id: number;
    title: string,
    companyAndDate: string,
    description: string
}

export interface ExperienceLocale {
    pt: Experience[];
    en: Experience[];
}
