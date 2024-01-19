import mongoose from "mongoose";
const { Schema } = mongoose;
const blogSchema = new Schema(
  {

    title:{
        type:String,
        trim: true,
        unique: true,
    },
    banner:{
        type: String,
    },
    des:{
        type: String,
        trim: true,
    }, 
    slug:{
        type: String,
        trim: true,
        unique: true,
    }, 
    content:{
        type: Array,   
    }, 
    cat:{
        type:String,
        trim: true,
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },

  },
  { timestamps: true }
);
export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);