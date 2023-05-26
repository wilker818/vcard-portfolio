<script setup>
useHead({
  title: 'Resume',
})
</script>

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pages.resume.title') }}
      </h2>
    </header>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline" />
        </div>

        <h3 class="h3">
          {{ $t('pages.resume.titleEducation') }}
        </h3>
      </div>

      <ol class="timeline-list">
        <li v-if="false" class="timeline-item">
          <h4 class="h4 timeline-item-title">
            UNIFRAN
          </h4>

          <span>2023 — Actual</span>

          <p class="timeline-text">
            Ensino Superior: Análise e Desenvolvimento de Sistemas
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Etec José Martimiano souza
          </h4>

          <span>2020 — 2021</span>

          <p class="timeline-text">
            Ensino técnico: Desenvolvimento de Sistemas<br>
            Desenvolvi projetos individuais e em equipe, aplicando conhecimentos em linguagens como Java, Obeject Pascal(Delphi), PHP, Javascript e SQL. Aprendi sobre o ciclo de vida do desenvolvimento de software e metodologias ágeis.
          </p>
        </li>
      </ol>
    </section>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline" />
        </div>

        <h3 class="h3">
          {{ $t('pages.resume.titleExperience') }}
        </h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Software engineer - Brasil.
          </h4>

          <span>Cardano Warriors | 02/2023 - Atual</span>

          <p class="timeline-text">
            Tenho uma ampla experiência na criação de microfrontends responsivos,
            com uma dedicação especial em alcançar alta fidelidade aos designs
            fornecidos pelo UX Designer da Cardano Warriors. Tive a oportunidade de
            trabalhar no desenvolvimento da nova plataforma Cardano Warriors,
            onde aplicamos a arquitetura de microfrontends utilizando Vue 3 com
            Vitejs, Typescript e Sass.
            Durante esse projeto, tivemos a iniciativa de criar uma biblioteca (ui-kit)
            para o reaproveitamento de componentes em todos os microfrontends.
            Essa abordagem permitiu uma maior eficiência e consistência no
            desenvolvimento, garantindo uma experiência unificada aos usuários.
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Desennvolvedor front-end Pleno - Ribeirão Preto - SP.
          </h4>

          <span>Convertize | 02/2022 - 11/2022</span>

          <p class="timeline-text">
            Desenvolvimento de landing pages e lojinhas para os clientes da
            Convertize utilizando uma ampla gama de tecnologias, incluindo HTML5,
            CSS3, Javascript, Django, Jquery, Bootstrap e React.js.
            Responsável pelo atendimento personalizado aos clientes, solucionando
            problemas específicos relacionados ao Front-End.
            Realização do fechamento de chamados, garantindo a resolução eficiente
            de questões e a satisfação dos clientes.
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Desennvolvedor front-end Júnior - Ribeirão Preto - SP.
          </h4>

          <span>Convertize | 05/2021 - 02/2022</span>

          <p class="timeline-text">
            Trabalhei com a criação e manutenção das páginas do E-commerce da
            Convertize, utilizando HTML5, CSS3, Django e Bootstrap.
            Trabalhei em colaboração com a equipe de Analistas de Suporte,
            prestando atendimento a chamados tanto por telefone como por meio de
            Helpdesk via chat, e fui responsável por fornecer suporte técnico e
            solucionar problemas dos clientes, garantindo uma experiência de
            atendimento eficiente e satisfatória.
          </p>
        </li>
      </ol>
    </section>

    <section class="skill">
      <h3 class="h3 skills-title">
        {{ $t('pages.resume.titleSkills') }}
      </h3>

      <ul class="skills-list content-card">
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Vue
            </h5>
            <data value="90">90%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 90%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Angular
            </h5>
            <data value="70">70%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 70%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Nuxt
            </h5>
            <data value="50">50%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 50%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Designer Responsive
            </h5>
            <data value="90">90%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 90%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Figma
            </h5>
            <data value="50">50%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 50%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Javascript
            </h5>
            <data value="70">70%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 70%;" />
          </div>
        </li>
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Typescript
            </h5>
            <data value="70">70%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 70%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Node.js
            </h5>
            <data value="50">50%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 50%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              CI/CD
            </h5>
            <data value="20">20%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 20%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Docker
            </h5>
            <data value="50">50%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 50%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              AWS
            </h5>
            <data value="20">20%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 20%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Git
            </h5>
            <data value="70">70%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 70%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Sass
            </h5>
            <data value="70">70%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 70%;" />
          </div>
        </li>
      </ul>
    </section>
  </article>
</template>
