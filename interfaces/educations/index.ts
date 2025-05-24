export interface Eduacation {
    id: number;
    title: string,
    subTitle: string,
    date: string,
    description: string
}

export interface EduacationLocale {
    pt: Eduacation[];
    en: Eduacation[];
}
