import fastify from 'fastify'

const app = fastify()

console.log('Hello API!')

app.listen({
    port: 3000,
    host: '0.0.0.0'
}).then(() => {
 console.log('Server is running on port 3000')
})