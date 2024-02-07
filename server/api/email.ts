import { useCompiler } from '#vue-email'

export default defineEventHandler(async (event) => {
  return await useCompiler('Contact.vue', {
    props: {
      name: 'Lisa', message: 'Hey there!'
    }
  })
})
