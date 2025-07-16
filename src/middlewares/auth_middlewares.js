const validate = async (req , res , next) =>{
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            success : false,
            data : {},
            message : "Proivde validata data",
            err :'Email or password missing in the request'
        });
    }
    next();
}

const validateid = async (req, res, next) =>{
    if(!req.body.id){
        return res.status(400).json({
            success : false,
            data : {},
            message : "Proivde validata id",
            err :'id missing in the request'
        });
    }

    next();
}
module.exports ={
    validate,
    validateid
}