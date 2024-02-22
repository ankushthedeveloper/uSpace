import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from "../utils/jsontoken.js";
export const signupUser= async(req,res)=>{
  try {
    const {fullname ,username,password ,confirmpassword ,gender} = req.body;
    if(password!=confirmpassword) res.status(403).json("Password is not matching")

    const user= await User.findOne({username})

    if (user){
        res.status(403).json("Username is already taken")
    }
    //hash your password
    const salt=await bcrypt.genSalt(10);
    const hashedPassword= await bcrypt.hash(password, salt)
    //https://avatar.iran.liara.run/public

    const boyProfile=`https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfile=`https://avatar.iran.liara.run/public/girl?username=${username}`

    const newUser=new User({
        fullname,
        username,
        password:hashedPassword,
        gender,
        profilepic:gender==="male"?boyProfile:girlProfile
    })


    if (newUser){
        //generate jwt token here
        generateTokenAndSetCookie(newUser._id,res);
        newUser.save();
        res.status(201).json(
            {
                _id:newUser._id,
                fullname:newUser.fullname,
                username:newUser.username,
                gender:newUser.gender,
                profilepic:newUser.profilepic
            }
        )
    }
    else{
        res.status(500).json(err)
    }
  } catch (error) {
    console.log("error in signup",error)
  }
   
}
export const loginUser=async (req,res)=>{
try {
       
    const {username,password}=req.body;
    const user=await User.findOne({username});
    const isPasswordCorrect=await bcrypt.compare(password,user?.password ||"");


if(!user || !isPasswordCorrect){
    res.status(403).json("Username or password is incorrect")
}
else {
    generateTokenAndSetCookie(user._id,res);
    res.status(200).json({
        id:user._id,
        fullname:user.fullname,
        username:user.username,
        gender:user.gender,
        profilepic:user.profilepic
    })

}

} catch (error) {
    console.log("error in login",error);
}

}
export const logoutUser=async (req,res)=>{
   try {
    res.cookie("Jwt","",{maxAge:0})
    res.status(200).json({message:"Logged out successfully"})
   } catch (error) {
    console.log("error in logout",error);
   }
}