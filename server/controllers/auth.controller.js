
import genToken from "../config/token.js";
import User from "../models/user.js";


export const googleAuth = async (req, res) => {
  try{
const {name, email} = req.body;
let user = await User.findOne({email});
if(!user){
  user = await User.create({name, email});
}
let token = await genToken(user._id);
res.cookie("token", token, {
  httpOnly:true,
  secure:false,
  sameSite:"strict",
  maxAge:7*24*60*60*1000
})
res.status(200).json({user, token});
  } catch (error) {
return res.status(500).json({message:"Internal server error", error: error.message})
  }
}



export const logout = async (req, res) => {
  try {
await res.clearCookie("token", {
  httpOnly:true,
  secure:false,
  sameSite:"strict"
})
res.status(200).json({message:"Logout successful"})
  } catch (error) {
return res.status(500).json({message:"Internal server error", error: error.message})
  }
}