const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
        try {
            // Generate new password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);

            // Create new user
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword
            });

            // Save user and return response
            const user = await newUser.save();
            res.status(200).json(user)._id;
        } catch (error) {
            res.status(500).json(error);
        }
    };
    

const loginUser = async (req, res) => {
        try {
            // Find user
            const user = await User.findOne({ username: req.body.username });
            !user && res.status(400).json("Wrong username or password");

            // Validate password
            const validPassword = await bcrypt.compare(req.body.password, user.password);
            !validPassword && res.status(400).json("Wrong username or password");

            // Return response
            res.status(200).json({ _id: user._id, username: user.username });
        } catch (error) {
            res.status(500).json(error);
        }
    };

const getUserProfile = async (req, res) => {
        res.json(req.user);
    };

module.exports = { registerUser, loginUser, getUserProfile };