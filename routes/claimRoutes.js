const express = require("express");
const {
  createClaim,
  getAllClaims,
} = require("../controllers/claimController");

const router = express.Router();

// POST - Create a new claim
router.post("/", createClaim);

// GET - Retrieve all claims
router.get("/", getAllClaims);

module.exports = router;
