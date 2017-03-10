var mongoose = require('mongoose'),
    Message = mongoose.model('Message'),
    Comment = mongoose.model('Comment');

function wallsController() {
    var _this = this;
    this.message = function(req, res) {
        console.log("message in users.js===", req.body);
        console.log("message in id.===", req.body._user.id);
        var message = new Message({_user:req.body._user.id, message: req.body.message});
        message.save(function(err, message) {
            if (err){
              res.json(err);
              console.log(err);
            }
            else{
            res.json(message);
            console.log(message);
          }
        });
    }

    this.comment = function(req, res) {
    console.log("comment in users.js===", req.body);
    var id = req.body._message;
    console.log(req.body._message);
    Message.findOne({_id: id}, function(err, message){
    // console.log(id)

    var comment = new Comment(req.body);
       message.comments.push(comment);
       // console.log("comment==",comment);
       comment.save(function(err) {
            console.log(err);
                message.save(function(err) {
                    if (err){
                      res.json(err);
                      // console.log(err);
                    }
                    else{
                    res.json(message);
                    // console.log(message);
                  }
              });
          }) 
    })
    }
     this.getmessage = function(req, res) {
        Message.find({})
          .populate('_user comments')
          .exec(function(err, message) {
            Message.populate(message, {path: 'comments._user', model:'User'},
              function(err, message){
            console.log("Get Comment==", message);
            res.json(message);
          })
        });
    }


     this.getcomment = function(req, res) {
        Comment.find({}, function(err, data) {
            console.log("Get Comment==", data);
            res.json(data);
        });
    }

}

module.exports = new wallsController();
