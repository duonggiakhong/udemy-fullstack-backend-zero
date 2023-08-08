const express = require('express');
const router = express.Router();
const { getHomepage, getSample, handleAddNewUSer, getCreateUser, getUpdateUser, postUpdateUser, deleteUser, handleDeleteUser } = require('../controllers/homeController');

router.get('/', getHomepage);
router.get('/sample', getSample);
router.post('/create-user', handleAddNewUSer);
router.get('/createUser', getCreateUser);
router.get('/updateUser/:id', getUpdateUser);
router.post('/update-user', postUpdateUser);
router.post('/delete-user/:id', deleteUser);
router.post('/delete-user', handleDeleteUser);



module.exports = router;// export default