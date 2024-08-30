const db = require('../../config/database')
class User{
    static tableName = 'users';

    static async getAll(){
        return db.select().table('users');
    }
    static async insert(email, username, password){
        return await db('users').insert({email: email, username: username, password: password});
    }
}

module.exports = User;
