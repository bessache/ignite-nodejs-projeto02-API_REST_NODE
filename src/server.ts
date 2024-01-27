import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'hello world 2021'
})
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
