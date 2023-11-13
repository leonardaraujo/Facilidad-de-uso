import mongoose from "mongoose";
const saleNoteSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    cashier: {
      id: { type: String },
      dni: { type: String },
      name: {
        first: { type: String, required: true },
        sur: { type: String, required: true },
      },
    },
    seller: {
      id: { type: String, required: true },
      dni: { type: String, required: true },
      name: {
        first: { type: String, required: true },
        sur: { type: String, required: true },
      },
    },
    client: {
      dni: { type: String },
      name: { type: String },
    },
    products: [
      {
        _id: false,
        id: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    change: { state: Boolean, date: String },
    bagId: String,
    paymentType: { id: String, name: String },
    paidWith: Number,
    date: { type: Date, required: true }, // only in cash payment type
  },
  { versionKey: false }
);
saleNoteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
const SaleNote = mongoose.model("SaleNote", saleNoteSchema);
export default SaleNote;
