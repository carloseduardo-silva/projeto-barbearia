module.exports =  (app)=>{


    app.get("/", (req, res)=>{

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html")
        res.end("<h1> REST API FUNCIONANDO NO LOCAL HOST4000, PRONTO PARA CONSUMIR INFOs A PARTIR DO NEDB E FORNECER PARA O LOCAL HOST3000(CLIENT SIDE/DOCUMENT-HTML/SITE)</h1>")
     
    })
    
};
