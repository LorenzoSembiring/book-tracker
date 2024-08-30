const db = require('../../config/database')
class User{
    static tableName = 'users';

    static async getAll(){
        return db.select().table('users');
    }
    static async insert(email, username, password){
        return await db('users').insert({email: email, username: username, password: password});
    }
    static async select({ email, username, id }) {
        const query = db('users');
    
        if (email) {
            query.where({ email });
        } else if (username) {
            query.where({ username });
        } else if (id) {
            query.where({ id });
        } else {
            return null;
        }
    
        return await query.select();
    }

}

module.exports = User;
