import mongoose from "mongoose";

const servicesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    min: 1,
    required: true,
  },
  description: {
    type: String,
    minLength: 3,
    maxLength: 255,
  },
  //ref - nurodo kurioje kolekcijoje ieskoti id
  order_id: { type: mongoose.Schema.Types.ObjectId, ref: "order_id" },
});

const servicesModel = mongoose.model("membership", servicesSchema);

export default servicesModel;
