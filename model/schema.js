const mongoose = require('mongoose');
// const bcrypt= require('bcryptjs');

let userschema=mongoose.Schema({
    username:String,
    email:String,
    password:Number
})

// UserShcema=pre('save', async function(next){
//     if(this.isModified('password')){
//         this.password=await bcrypt.hash(this.password,12)
//     }
//     next();
// })


let user=mongoose.model('cookie',userschema)

module.exports=user