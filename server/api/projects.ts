import { defineEventHandler } from "h3";

export default defineEventHandler(() => {
    return [
        {
            id: 4,
            title: "Cast Group",
            date: "2025-05-22",
            category: {
                id: 4,
                title: {
                    en: "Front-end development",
                    pt: "Desenvolvimento Front-end",
                },
            },
            content: {
                pt: "Fui chamado para uma demanda urgente da Sabesp, um novo projeto chamado Relaciona — uma plataforma interna voltada à gestão de dados de políticos e seus vínculos com a empresa. Trabalhei ao lado do Pablo, dev Angular, e juntos definimos arquitetura, ferramentas e boas práticas. Apesar do projeto ser em Angular, consegui contribuir com eficiência graças às semelhanças com Vue.",
                en: "I was called for an urgent Sabesp project: 'Relaciona', an internal platform focused on managing political data and their ties with the company. I collaborated with Pablo, an Angular developer, and together we defined the architecture, tools, and best practices. Even though the project was in Angular, I contributed efficiently thanks to its similarities with Vue.",
            },
            image: "images/cast-group/sabesp/relaciona/project-sabesp-relaciona.png",
            alt: "Sabesp - Relaciona",
        },
        {
            id: 3,
            title: "Cast Group",
            date: "2024-10-29",
            category: {
                id: 3,
                title: {
                    en: "Front-end development",
                    pt: "Desenvolvimento Front-end",
                },
            },
            content: {
                pt: 'Nossa equipe de engenharia foi acionada para uma tarefa urgente: entregar, em apenas 30 dias, o MVP do novo site complementar ao Metrô 360, chamado "Portal de Relacionamento". Fui escolhido como responsável pelo front-end do projeto. Optamos por utilizar Quasar com Vue e Vite, buscando maior performance e modernidade. Estruturei a arquitetura base do projeto e, junto com o time de front, definimos um padrão sólido para garantir consistência e escalabilidade. Fui também responsável pelo sistema de login e segurança do front-end, reutilizando ideias que já havia implementado no projeto Cardano Warriors. No final, entregamos um MVP robusto, funcional e dentro do prazo.',
                en: 'Our engineering team was called in for an urgent task: deliver the MVP of the new site that complements Metrô 360 — the "Portal de Relacionamento" — in just 20 days. I was selected to lead the front-end development of the project. We chose to use Quasar with Vue and Vite, aiming for performance and modern development standards. I structured the project’s base architecture and worked with the front-end team to define a solid foundation for consistency and scalability. I was also responsible for implementing the front-end authentication and security system, reusing ideas I had previously applied in the Cardano Warriors project. In the end, we successfully delivered a robust and functional MVP within the deadline.',
            },
            image: "images/cast-group/metro/portal-relacionamento/project-portal-relacionamento.png",
            alt: "Metrô - Portal Relacionamento",
        },
        {
            id: 2,
            title: "Cast Group",
            date: "2024-08-06",
            category: {
                id: 2,
                title: {
                    en: "Front-end development",
                    pt: "Desenvolvimento Front-end",
                },
            },
            content: {
                pt: "Meu começo aqui foi pela Upda, onde acabei me destacando pela organização dos meus códigos. Depois, fui chamado para uma refatoração da arquitetura de pastas em conjunto com outro desenvolvedor (Misael). Em seguida, foram criadas squads para cada módulo, com o objetivo de agilizar o processo e manter as regras de negócio focadas em cada responsável por seu respectivo módulo. Com isso, passei a atender diretamente o squad lead (Wheslley), com quem tive vários insights para melhoria de usabilidade e acessibilidade. Participávamos de reuniões com o cliente para definição e refinamento de regras descritas na EFS (documentação da Cast/Metro), o que nos permitiu entregar um MVP completo. Durante essa entrega, nos destacamos pela qualidade e consistência do trabalho. Por conta disso, acabei sendo notado pela contratante principal, a Cast Group, e fui internalizado. Até o momento, sigo dando sustentação ao Metrô 360, que já está em fase de produção.",
                en: "I started at Upda, where I quickly stood out for the organization and structure of my code. Later, I was invited to help refactor the project’s folder architecture alongside another developer (Misael). Soon after, squads were created for each module to streamline the process and ensure each person was focused on the business logic specific to their area. I began working closely with the squad lead (Wheslley), and together we had several valuable insights to improve usability and accessibility. We participated in client meetings to define and refine rules documented in the EFS (Cast/Metro documentation), which allowed us to deliver a fully functional MVP. Our work stood out for its quality and consistency. As a result, I caught the attention of the main contractor, Cast Group, and was brought in as an internal team member. I continue to provide support and maintenance for Metrô 360, which is now moving into production",
            },
            image: "images/cast-group/metro/360/project-metro-360.png",
            alt: "Metrô - 360",
        },
        {
            id: 1,
            title: "Cardano Warriors",
            date: "2023-05-20",
            category: {
                id: 1,
                title: {
                    en: "Front-end development",
                    pt: "Desenvolvimento Front-end",
                },
            },
            content: {
                pt: "Trabalhei no desenvolvimento da nova plataforma Cardano Warriors, onde aplicamos a arquitetura de microfrontends com Vue 3, Vite, TypeScript e Sass. Tive papel fundamental na criação de um ui-kit para padronização dos microfrontends. Isso trouxe consistência e eficiência ao time, elevando a qualidade da experiência do usuário.",
                en: "I worked on the development of the new Cardano Warriors platform, where we implemented a microfrontend architecture using Vue 3, Vite, TypeScript, and Sass. I played a key role in creating a UI kit to standardize components across microfrontends, which improved development efficiency and ensured a consistent user experience.",
            },
            image: "/images/cardano-warriors/project-1.png",
            alt: "Cardano Warriors - Home",
            linkToProject: "https://cardanowarriors.io/",
        },
    ];
});
