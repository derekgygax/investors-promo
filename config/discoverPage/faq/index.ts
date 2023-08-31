import { QUESTIONS } from "./Questions";

export const FAQ_CONFIG = {
  id: 'faq',
  header: {
    id: 'faq',
    title: {
      es: 'Preguntas Frecuentes',
      en: 'FAQs'
    },
    label: {
      es: 'Preguntas Frecuentes',
      en: 'Frequently Asked Questions'
    },
    descriptions: [],
  },
  info: [
    {
      id: 'faq',
      title: {}, // NOT NEEDED
      descriptions: [], // NOT NEEDED
      questions: QUESTIONS
    }
  ]
}
