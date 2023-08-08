
const connection = require('../config/database');


const getAllUSer = async (req, res) => {
    let [results, fields] = await connection.query('SELECT * FROM Users');
    return results;
}
const postAddNewUSer = async (req, res) => {
    let { email, name, city } = req.body;
    let [results, fields] = await connection.query(
        `INSERT INTO Users ( email, name, city) VALUES( ?,?,?)`, [email, name, city]
    );
    return results
}

const updateUserById = async (name, email, city, userId) => {
    let [results, fields] = await connection.query(
        `UPDATE Users
        SET name = ?, email= ?, city= ?
        WHERE id = ?
        `, [name, email, city, userId]
    );
}

const getUSerById = async (userId) => {
    let [results, fields] = await connection.execute('SELECT * FROM Users WHERE id = ?', [userId]);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}

const postDelteUser = async (id) => {
    await connection.execute(`
    DELETE FROM Users WHERE id= ?`, [id]);
}

const addNewUser = async (email, name, city) => {
    let [results, fields] = await connection.query(
        `INSERT INTO Users ( email, name, city) VALUES( ?,?,?)`, [email, name, city]
    );
    return results;
}

module.exports = {
    getAllUSer,
    postAddNewUSer,
    updateUserById,
    getUSerById,
    postDelteUser,
    addNewUser
}
