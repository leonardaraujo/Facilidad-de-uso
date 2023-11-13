import mongoose from "mongoose";
const orderNoteSchema = new mongoose.Schema(
  {
    seller: {
      id: { type: String, required: true },
      dni: { type: String, required: true },
      name: {
        first: { type: String, required: true },
        sur: { type: String, required: true },
      },
      color: {
        card: String,
        text: String,
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
    bagId: { type: String },
  },
  { versionKey: false }
);
orderNoteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
const OrderNote = mongoose.model("OrderNotes", orderNoteSchema);
export default OrderNote;
