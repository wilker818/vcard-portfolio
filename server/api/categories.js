import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Front-end development',
        pt: 'Desenvolvimento Front-end',
      },
    },
  ]
})
