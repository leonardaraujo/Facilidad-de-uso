import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.model.js';
export const validateUser = async (req, res, next) => {
  const body = req.body;
  const { username, password } = body;
  const user = await User.findOne({ username });
  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.passwordHash);
  if (!(user && passwordCorrect)) {
    res.status(401).json({ error: 'invalid user or password' });
  } else if (!user.isActive) {
    res.status(401).json({ error: 'Usuario no activo' });
  } else {
    const userForToken = {
      id: user._id,
      rol: user.rol,
    };
    const token = jwt.sign(userForToken, process.env.SECRET_WEBTOKEN, {
      expiresIn: 200000,
    });
    res.send({
      token,
      userData: {
        _id: user._id,
        dni: user.dni,
        rol: user.rol,
        name: user.name,
      },
    });
  }
};
