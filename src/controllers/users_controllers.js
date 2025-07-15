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
        return res.status(201).json({
            message : error.message,
            success : false,
            data : {},
            err : {}
        })
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

module.exports ={
    create,
    destroy
}