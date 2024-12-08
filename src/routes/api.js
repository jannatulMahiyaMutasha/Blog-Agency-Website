const express=require('express');
const router = express.Router();
const AuthVerification = require("../middleware/AuthVerification.js");
const UserController = require("../controllers/UserController.js");
const BlogController = require("../controllers/BlogController.js");
const TeamController = require("../controllers/TeamController.js");
const ServiceController = require("../controllers/ServiceController.js")
const ContactForm = require("../controllers/ContactForm.js")

//! User
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/logout", UserController.logout);
router.get("/profile_read", AuthVerification, UserController.profile_read);
// router.post("/send-email", AuthVerification, UserController.send_Email);


//Blog
router.get("/readBlog", BlogController.readBlog);
router.post("/createBlog", BlogController.createBlog);
router.put("/updateBlog/:id", BlogController.updateBlog);
router.delete("/removeBlog/:id", BlogController.removeBlog);

//Team
router.get("/readTeam/:id", TeamController.readTeam);
router.post("/createTeam", TeamController.createTeam);
router.put("/updateTeam/:id", TeamController.updateTeam);
router.delete("/removeTeam/:id", TeamController.removeTeam);

//Service
router.get("/readService/:id", ServiceController.readService);
router.post("/createService", ServiceController.createService);
router.put("/updateService/:id", ServiceController.updateService);
router.delete("/removeService/:id", ServiceController.removeService);

//Contact-Form
router.post("/contact",ContactForm.contact)

module.exports = router;
