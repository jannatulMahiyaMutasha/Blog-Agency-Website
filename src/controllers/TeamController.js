//const express = require("express")
const TeamModel = require("../models/TeamModel.js")

//const router = express.Router();

// Get All Team Members
exports.readTeam = async (req, res) => {
    try {
        const team = await TeamModel.find();
        res.status(200).json(team);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch team members", error: error.message });
    }
}

// Add New Team Member
exports.createTeam = async (req, res) => {
    try {
        const newTeamMember = new TeamModel(req.body);
        await newTeamMember.save();
        res.status(201).json({ message: "Team member added successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to add team member", error: error.message });
    }
}

// Update Team Member by ID
exports.updateTeam = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedMember = await TeamModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedMember) return res.status(404).json({ message: "Team member not found" });
        res.status(200).json({ message: "Team member updated successfully", updatedMember });
    } catch (error) {
        res.status(500).json({ message: "Failed to update team member", error: error.message });
    }
}

// Delete Team Member by ID
exports.removeTeam = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMember = await TeamModel.findByIdAndDelete(id);
        if (!deletedMember) return res.status(404).json({ message: "Team member not found" });
        res.status(200).json({ message: "Team member deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete team member", error: error.message });
    }
}
