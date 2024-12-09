const UserModel = require("../models/UserModel.js");
const { EncodeToken } = require("../utility/TokenHelper.js");

//! Create User
exports.register = async (req, res) => {
    try {
        let reqBody = req.body;

        // Check if user already exists
        let existingUser = await UserModel.findOne({ email: reqBody.email });
        if (existingUser) {
            return res.status(400).json({ status: "error", msg: "Account already exists" });
        }

        // Save the user with plain text password
        let data = await UserModel.create(reqBody);
        res.status(201).json({ status: "success", data });
    } catch (e) {
        res.status(500).json({ status: "error", error: e.toString() });
    }
};

//! User Login
exports.login = async (req, res) => {
    try {
        let { email, password } = req.body;

        // Find the user by email and check password directly
        let user = await UserModel.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ status: "unauthorized", msg: "Invalid credentials" });
        }

        // Generate token
        let token = EncodeToken(user.email);

        // Set cookie options
        let options = {
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
            httpOnly: true,
            sameSite: "none",
            secure: true,
        };

        res.cookie("Token", token, options);
        res.status(200).json({ status: "success", token, data: { email: user.email } });
    } catch (e) {
        res.status(500).json({ status: "error", error: e.toString() });
    }
};

//! Get User Profile
exports.profile_read = async (req, res) => {
    let email = req.headers.email;
    try {
        let user = await UserModel.findOne({ email }, "email firstName lastName img phone");
        if (!user) {
            return res.status(404).json({ status: "error", msg: "User not found" });
        }
        res.status(200).json({ status: "success", data: user });
    } catch (e) {
        res.status(500).json({ status: "error", error: e.toString() });
    }
};

//! User Logout
exports.logout = (req, res) => {
    try {
        res.clearCookie("Token");
        res.status(200).json({ status: "success", msg: "Logged out successfully" });
    } catch (e) {
        res.status(500).json({ status: "error", error: e.toString() });
    }
};
