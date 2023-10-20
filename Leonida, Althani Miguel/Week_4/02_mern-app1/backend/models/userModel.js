
//access bcrypt functionalities
const bcrypt = require('bcrypt')

//access validator functionalities
const validator = require('validator')


//access mongoose functionalities
const mongoose = require('mongoose')

//Schema : mongoose functionality that defines the document structure (schema)
const Schema = mongoose.Schema


const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true //ensures an email can only be used once
  },
  password: {
    type: String,
    required: true
  }
})


// static signup method
// .signup : variable name
userSchema.statics.signup = async function (email, password) {


  // validation
  //.isEmail and .isStrongPassword are validator functions
  if (!email || !password) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }


  const exists = await this.findOne({ email });


  if (exists) {
    throw Error('Email already in use');
  }


  //bcrypt functions: salt, hash
  // salt : even if two users have the same password, their hashed passwords will be different due to the unique string (salt) attached. See notes for sample iteration
  //(10) : the 'cost' value is the number of iterations used to create the salt
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};


// static login method
//.login : variable names
userSchema.statics.login = async function(email, password) {

  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({ email })
  if (!user) {
    throw Error('Incorrect email')
  }

  //password : plain text password
  //user.password : hashed password
  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error('Incorrect password')
  }

  return user
}


module.exports = mongoose.model('User', userSchema)