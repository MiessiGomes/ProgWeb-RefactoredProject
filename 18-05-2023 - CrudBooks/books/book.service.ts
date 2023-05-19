import bookModel from "./book.schema";

export class bookService{
    async create(book: any){
        const createdBook = await bookModel.create(book)

        return createdBook
    }

    async find(){
        const findedBook = await bookModel.find()

        return findedBook
    }

    async findByTitle(title: any){
        const findByTitle = await bookModel.findOne({
            title: title.toString()
        })

        return findByTitle
    }

    async Update(id: any, book: any){
        const updatedBook = await bookModel.findByIdAndUpdate(id, {
            title: book.title,
            author: book.author,
        }, {new: true})

        return updatedBook
    }

    async delete(id: any){
        await bookModel.findByIdAndDelete(id)

        return "Book Deleted !"
    }
}
