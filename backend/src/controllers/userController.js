import User from "../models/userModel.js";

export const addPersonalInformation = async (req, res) => {
    const { age, type, highestQualification, primarySkillOne, primarySkillTwo, yearsOfExp, userId } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {
                age,
                type,
                highestQualification,
                primarySkillOne,
                primarySkillTwo,
                yearsOfExp
            },   
        { new: true, runValidators: true }
        );
        res.status(200).send(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}