import mongoose from "mongoose";
const { Schema } = mongoose;

const NotesSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  title: { type: String, required: true },
  tag: { type: String, default: "General" },
  desc: { type: String, required: true },  // Corrected from 'decs'
  date: { type: Date, default: Date.now },
});

// Correct export for ES6
export default mongoose.model("notes", NotesSchema);

