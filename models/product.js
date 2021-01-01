const mongoose=require('mongoose')
const schema=mongoose.Schema

//create a schema
const productSchema=new schema({
    id:{
        type:String,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
    }
})

const productModel=mongoose.model('Product',productSchema)
module.exports= productModel