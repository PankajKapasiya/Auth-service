const {response} = require('express');

const UserService = require('../services/user_service');

const userservice = new UserService();
const create = async (req,res) =>{
    try{
        const response = await userservice.create({
            email : req.body.email,
            password : req.body.password
        });

        return res.status(201).json({ 
            success: true,
            message : "Succesfully created new id",
            data : response,
            err : {}
        })
    }
    catch(error){
       return res.status(error.statusCode).json({
            message: error.message,
            data: {},
            success: false,
            err: error.explanation
        });
    }
}

const destroy = async (req,res) => {
    try{
        const {id} = req.params;
        const response = await userservice.destroy(id);

        return res.status(201).json({
            success: true,
            message : "Succesfully deleted new id",
            data : response,
            err : {}
        })
    }
    catch(error){
        return res.status(201).json({
            message : error.message,
            success : false,
            data : {},
            err : {}
        })
    }
}

const signin = async (req,res) => {
    try{
        const response = await userservice.signin(req.body.email, req.body.password);
        return res.status(201).json({
            success: true,
            message : "Successfully sign in",
            data : response,
            err : {},

        });
    }
    catch(error){
        console.log("unable to sign in");
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "unbale to sign in",
            err :error,
            data :{}
        })
    }
}

const isAuthenticated = async (req, res) =>{
    try{
        const token= req.headers['x-access-token'];
        const response = await userservice.isAuthnticate(token);

        return res.status(200).json({
            message : "user is authenticates",
            err :{},
            data : response,
            success :true
        })
    }
    catch(error){
        console.log("unable to autheticate");
         return res.status(500).json({
            success : false,
            message : "unbale to autheticate",
            err :error,
            data :{}
        })
    }
}

const isAdmin = async (req,res) =>{
    try{
        console.log(req.body.id);
        const response = await userservice.isAdmin(req.body.id);

        return res.status(200).json({
            success : true,
            data : response,
            err : {},
            message : "succesfully find admin"
        })
    }
    catch(error){
        console.log("something went wrong in controllers");
        return res.status(500).json({
            success : false,
            message : "unable to find",
            err :error,
            data :{}
        })
    }
}
module.exports ={
    create,
    destroy,
    signin,
    isAuthenticated,
    isAdmin
}