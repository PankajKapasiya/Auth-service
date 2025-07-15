const express = require('express');

const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');
const app = express();
// const PORT =3001;
const apiroutes = require('./routes/index');
const bcrypt = require('bcrypt');
const {User} = require('./models/index');

const UserRepository = require('./repository/users_repository');
const userservice =require('./services/user_service');
const prepareAndStartServer = () =>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiroutes);

    app.listen(PORT, async () => {
        console.log(`Server started at port ${PORT}`);
        // const incoming= '1234567';
        // const user = await User.findByPk(5);

       // console.log(user);
        // const response = bcrypt.compareSync(incoming, user.password);
        // console.log(response);
        // const service = new userservice();

        // // const res = await service.signin('pankajk@gmail.com', '1234567');
        // // console.log(res);
        // const newtoken = service.createtoken({email :'pankaj@admin.com' , id:1 });
        // console.log("new token is ", newtoken);

        // const res = service.verifytoken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhbmthakBhZG1pbi5jb20iLCJpZCI6MSwiaWF0IjoxNzUyNTcyMjA5LCJleHAiOjE3NTI1NzIyMTR9.8uu9t31LFMO_z_lz86qO2fllcAoo4n41NxhZex1gKVQ');
        // console.log(res);

    //    const respoitory = new UserRepository();
    //    const mail = 'pankaj123@gmail.com';
    //     const res = await respoitory.getbymail(mail);
    //     console.log(res);

        // const res = await respoitory.create({email : 'pankaj123@gmail.com', password : '1234567'});
        // console.log(res);

    });
}

prepareAndStartServer();