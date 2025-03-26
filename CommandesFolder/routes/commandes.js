const express=require('express');
const Commande=require('../model/commande');
const router=express.Router();
router.get('/',async(req,res)=>{
    try{
        const cm= await Commande.find({});
        res.status(201).json(cm)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
    
})

router.get('/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const getCm= await Commande.findById(id);
        if(!getCm){
            res.json({message:'commande not found'})
        }
        res.status(201).json(getCm)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
    
})

router.post('/',async(req,res)=>{
    try{
        
        const AddCm= await Commande.create(req.body);
        res.status(201).json(AddCm)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
    
})

router.patch('/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        const updatedData = req.body; 
        const com= await Commande.findByIdAndUpdate(id,updatedData,{ new: true });
        if(!com){
            return res.status(404).json({message:'commande not found'})
        }
        
        res.status(201).json(com)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
    
})

router.delete('/:id',async(req,res)=>{
    try{
        const  {id}=req.params
        const getCm= await Commande.findByIdAndDelete(id);
        if(!getCm){
            res.status(404).json({message:'commande not found'})
        }
        res.status(201).json(getCm)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
    
});



module.exports=router;