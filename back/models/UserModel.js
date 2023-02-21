import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 200,
    required: true,
  },
  surname: {
    type: String,
    minLength: 3,
    maxLength: 200,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  // ref - nurodom kurioj kolekcijoj ieskoti id
  service_id: [{ type: mongoose.Schema.Types.ObjectId, ref: "memberships" }],
});

const userModel = mongoose.model("users", userSchema);

export default userModel;
