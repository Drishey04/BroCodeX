const Pin = require('../models/pinModel');

const createPin = async (req, res) => {
        const newPin = new Pin(req.body);
        try {
            const savedPin = await newPin.save();
            res.status(200).json(savedPin);
        } catch (error) {
            res.status(500).json(error);
        }
    };

const getPins = async (req, res) => {
        try {
            const pins = await Pin.find();
            res.status(200).json(pins);
        } catch (error) {
            res.status(500).json(error);
        }
    };

module.exports = { createPin, getPins };