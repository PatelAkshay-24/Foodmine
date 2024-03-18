import Router from "express"
import { sample_foods, sample_users } from '../data';
import jwt from "jsonwebtoken"
import asyncHandler from "express-async-handler";
import { UserModel } from "../models/user.model";
const router = Router()



router.get('/seed',asyncHandler(
    async (req,res)=>{
        const userCount = await UserModel.countDocuments()
        if(userCount> 0){
            res.send('send is already done')
            return;
        }
    await UserModel.create(sample_users)
    res.send("seed Is Done!")
}))

//Login Api
router.post('/login',(req,res)=>{
    const {email,password}= req.body;
    const user = sample_users.find(user => user.email===email && user.password === password)

    if(user){
        res.send(generateTokenResponse(user));
       console.log(user);
       return user;
    }else{
        res.status(400).send("email and pasword is not valid!")

        
    }
})

//generate JWT Token
const generateTokenResponse = (user:any) =>{
    const token= jwt.sign({
        email:user.eamil, isAdmin:user.isAdmin
    },"somerandomtext",{
        expiresIn:'30d'
    })
    user.token = token
    return user
}

export default router;