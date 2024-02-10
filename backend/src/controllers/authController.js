import User from "../models/userModel.js";

export const register = async(req,res) => {
    try {
        const {firstname, lastname, email, phone, password} = req.body;
        const newUser = new User({
            firstname, lastname, email, phone, password
        });
        await newUser.save();
        res.status(200).send(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

export const login = async(req,res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email: email});
        if(user.password!==password){
            console.log('Invalid Credentials');
            res.status(201).send('Invalid Credentials');
        }
        res.status(200).send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}