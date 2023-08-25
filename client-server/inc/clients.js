var conn = require('./db')

module.exports = {

    getClients(){

        return new Promise((s, f) =>{

            conn.query(`
            SELECT * FROM tb_clients`,(err, results) =>{
    
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
