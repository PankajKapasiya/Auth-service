const {User} = require('../models/index');

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
}

module.exports = UserRepository;