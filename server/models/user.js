console.log('users model');
// require mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
// create the schema
var usersSchema = new mongoose.Schema({
  firstname: {
  	type: String,
    required: true
},
  lastname: {
  	type: String,
    required: true
},
  email: {
  	type: String,
    unique: true,
    required: true
},
  password:{
  	type: String,
    required:true
},
  birthday:{
  	type: Date,
    required: true
}
}, 
{
    timestamps: true
});


usersSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

// checking if password is valid
usersSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

usersSchema.pre('save', function(done) {
    this.password = this.generateHash(this.password);
    done();
});

var User = mongoose.model('User', usersSchema);