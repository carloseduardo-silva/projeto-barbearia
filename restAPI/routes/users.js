let NeDB = require("nedb")

//const {check, validationResult} = require//("express-validator");

let db = new NeDB({
    filename: "users.db",
    autoload:true
})


module.exports =  (app)=>{

   
    //db.find
    app.get("/users",  (req, res)=>{
        
        db.find({}).sort({name:1}).exec((err, users) =>{
            
            if(err){
                app.utils.error.send(err, req, res)} 
            else{
                //res.setHeader("Content-Type", "application/json")
                res.status(200).json(users)
            }

        
    })});
    
    //db.insert
    app.post("/users",  (req, res)=>{

        //validção com error
        //if (!app.utils.validator.user(app, req, res)) return false;

        db.insert(req.body, (err, user)=>{
            if(err){
                app.utils.error.send(err, req, res)
                } 
            else{
                res.status(200).json(user)
                    }})
        }
    )

    //db.findOne
    app.get("/users/:id", (req, res) =>{

        db.findOne({_id:req.params.id}).exec((err, user)=>{

            if(err){
                app.utils.error.send(err, req, res)
            }
            else{
                res.status(200).json(user)
            }

        })

    })

    //db.update
    app.put("/users/:id", (req, res) =>{

        db.update({_id:req.params.id}, req.body, (err)=>{

            if(err){
                app.utils.error.send(err, req, res)
            }
            else{
                res.status(200).json(Object.assign(req.body, req.params))
            }

        })

    })

    //db.remove
    app.delete("/users/:id", (req, res) =>{

        db.remove({_id:req.params.id}, {}, (err)=>{

            if(err){
                app.utils.error.send(err, req, res)
            }
            else{
                res.status(200).json(req.params.id)
            }

        })

    })
};