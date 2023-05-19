import {Schema, model} from 'mongoose'

const bookSchema = new Schema({
    title: String,
    LiteraryGender: String,
    Year: Number,
    author: String,
    ISBN:String
})

export default model('Book', bookSchema)
