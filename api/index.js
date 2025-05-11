import express from 'express'
import dotenv from 'dotenv'
import { productsRouter } from './routes/products.js'
import { corsMiddleware } from './midelwares/cors.js'

dotenv.config()

const app = express()
app.use(corsMiddleware())
app.use(express.json())
app.disable('x-powered-by')

app.use('/products', productsRouter)


const PORT = process.env.PORT ?? 1234
app.listen(PORT, ()=> {
    console.log(`server listening on http://localhost:${PORT}`)
})