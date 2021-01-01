//grab our dependencies
require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const router=require('./routes')
const app=express()
const PORT=process.env.PORT || 7000

app.use(express.urlencoded({extended: true}))
app.use(express.json())

//Connect to database
mongoose.connect(process.env.DB_URI,
    { 
     useUnifiedTopology: true,
     useNewUrlParser: true
    })
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//set the routes
app.use(router)

app.listen(PORT,()=>{
    console.log(`Server listening on PORT ${PORT}`)
})