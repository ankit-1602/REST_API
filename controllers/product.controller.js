const Product =require('../models/product')
productController={
    //Get request for all products
    showProducts:(req,res)=>{
        Product.find({},(err,products)=>{
            if(err){
                res.status(404)
                res.send('Event not found')
            }
            res.json(products)
        })
    },
    //Get data for a single product
    showProduct:(req,res)=>{
        const id=req.params.id
        Product.findOne({id:id},(err,product)=>{
            if(err){
                res.status(404)
                res.send('Event not found')
            }
            res.json(product)
        })
    },
    //POST request to insert data into the database
    insertProduct:(req,res)=>{
        const newProduct=new Product({
            id: req.body.id,
            name: req.body.name,
            price:req.body.price,
            description: req.body.description
        })

        newProduct.save((err)=>{
            if(err){
                throw err;
            }
            res.send('Product inserted Successfully')
        })
    },
    //Delete request to delete a particular product
    deleteProduct:(req,res)=>{
        Product.remove({id:req.params.id},(err,data)=>{
            if(err){
                res.status(505)
                res.send('The search product does not exist in the database')
            }
            res.send(data)
        })
    }
}

module.exports=productController