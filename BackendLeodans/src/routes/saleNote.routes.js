import { Router } from "express";
import SaleNote from "../models/SaleNote.model.js";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";
dayjs.extend(utc);
dayjs.extend(timezone);
const saleNoteRouter = Router();
saleNoteRouter.post("/saleNote", async (request, respond, next) => {
  try {
    const saleNote = new SaleNote(request.body);
    saleNote
      .save()
      .then(() => {
        respond.json(saleNote);
      })
      .catch((err) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
});
saleNoteRouter.get("/saleNote/:id", async (request, respond, next) => {
  try {
    const saleNote = await SaleNote.findById(request.params.id);
    if (saleNote) {
      respond.json(saleNote);
    } else {
      respond.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});
saleNoteRouter.get("/lastSaleNotes", async (request, respond, next) => {
  try {
    const saleNote = await SaleNote.find(request.params.id)
      .sort({
        date: -1,
      })
      .limit(10);
    if (saleNote) {
      respond.json(saleNote);
    } else {
      respond.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});
saleNoteRouter.get("/allNotesByDate/:date", async (request, respond, next) => {
  try {
    let start = dayjs(request.params.date || undefined)
      .tz("America/Bogota")
      .startOf("day")
      .toISOString();
    let end = dayjs(request.params.date || undefined)
      .tz("America/Bogota")
      .endOf("day")
      .toISOString();
    const todaySales = await SaleNote.find({
      date: { $gte: start, $lt: end },
    });
    respond.json(todaySales);
  } catch (error) {
    console.log(error);
    respond.sendStatus(500);
  }
});
saleNoteRouter.get("/allNotesByWeek/:date", async (request, respond, next) => {
  try {
    let start = dayjs(request.params.date || undefined)
      .startOf("week")
      .toISOString();
    let end = dayjs(request.params.date || undefined)
      .endOf("week")
      .toISOString();
    const todaySales = await SaleNote.find({
      date: { $gte: start, $lt: end },
    });
    respond.json(todaySales);
  } catch (error) {
    console.log(error);
    respond.sendStatus(500);
  }
});
saleNoteRouter.patch(
  "/saleNoteUpdateChange",
  async (request, respond, next) => {
    try {
      const saleNote = await SaleNote.updateOne(
        { _id: request.body.id },
        { change: { state: true, date: request.body.date } }
      );
      console.log(saleNote);
      respond.json({ id: request.body.id });
    } catch (error) {
      next(error);
    }
  }
);
export default saleNoteRouter;
