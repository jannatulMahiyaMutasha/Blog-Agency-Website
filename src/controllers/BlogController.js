const mongoose = require  ("mongoose")
const express = require("express")
const Blog =require("../models/BlogModel.js")

const router = express.Router();

// CRUD Operations

exports.readBlog = async (req, res) => {
    const blogs = await Blog.find();
    res.json(blogs);
}




exports.createBlog = async (req, res) => {
    const newBlog = Blog(req.body);
    await newBlog.save();
    res.status(201).json(newBlog);
}
/*
exports.updateBlog = async (req, res) => {
    await Blog.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Blog updated successfully" });
}

 */

exports.updateBlog = async (req, res) => {
    try {
        const { id } = req.params;

        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid blog ID" });
        }

        const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};



exports.removeBlog = async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({message: "Blog deleted successfully"});

}