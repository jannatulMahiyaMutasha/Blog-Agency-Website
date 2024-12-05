const ServiceModel =require ("../models/ServiceModel.js")

// Get All Services
exports.readService = async (req, res) => {
    try {
        const services = await ServiceModel.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch services", error: error.message });
    }
}

// Add New Service
exports.createService = async (req, res) => {
    try {
        const newService = new ServiceModel(req.body);
        await newService.save();
        res.status(201).json({ message: "Service added successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to add service", error: error.message });
    }
}

// Update Service by ID
exports.updateService = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedService = await ServiceModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedService) return res.status(404).json({ message: "Service not found" });
        res.status(200).json({ message: "Service updated successfully", updatedService });
    } catch (error) {
        res.status(500).json({ message: "Failed to update service", error: error.message });
    }
}

// Delete Service by ID
exports.removeService = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedService = await ServiceModel.findByIdAndDelete(id);
        if (!deletedService) return res.status(404).json({ message: "Service not found" });
        res.status(200).json({ message: "Service deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete service", error: error.message });
    }
}

