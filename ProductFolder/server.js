require('dotenv').config()
const express= require('express');
const app= express();
const mongoose= require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection
db.on('error',(err)=>console.error(err));
db.once('open',()=>console.log('connectd to db'))
app.use(express.json())
const ProductRouter= require('./routes/products');
const authRouter=require('./routes/auth');
app.use('auth',authRouter);
app.use('/products',ProductRouter);
app.listen(3000,()=>console.log('server started on port 3000'))