import { defineEventHandler } from "h3";

export default defineEventHandler(() => {
    return [
        {
            id: 1,
            title: "Cardano Warriors",
            category: {
                id: 1,
                title: {
                    en: "Front-end development",
                    pt: "Desenvolvimento Front-end",
                },
            },
            content: {
                en: "I have extensive experience in creating responsive microfrontends, with a special focus on achieving high fidelity to the designs provided by Cardano Warriors UX Designer. I had the opportunity to work on the development of the new Cardano Warriors platform, where we implemented the microfrontends architecture using Vue 3 with Vitejs, Typescript, and Sass. During this project, we took the initiative to create a library (ui-kit) for component reuse across all microfrontends. This approach enabled greater efficiency and consistency in development, ensuring a unified user experience.",
                pt: "Tenho uma ampla experiência na criação de microfrontends responsivos, com uma dedicação especial em alcançar alta fidelidade aos designs fornecidos pelo UX Designer da Cardano Warriors. Tive a oportunidade de trabalhar no desenvolvimento da nova plataforma Cardano Warriors, onde aplicamos a arquitetura de microfrontends utilizando Vue 3 com Vitejs, Typescript e Sass. Durante esse projeto, tivemos a iniciativa de criar uma biblioteca (ui-kit) para o reaproveitamento de componentes em todos os microfrontends. Essa abordagem permitiu uma maior eficiência e consistência no desenvolvimento, garantindo uma experiência unificada aos usuários.",
            },
            image: "/images/project-1.png",
            linkToProject: "https://cardanowarriors.io/",
        },
    ];
});
