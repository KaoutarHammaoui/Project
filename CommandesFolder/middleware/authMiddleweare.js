const jwt=require('jsonwebtoken');
const authmiddle=(req,res,next)=>{
    const token=req.header('Authorization');
    if(!token){
        res.status(401).json({message:'invalid'})
    }
    try{
        const verified=jwt.verify(token.replace("Bearer","",process.env.jwt_secret));
        req.user=verified
        next();
    }
    catch(err){
        res.status(400).json({message:'n'})
    }
}
module.exports=authmiddle;