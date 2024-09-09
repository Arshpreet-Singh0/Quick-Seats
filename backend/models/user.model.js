import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
      }
    }, { timestamps: true });

export const UserModel = mongoose.model("User", UserSchema);