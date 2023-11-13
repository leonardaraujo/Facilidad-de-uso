import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
const userSchema = new mongoose.Schema(
  {
    dni: { type: String, required: true },
    rol: { type: String, required: true },
    username: { type: String, unique: true },
    name: {
      first: { type: String, required: true },
      sur: { type: String, required: true },
    },
    color: { card: String, text: String },
    passwordHash: { type: String, required: true },
    isActive: { type: Boolean, required: true },
  },
  { versionKey: false, timestamps: true }
);
userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.createdAt;
    delete returnedObject.updatedAt;
    delete returnedObject.passwordHash;
    delete returnedObject.username;
  },
});
userSchema.plugin(uniqueValidator);
const User = mongoose.model('Users', userSchema);
export default User;
