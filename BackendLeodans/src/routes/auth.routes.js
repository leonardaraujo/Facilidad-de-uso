import { Router } from 'express';
import { validateUser } from '../controllers/login.controller.js';
import { createUser } from '../controllers/register.controller.js';
import authGuard from '../middlewares/authGuard.js';
import ROLS from '../constants/rols.js';
import User from '../models/User.model.js';
const authRouter = Router();
const adminGuard = (request, respond, next) => {
  respond.locals.rolAdmitted = 'admin';
  next();
};
authRouter.post('/login', validateUser);
authRouter.post('/register', createUser);
authRouter.get('/getUser', authGuard, async (request, respond) => {
  const user = await User.findById(request.id);
  respond.json(user);
});
// authRouter.get('/protected', adminGuard, rolGuard, (req, res) => {
//   res.send(req.id);
// });
export default authRouter;
