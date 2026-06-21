const express = require("express");
const {
  createFoundItem,
  getAllFoundItems,
  updateFoundItem,
  deleteFoundItem,
} = require("../controllers/foundItemController");

const router = express.Router();

// POST - Create a new found item
router.post("/", createFoundItem);

// GET - Retrieve all found items
router.get("/", getAllFoundItems);

// PUT - Update a found item by ID
router.put("/:id", updateFoundItem);

// DELETE - Delete a found item by ID
router.delete("/:id", deleteFoundItem);

module.exports = router;
