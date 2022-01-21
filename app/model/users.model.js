const sql = require('../../db');

const Users = function(user) {
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.address = user.address;
    this.postcode = user.postcode;
    this.contact_number = user.contact_number;
    this.email = user.email;
    this.user_name = user.user_name;
    this.password = user.password;
}

Users.create = (newUser, result) => {
    sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created user: ", { id: res.insertId, ...newUser });
      result(null, { id: res.insertId, ...newUser });
    });
  };

Users.findAllUser = result => {
    let query = "SELECT * FROM users";

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("Users: ", res);
        result(null, res);
    });
};


Users.updateById = (id, user, result) => {
    sql.query(
        `UPDATE users
        SET first_name=?, last_name=?, address=?, postcode=?, contact_number=?, email=?, user_name=?, password=?)
        WHERE id=?`,
        [user.first_name, user.last_name, user.address, user.postcode, user.contact_number, user.email, user.user_name, user.password, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated users: ", { id: id, ...user });
        result(null, { id: id, ...user });
      }
    );
  };
  
Users.remove = (id, result) => {
    sql.query("DELETE FROM users WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted users with id: ", id);
      result(null, res);
    });
  };

Users.find = (email, password, result) => {
  sql.query(`SELECT * FROM users WHERE email = "${email}" AND password ="${password}"`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found user: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found User with the id
    result({ kind: "not_found" }, null);
  });
}


module.exports = Users;