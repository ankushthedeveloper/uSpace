import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    fullname:{
        type: 'string',
        required: true,


    },
    username:{
        type: 'string',
        required: true,
        unique: true
        
    },
    password:{
        type: 'string',
        required: true,
        minlength:6
    },
    gender:{
        type: 'string',
        required: true,
      enum:["male", "female"],  
    }
    ,
    profilepic:{
        type:String,
        default:""
    }
},{timestamps:true}); 

const Users=mongoose.model('User',UserSchema);

export default Users;