const express=require('express');
const Product=require('../model/product');
const router=express.Router();
const auth=require('../middleware/authMiddleware')
router.get('/',auth,async(req,res)=>{
    try{
        const pr= await Product.find({});
        res.status(201).json(pr)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
    
})

router.get('/:id',auth,async(req,res)=>{
    try{
        const {id}=req.params
        const getPr= await Product.findById(id);
        if(!getPr){
            res.json({message:'Product not found'})
        }
        res.status(201).json(getPr)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
    
})

router.post('/',auth,async(req,res)=>{
    try{
        
        const AddPr= await Product.create(req.body);
        res.status(201).json(AddPr)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
    
})

router.patch('/:id',auth,async(req,res)=>{
    try{
        const {id}=req.params;
        const updatedData = req.body; 
        const product= await Product.findByIdAndUpdate(id,updatedData,{ new: true });
        if(!product){
            return res.status(404).json({message:'Product not found'})
        }
        
        res.status(201).json(product)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
    
})

router.delete('/:id',auth,async(req,res)=>{
    try{
        const  {id}=req.params
        const getpr= await Commande.findByIdAndDelete(id);
        if(!getpr){
            res.status(404).json({message:'Product not found'})
        }
        res.status(201).json({message:'deleted successfully'})
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
    
});



module.exports=router;