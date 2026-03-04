const express = require('express');
const router = express.Router();
const userModel = require('../models/user.model');
const userService = require('../services/user.service');
module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
    }
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await userModel.hashPassword(password);
        const user = await userService.createUser({ name, email, password: hashedPassword });
        const token = user.generateAuthToken();
        res.status(201).json({ message: "User registered successfully", user, token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }

}

module.exports.loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        if (user.password !== password) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        res.status(200).json({ message: "Login successful", user });

    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
}