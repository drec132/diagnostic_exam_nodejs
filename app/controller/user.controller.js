const Users = require('../model/users.model.js');

exports.create = (req, res) => {
    if(!req.body) {
        req.status(400).send({
            message: "Content Cannot be empty!"
        })
    }

    const user = new Users({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        address: req.body.address,
        postcode: req.body.postcode,
        contact_number: req.body.contact_number,
        email: req.body.email,
        user_name: req.body.user_name,
        password: req.body.password
    });

    Users.create(user, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User."
            });
      else res.send(data)
    });
}
  
exports.findAll = (req, res) => {
    Users.findAllUser((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      else res.send(data);
    });
}

exports.update = (req, res) => {
    if(!req.body) {
        req.status(400).send({
            message: "Content Cannot be empty!"
        })
    }

    console.log(req.body);

    Users.updateById(
        req.params.id,
        new Users(req.body),
        (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
            res.status(404).send({
                message: `Not found User with id ${req.params.id}.`
            });
            } else {
            res.status(500).send({
                message: "Error updating User with id " + req.params.id
            });
            }
        } else res.send(data);
        }
    );
}

exports.delete = (req, res) => {
    Users.remove(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found User with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete User with id " + req.params.id
            });
          }
        } else res.send({ message: `User was deleted successfully!` });
      });
}

exports.login = (req, res) => {
    Users.find(req.body.email, req.body.password, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Tutorial with id ${req.params.id}.`
              });
            } else {
              res.status(500).send({
                message: "Error retrieving Tutorial with id " + req.params.id
              });
            }
          } else res.send(data);
    });
}   