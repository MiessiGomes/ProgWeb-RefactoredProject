import express from 'express'
import mongoose from 'mongoose'
import {routes} from './routes'

class App{
    public express: express.Application

    public constructor(){
        this.express = express()
        this.middleware()
        this.routes()
        this.database()
    }

    public middleware(): void{
        this.express.use(express.json())
    }

    public async database(){
        try {
            await mongoose.connect('mongodb://127.0.0.1:27017/books');
            console.log('Database connection successfuls')
        } catch (err) {
            console.error('Cannot connect to database, error', err)
        }
    }

    public routes(): void{
        this.express.use(routes)
    }
}

export default new App().express
