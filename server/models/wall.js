console.log('wall model');
// require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
  _user: { 
    type: String, 
    required: true,
    ref: 'User' },
  message: { 
  	type: String, 
  	required: true },
  comments: [
  {type: Schema.Types.ObjectId, 
  	ref: 'Comment'}]
  }, {timestamps: true });

var CommentSchema = new mongoose.Schema({
  _user: { 
    type: String, 
    required: true,
    ref: 'User'},
  _message: {
  	type: String, 
  	ref: 'Message'},
  comment: {type: String, required: true }}, {timestamp: true });

var Message = mongoose.model('Message', MessageSchema);
var Comment = mongoose.model('Comment', CommentSchema);

