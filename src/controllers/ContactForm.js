const express = require("express");
const router = express.Router();

exports.contact = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // Example: Save message to database or send email
        // await saveMessageToDB({ name, email, message });

        res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error("Error handling contact form submission:", error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
}


