import User from '../models/User.model.js';
import bcrypt from 'bcrypt';
export const createUser = async (req, res, next) => {
  const { body } = req;
  const { dni, username, password, rol, name, color, isActive } = body;
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);
  const newUser = new User({
    dni,
    username,
    name,
    color,
    passwordHash,
    rol,
    isActive,
  });
  newUser
    .save()
    .then((result) => res.status(201).json(result))
    .catch((error) => next(error));
};
