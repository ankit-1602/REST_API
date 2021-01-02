//grap the required dependencies
const express=require('express')
const router=express.Router()
const mainController=require('./controllers/main.controller')
const productController=require('./controllers/product.controller')

//Define routes
router.get('/',mainController.showHome)
router.get('/products',productController.showProducts)
router.get('/products/:id',productController.showProduct)
router.post('/products',productController.insertProduct)
router.put('/products/:id',productController.updateProduct)
router.delete('/products/:id',productController.deleteProduct)

//export the router
module.exports=router
