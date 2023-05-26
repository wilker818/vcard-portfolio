<script setup>
import { useI18n } from 'vue-i18n'

useHead({
})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })

/* Testimonials */
const { data: testimonials } = await useFetch('/api/testimonials')

const testimonialItem = ref({})
const activeModal = ref(false)
const activeOverlay = ref(false)

function showTestimonial(id) {
  testimonialItem.value = testimonials.value.find(item => item.id === id)
  activeModal.value = true
  activeOverlay.value = true
}

function closeTestimonaial() {
  testimonialItem.value = {}
  activeModal.value = false
  activeOverlay.value = false
}
/* Testimonials */

/* Services */
const { data: services } = await useFetch('/api/services')
</script>

<template>
  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pages.index.title') }}
      </h2>
    </header>

    <section class="about-text">
      <p>
        {{ $t('pages.index.textAbout') }}
      </p>

      <p>
        {{ $t('pages.index.textAbout2') }}
      </p>
      <p>
        {{ $t('pages.index.textAbout3') }}
      </p>
      <p>
        {{ $t('pages.index.textAbout4') }}
      </p>
      <p>
        {{ $t('pages.index.textAbout5') }}
      </p>
      <p>
        {{ $t('pages.index.textAbout6') }}
      </p>
      <p>
        {{ $t('pages.index.textAbout7') }}
      </p>
    </section>

    <!-- service -->
    <section class="service">
      <h3 class="h3 service-title">
        {{ $t('pages.index.TitleWhatIamDoing') }}
      </h3>

      <ul class="service-list">
        <ServiceItem v-for="service in services" :key="service.id" :service="service" />
      </ul>
    </section>
  </article>
</template>
