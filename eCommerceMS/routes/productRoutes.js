var express = require("express");
var router = express.Router();
var productSchema = require("../models/productModel")

router.post('/addProduct', (req, res) => {
    var productToAdd = new productSchema (
        {
            name : req.body.name,
            desc : req.body.desc,
            price: req.body.price
        }
    )
    productToAdd.save((err, response) => {
        if(err)
        res.send("Exception Occured");
        else
        res.send({status : 200, message : "product added successfully", product: response})
    });
});

router.get('/getAllProducts', (req, res) => {
    productSchema.find((err, response) => {
        if (err)
        res.send("Exception ocuured !!");
        else
        res.send(response);
    });
});

router.get('/getProductById', (req, res) => {
    productSchema.findById(req.query.id, (err, response) => {
        if (err)
        res.send("Exception ocuured !!");
        else
        res.send(response);
    });
});
router.get('/getProductByName', (req, res) => {
    productSchema.find({"name": req.query.name}, (err, response) => {
        if (err)
        res.send("Exception ocuured !!");
        else
        res.send(response);
    });
});
router.put('/updateProduct', (req, res) => {
    productSchema.updateMany({"name": req.query.name}, {"name": req.body.name}, (err, response) => {
        if (err)
        res.send("Exception ocuured !!");
        else
        res.send(response);
    });
});
router.put('/updateProductById', (req, res) => {
    productSchema.findByIdAndUpdate(req.query.id, {"name": req.body.name, "desc": req.body.desc, "price" : req.body.price}, (err, response) => {
        if(err)
        res.send("Exception occured !!");
        else
        res.send(response);

    });
});
router.delete('/deleteProductById', (req, res) => {
    productSchema.findByIdAndDelete(req.query.id, (err, response) => {
        if(err)
        res.send("Exception Occured !!");
        else
        res.send(response);
    });
});
router.delete('/deleteProductByName', (req, res) => {
    productSchema.remove({"name": req.query.name}, (err, response) => {
        if(err)
        res.send("Exception Occured !!");
        else
        res.send(response);
    });
});

module.exports = router;