import {Router} from 'express'
import bookController from './books/book.controller'

const routes = Router()

routes.post('/books', bookController.create)
routes.get('/books', bookController.find)
routes.get('/books/title/:title', bookController.findByTitle)
routes.put('/books/:id', bookController.update)
routes.delete('/books/:id', bookController.delete)

export{
    routes
}
