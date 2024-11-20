import errorHandler from "../lib/error.js"
import bcryptjs from "bcryptjs"
import cloudinary from "../config/cloudinary.config.js"
import Post from "../models/post.model.js"
// Configure multer for file uploads

export const update =async(req,res)=>{
    try {
        const {name,email,password}=req.body
        const image= req.file
        const posts=await Post.find({author:req.user._id})
        const user=req.user
        if(name){
            user.name=name
            posts.map(post=>post.authorName=name)
        }
        if(email)user.email=email
        if(password){
            const hashPassword=await bcryptjs.hash(password,10)
            user.password=hashPassword
        }
        
        if(image){
           user.url=image.path
           if(user.publicId){
                await cloudinary.uploader.destroy(user.publicId)
           }
            user.publicId=image.filename
            posts.map(post=>post.authorDp=image.path)
        }
        
        await Promise.all(posts.map(post=>post.save()))
       await user.save()
       user.password=undefined
       return res.status(200).json({success:true,message:"updated successfully",user})
    } catch (error) {
        errorHandler("update",error,res)
    }
}