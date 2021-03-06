const express = require('express');
const router = express.Router()
const User = require('../models/user')

router.post('/',async (req,res,next)=>{
    try{
        const checkUser = await User.findOne({email:req.body.email});
        if(checkUser){
            res.status(400).json({message:'User already exist'})
        }else{
            const user = new User({
                name:req.body.name,
                password:req.body.password,
                email:req.body.email,
                code:req.body.code
            })
            const saveUser = await user.save()
            const token = await saveUser.generateToken()
            res.status(201).json({message:'User created successfully',data:{
                ...saveUser._doc,
                    token
                }})
        }
    }catch(e){
        res.status(400).send({message:e.message})
    }
})

router.post('/login',async (req,res)=>{
    try{
        const user =await User.findByCresidentials(req.body.email,req.body.password);
        const token = await user.generateToken()
        res.status(200).json({message:'Success',data:{
            ...user._doc,
                token
            }})
    }catch(e){
        res.status(500).json({message:e.message})
    }
})

module.exports = router;