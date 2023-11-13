import jwt from 'jsonwebtoken';
import verifyRol from '../helpers/rol.helper.js';
const authGuard = (request, respond, next) => {
  let token = '';
  const authorization = request.get('authorization');
  console.log(authorization);
  //
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7);
  }
  //decoding token
  let decodedToken = {};
  try {
    decodedToken = jwt.verify(token, process.env.SECRET_WEBTOKEN);
  } catch (error) {
    return next(error);
  }
  if (!token || !decodedToken.id) {
    return respond.status(498).json({ error: 'token missing or invalid' });
  }

  const { id } = decodedToken;
  // console.log(verifyRol(rol, respond.locals.rolAdmitted));
  // if (!verifyRol(rol, respond.locals.rolAdmitted)) {
  //   return respond
  //     .status(401)
  //     .json({ error: `This route is only for ${respond.locals.rolAdmitted}` });
  // }
  request.id = id;
  next();
};
export default authGuard;
