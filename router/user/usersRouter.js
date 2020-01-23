const router = require('express').Router();

const {user: userMiddleware,token } = require('../../middleware');
const {user , pages} = require('../../controllers');

 router.post('/',user.createUser);

router.get('/', pages.register);

 router.get('/findAll',user.findAll);

 router.get('/findAll/:user_id',userMiddleware.checkIsUserPresentMiddleware,user.getUserById );

 router.get('/editUser',pages.editUser);

 router.post('/editUser',userMiddleware.checkEditUserValidityMiddleware,user.editUser );

module.exports = router;
