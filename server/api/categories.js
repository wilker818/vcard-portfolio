import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Web Development',
        pt: 'Web Geliştirme',
      },
    },
    {
      id: 2,
      title: {
        en: 'Application',
        pt: 'Uygulama',
      },
    },
    {
      id: 3,
      title: {
        en: 'Web Design',
        pt: 'Web Tasarım',
      },
    },
  ]
})
