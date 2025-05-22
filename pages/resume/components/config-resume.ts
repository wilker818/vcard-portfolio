import { ref } from "vue";

export function configResume() {
    const skills = ref([
        {
            title: "Vue",
            descriptionKey: "pages.resume.skills.vue.description",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg",
        },
        {
            title: "Angular",
            descriptionKey: "pages.resume.skills.angular.description",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
        },
        {
            title: "Nuxt",
            descriptionKey: "pages.resume.skills.nuxt.description",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg",
        },
        {
            title: "Javascript",
            descriptionKey: "pages.resume.skills.javascript.description",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        },
        {
            title: "Typescript",
            descriptionKey: "pages.resume.skills.typescript.description",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        },
        {
            title: "NestJS",
            descriptionKey: "pages.resume.skills.nestjs.description",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
        },
        {
            title: "Spring",
            descriptionKey: "pages.resume.skills.spring.description",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
        },
        {
            title: "Docker",
            descriptionKey: "pages.resume.skills.docker.description",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg",
        },
        {
            title: "AWS",
            descriptionKey: "pages.resume.skills.aws.description",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        },
        {
            title: "Git",
            descriptionKey: "pages.resume.skills.git.description",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        },
        {
            title: "Sass",
            descriptionKey: "pages.resume.skills.sass.description",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
        },
        {
            title: "Linux",
            descriptionKey: "pages.resume.skills.linux.description",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
        },
    ]);
    return { skills };
}
