import { Router } from "express";
import OrderNote from "../models/OrderNote.model.js";
const orderNoteRouter = Router();

orderNoteRouter.post("/orderNote", async (request, respond, next) => {
  try {
    const orderNote = new OrderNote(request.body);
    orderNote.save().then(() => {
      //socket 

      respond.sendStatus(200);
    });
  } catch (error) {
    next(error);
  }
});

orderNoteRouter.post("/deleteOrderNote", async (request, respond, next) => {
  try {
    const data = await OrderNote.deleteOne({ _id: request.body.id });

    if (!data.deletedCount) {
      respond.sendStatus(404);
    } else {
      respond.sendStatus(200);
    }
  } catch (error) {
    next(error);
  }
});

orderNoteRouter.get("/orderNotes", async (request, respond, next) => {
  try {
    const data = await OrderNote.find();
    respond.json(data);
  } catch (error) {
    next(error);
  }
});

export default orderNoteRouter;
