import Jwt from "jsonwebtoken";

const generateTokenAndSetCookie=(userId,res)=>{
    const Token=Jwt.sign({userId},process.env.JWT_SECRET,{
       expiresIn:"15d"
    })

    res.cookie('Jwt',Token,{
     maxAge:15*24*60*60*1000,
     htttpOnly:true,
     sameSite:'strict',
    })
}
export default generateTokenAndSetCookie;