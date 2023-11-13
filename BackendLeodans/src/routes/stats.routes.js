import { Router } from 'express';
import User from '../models/User.model.js';
const statsRouter = Router();

statsRouter.get('/usersColors', async (request, respond, next) => {
  try {
    const data = await User.find({});
    const formattedDataObject = () => {
      let dummy = {};
      data.forEach((user) => {
        dummy[user.id] = user.color.card;
      });
      return dummy;
    };
    respond.json(formattedDataObject());
  } catch (error) {
    next(error);
  }
});
export default statsRouter;
