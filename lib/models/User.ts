import mongoose from "mongoose";
export const runtime = 'edge'

const userSchema = new mongoose.Schema({
  clerkId: String,
  wishlist: {
    type: Array,
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;