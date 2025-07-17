const UserRepository = require('../repository/users_repository');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const {JWT_KEY} = require('../config/serverConfig');

const {AppError} = require('../utils/error-handler');
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

    async signin(useremail, userpass){
        try{
            const email = await this.UserRepository.getbymail(useremail);
            const check = this.checkpassword(userpass , email.password);

            if(!check){
                console.log("password doesn't match");
                throw error;
            }

            const token = this.createtoken({email : useremail , id : email.id});
            return token;
        }
        catch(error){
            console.log("Something went wrong at signin");
            throw error;
        }
    }


    async isAuthnticate(token){
        try{
            const response = this.verifytoken(token);

            if(!response){
                throw {error : "invalid token"}
            }

            const user = await this.UserRepository.getbyid(response.id);
            
            if(!user){
                 throw {error : "no user"}
            }

            return user.id;
        }
        catch(error){
            console.log("Something went wrong at authenticate");
            throw error;
        }
    }
    createtoken(user){
        try{
            const response = jwt.sign(user, JWT_KEY , {expiresIn : '1d'});
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
    

    isAdmin(userid){
        try{
            const res = this.UserRepository.isAdmin(userid);
            return res;
        }
        catch(error){
            console.log("something went wrong in service layer");
            throw error;
        }
    }
}

module.exports =  UserService;