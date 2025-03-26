const express=require('express');
const jwt= require("jsonwebtoken");
const router=express.Router();
const bcrypr=require('bcrypt');
const users=[];
//register
router.post('/register',async (req,res)=>{
    const{name,password}=req.body;
    const hahsedpass=await bcrypr.hash(password,10);
    users.push({name,password:hahsedpass});
    res.status(201).json({message:'creatred'})
})
//login
router.post("/login",async(req,res)=>{
    const{name,password}=users.body;
    const user=users.find((u)=>u.name===name);
    if(!user){
        res.status(404).json({message:'not found'})
    }
    const passwordm=await bcrypr.compare(password,user.password);
    if(!passwordm){
        res.status(404).json({message:'not found'})   
    }
    const logged=jwt.sign({name:user.name},process.env.secret,{expiresIn:"1h"});
    res.json({logged})
})

//logout
router.post('/logout',async(re,res)=>{
    const token=req.header("Authorization")?.replace("Beareer","");
    if(!token){

    }
    blacklistedToken.push(token);
    res.json({message:"logged out"})
});
module.exports=router;