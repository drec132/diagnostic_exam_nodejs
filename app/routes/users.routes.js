module.exports = app => {
    const users = require("../controller/user.controller.js");
  
    var router = require("express").Router();
  
    router.post("/users", users.create);
  
    router.get("/users", users.findAll);
  
    router.put("/users/:id", users.update);
  
    router.delete("/users/:id", users.delete);
    
    router.post("/login", users.login);
  
    app.use('/api', router);
  };