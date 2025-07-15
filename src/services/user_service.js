const UserRepository = require('../repository/users_repository');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const {JWT_KEY} = require('../config/serverConfig');
class UserService{

    constructor(){
        this.UserRepository = new UserRepository();
    }

    async create(data){
        try{
            const response = await this.UserRepository.create(data);
            return response;
        }
        catch(error){ 
            console.log("Something went wrong at service layer");
            throw error;
        }
    }

    async destroy(userid){
        try{
            const response = await this.UserRepository.destroy(userid);
            return response;
        }
        catch(error){
            console.log("Something went wrong at service layer");
            throw error;
        }
    }


    createtoken(user){
        try{
            const response = jwt.sign(user, JWT_KEY , {expiresIn : 5});
            return response;
        }
        catch(error){
            console.log("Something went wrong while creating token");
            throw error;
        }
    }

    verifytoken(data){
        try{
            const response = jwt.verify(data, JWT_KEY);
            return response;
        }
        catch(error){
            console.log("Something went wrong while verifying the token");
            throw error;
        }
    }

    checkpassword(userinputpassword , encryptedpassword){
        try{
            const res =  bcrypt.compareSync(userinputpassword , encryptedpassword);
            return res;
        }
        catch(error){
            console.log("something went wrong");
            throw error;
        }
    }
    
}

module.exports =  UserService;