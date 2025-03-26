const mongoose= require('mongoose');
const CommandeSchema= new mongoose.Schema(
    {
           ids:[{type: mongoose.Schema.Types.ObjectId,ref:"productCollection"}],
            email_utilisateur: String,
            prix_total: Number,
            created_at: {
            type: Date,
            default: Date.now(),
             }
           
            
    }
);
module.exports= mongoose.model('commandeCollection',CommandeSchema);