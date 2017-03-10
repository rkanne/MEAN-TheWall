var mongoose = require('mongoose'),
    User = mongoose.model('User');

function response_additions(err, data) {
    if (err) {
        this.json({
            error: err
        });
    }
    this.json({
        data
    });
}

function usersController() {
    var _this = this;
    this.index = function(req, res) {
        res.json({
            future: 'index'
        });
    };
    this.create = function(req, res) {
        res.json({
            future: 'create'
        });
    }
    this.logout = function(req, res) {
        res.json({
            future: 'logout'
        });

    }
    this.show = function(req, res) {
        User.find({}, function(err, data) {
            res.json(data);
        })
    }

    this.login = function(req, res) {
        console.log(req.body.email);
        if(req.body.email === undefined || req.body.password === undefined){
            res.json({
                        errors: {
                            login_reg: {
                                message: "Email and/or Password is required!"
                            }
                        }
                    }

                );
        }else{
            User.findOne({email: req.body.email}, function(err, data) {
            if(err){
                res.json({
                        errors: {
                            login_reg: {
                                message: "Email and/or Password is invalid!"
                            }
                        },
                        name: "Validation error"
                    }

                );

            }
            if (data && data.validPassword(req.body.password)) {
                res.json({
                    _id: data._id,
                    name: data.firstname
                });
            }
            else{
                res.json({
                        errors: {
                            login_reg: {
                                message: "Email and/or Password is invalid"
                            }
                        },
                        name: "Validation error"
                    }

                );
            }
        })
     }//if 
    }
    this.register = function(req, res) {
        var user = new User(req.body);
        user.save(function(err, newuser) {
            if (err){
              res.json(err);
            }
            else{
            res.json({
                _id: newuser._id,
                name: newuser.firstname
            });
          }
        });
    }
}

module.exports = new usersController();