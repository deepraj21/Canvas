const port = 4000;
const express = require("express")
const app = express();
const mongoose = require("mongoose"); 
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { error } = require("console");
require('dotenv').config();

app.use(express.json());
app.use(cors());

// database connection with mongodb

const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI);

// API Creation

app.get("/",(req,res)=>{
    res.send("Express Backend");
});

// Image storage engine

const Storage = multer.diskStorage({
    destination:"./uploads/images",
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({storage:Storage});

// creating upload endpoint for images

app.use('/images',express.static('uploads/images'));

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success : 1,
        image_url : `http://localhost:${port}/images/${req.file.filename}`
    })
})

// User Schema

const Product = mongoose.model("product",{
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    new_price:{
        type:Number,
        required:true
    },
    old_price:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    available:{
        type:Boolean,
        default:true
    }
    
})

app.post("/addProduct",async(req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length > 0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }
    else{
        id = 1;
    }
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
        available:req.body.available
    });
    console.log(product);
    await product.save();
    console.log("saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})

// api for deleting product

app.post('/deleteProduct',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("deleted");
    res.json({
        success:true,
        name : req.body.name
    })
})

// api for getting all products

app.get("/allProducts",async(req,res)=>{
    let products = await Product.find({});
    console.log("All products fetched")
    res.send(products);
})
    
// schema creating for user model

const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type: Object,
    },
    date:{
        type:Date,
        dafault:Date.now,
    }
})

// creating endpoint for registring the users

app.post('/signup',async (req,res)=>{
    let check = await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:"existing user found with same email-ID"})
    }
    let cart = {}
    for (let index = 0; index < 300; index++) {
        cart[index] =0;
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })
    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }

    const token = jwt.sign(data,'secret_canvas');
    res.json({success:true,token})
})

// creating endpoint for user login

app.post('/login',async (req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if(user){
        const passCompare = req.body.password === user.password;
        if(passCompare){const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_canvas');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"Wrong password"});
        }
    }
    else{
        res.json({success:false,errors:"Wrong Email-ID"});
    }
})

// creating endpoints for new collections

app.get('/newcollection',async (req,res)=>{
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    res.send(newcollection);
})

// creating endpoint for popular collection
app.get('/popularitems',async (req,res)=>{
    let products = await Product.find({});
    let popularitems = products.slice(0,4);
    res.send(popularitems);
})

// creating middleware to fetch user

const fetchUser = async(req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({errors:"please authenticate using a valid token"});
    }
    else{
        try {
            const verify = jwt.verify(token,'secret_canvas');
            req.user = verify.user;
            next();
        } catch (error) {
            res.status(401).send({errors:"Invalid token"});
        }
    
    }
}

// creating endpoint for adding product to cart

app.post('/addtocart',fetchUser, async (req,res)=>{
    let userData = await Users.findOne({_id:req.user.id});
    let cart = userData.cartData;
    cart[req.body.itemId] = cart[req.body.itemId] + 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:cart});
    res.send("added to cart");
})

// creating endpoint for removing product from cart

app.post('/removefromcart',fetchUser,async (req,res)=>{
    let userData = await Users.findOne({ _id: req.user.id });
    let cart = userData.cartData;
    if (cart[req.body.itemId]>0){
         cart[req.body.itemId] = cart[req.body.itemId] - 1;
    }
    await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: cart });
    res.send("removed from cart");
})

// creating endpoint for get cart data

app.post('/getcart',fetchUser,async (req,res)=>{
    let userData = await Users.findOne({ _id: req.user.id });
    res.json(userData.cartData);
})


app.listen(port,(error)=>{  
    if(error){
        console.log("Error in running the server");
    }
    console.log("Server is running on port",port);
});