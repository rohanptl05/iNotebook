import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true  // Ensures emails are unique
  },
  password: { 
    type: String, 
    required: true 
  },
  date: { 
    type: Date, 
    default: () => Date.now()  // Ensures current date is stored
  },
});

// Export the model
const User = mongoose.model("user", UserSchema);
User.createIndexes();
export default User;
