const FoundItem = require("../models/FoundItem");

// POST - Create a new found item
const createFoundItem = async (req, res) => {
  try {
    const { itemName, description, location } = req.body;

    // Validation
    if (!itemName || !description || !location) {
      return res.status(400).json({
        success: false,
        message: "Please provide itemName, description, and location",
      });
    }

    const newFoundItem = new FoundItem({
      itemName,
      description,
      location,
    });

    const savedFoundItem = await newFoundItem.save();

    res.status(201).json({
      success: true,
      message: "Found item created successfully",
      data: savedFoundItem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating found item",
      error: error.message,
    });
  }
};

// GET - Retrieve all found items
const getAllFoundItems = async (req, res) => {
  try {
    const foundItems = await FoundItem.find();

    res.status(200).json({
      success: true,
      message: "Found items retrieved successfully",
      data: foundItems,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving found items",
      error: error.message,
    });
  }
};

// PUT - Update a found item by ID
const updateFoundItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { itemName, description, location } = req.body;

    // Validation
    if (!itemName && !description && !location) {
      return res.status(400).json({
        success: false,
        message: "Please provide at least one field to update",
      });
    }

    const updatedFoundItem = await FoundItem.findByIdAndUpdate(
      id,
      { itemName, description, location },
      { new: true, runValidators: true }
    );

    if (!updatedFoundItem) {
      return res.status(404).json({
        success: false,
        message: "Found item not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Found item updated successfully",
      data: updatedFoundItem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating found item",
      error: error.message,
    });
  }
};

// DELETE - Delete a found item by ID
const deleteFoundItem = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedFoundItem = await FoundItem.findByIdAndDelete(id);

    if (!deletedFoundItem) {
      return res.status(404).json({
        success: false,
        message: "Found item not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Found item deleted successfully",
      data: deletedFoundItem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting found item",
      error: error.message,
    });
  }
};

module.exports = {
  createFoundItem,
  getAllFoundItems,
  updateFoundItem,
  deleteFoundItem,
};
