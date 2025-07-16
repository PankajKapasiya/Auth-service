const {User, Role} = require('../models/index');

class UserRepository{

    async create(data){
        try{
            const response = await User.create(data);
            return response;
        }
        catch(error){
            console.log("Something went wrong at respoitory");
            throw error;
        }
    }

    async destroy(userid){
        try{ 
            const response = await User.destroy({
                where:{
                    id:userid
                }
            })

            return response;
        }
        catch(error){
            console.log("Something went wrong at respoitory");
            throw error;
        }
    }

    async getbyid(userid){
        try{
            const res = await User.findByPk(userid , {
                attributes : ['email' , 'id']
            });
            return res;
        }
        catch(error){
            console.log("Something went wrong");
            throw error;
        }
    }

    async getbymail(mail){
        try{
            const res = await User.findOne({
                where :{
                    email :mail
                }
            });
            return res;
        }
        catch(error){
            console.log("unable to find");
            throw error;
        }
    }

    async isAdmin(userid){
        try{
            const user = await User.findByPk(userid);
            const adminrole = await Role.findOne({
                where :{
                    name : 'ADMIN'
                }
            });

            console.log(user);
            console.log(adminrole);

            return user.hasRole(adminrole);
        }
        catch(error){
            console.log("Something went wrong at respoitory");
            console.log(error);
            throw error;
        }
    }
}

module.exports = UserRepository;