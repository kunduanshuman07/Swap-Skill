import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        max: 10,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        min: 5,
    },
    age:{
        type: Number,
    },
    type:{
        type: String,
    },
    highestQualification: {
        type: String,
    },
    primarySkillOne: {
        type: String,
    },
    primarySkillTwo: {
        type: String,
    },
    yearsOfExp: {
        type: Number,
    }
});


const User = mongoose.model("User", userSchema);
export default User;