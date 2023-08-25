var conn = require('./db')

module.exports = {

    getUsers(){

        return new Promise((s, f) =>{

            conn.query(`
            SELECT * FROM tb_users`,(err, results) =>{
    
                if(err){
                    f(err)
                }
                else{
                    s(results)
                }
            });
        });

    }
}