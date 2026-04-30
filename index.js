const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors')

// middleware
app.use(express.json())
app.use(cors())

// routes
const blogRoutes = require('./src/routes/blog.routes.js')
app.use('/blogs', blogRoutes)

// mongoose configuration
async function main() {
    try {
        await mongoose.connect(process.env.DB_URL || 'mongodb+srv://sujonbiswasdev_db_user:MwPZSj0iUx09Ojkm@cluster0meta.sqlzoxr.mongodb.net/?appName=Cluster0meta');
        console.log("mongodb connection sucessfully");
    } catch (error) {
        console.log(error.message);
    }
    app.get('/', (req, res) => {
        res.send('Meta Blog App Sever is runinng...!')
    })
}

main()




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})