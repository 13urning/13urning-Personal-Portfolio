import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
