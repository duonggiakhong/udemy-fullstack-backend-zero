// npm mysql2
const { json } = require('express');
const connection = require('../config/database');
const { getAllUSer, updateUserById, getUSerById, postDelteUser, addNewUser } = require('../services/CRUDServices');

const getHomepage = async (req, res) => {
    // simple query
    let results = await getAllUSer();
    return res.render('home.ejs', { dataUser: results });
}

const getSample = (req, res) => {
    res.render('sample.ejs');
}

const handleAddNewUSer = async (req, res) => {
    const { email, name, city } = req.body;
    await addNewUser(email, name, city);
    res.render('createUser.ejs',);
}

const getCreateUser = async (req, res) => {
    res.render('createUser.ejs');
}

const getUpdateUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUSerById(userId);
    res.render('edit.ejs', { dataUser: user });
}

const postUpdateUser = async (req, res) => {
    let { name, email, city, userId } = req.body;

    await updateUserById(name, email, city, userId);

    console.log('check >>', req.body)

    res.redirect('/',);
}

const handleDeleteUser = async (req, res) => {
    const id = req.body.userId;
    await postDelteUser(id);
    res.redirect('/');
}

const deleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUSerById(userId);
    return res.render('delete.ejs', { dataUser: user });
}

module.exports = {
    getHomepage,
    getSample,
    handleAddNewUSer,
    getCreateUser,
    getUpdateUser,
    postUpdateUser,
    deleteUser,
    handleDeleteUser
}