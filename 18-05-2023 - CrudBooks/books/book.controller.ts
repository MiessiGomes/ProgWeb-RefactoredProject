import {Request, Response} from 'express'
import { bookService } from './book.service'

class BookController{
    async create(req: Request, res: Response){
        const book = await new bookService().create(req.body)

        return res.json(book)
    }

    async find(req: Request, res: Response){
        const books = await new bookService().find()

        return res.json(books)
    }

    async findByTitle(req: Request, res: Response){
        const books = await new bookService().findByTitle(req.params.title)

        return res.json(books)
    }

    async update(req: Request, res: Response){
        const books = await new bookService().Update(req.params.id, req.body)

        return res.json(books)
    }

    async delete(req: Request, res: Response){
        const books = await new bookService().delete(req.params.id)

        return res.json(books)
    }

    //NÃO AGUENTO MAIS FAZER ESSA BOSTA ALGUÉM ME AJUDA

}

export default new BookController()
