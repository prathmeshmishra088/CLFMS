const Claim = require("../models/Claim");

// POST - Create a new claim
const createClaim = async (req, res) => {
  try {
    const { claimantName, itemName, message } = req.body;

    // Validation
    if (!claimantName || !itemName || !message) {
      return res.status(400).json({
        success: false,
        message: "Please provide claimantName, itemName, and message",
      });
    }

    const newClaim = new Claim({
      claimantName,
      itemName,
      message,
    });

    const savedClaim = await newClaim.save();

    res.status(201).json({
      success: true,
      message: "Claim created successfully",
      data: savedClaim,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating claim",
      error: error.message,
    });
  }
};

// GET - Retrieve all claims
const getAllClaims = async (req, res) => {
  try {
    const claims = await Claim.find();

    res.status(200).json({
      success: true,
      message: "Claims retrieved successfully",
      data: claims,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving claims",
      error: error.message,
    });
  }
};

module.exports = {
  createClaim,
  getAllClaims,
};
