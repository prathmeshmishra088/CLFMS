const mongoose = require("mongoose");

const claimSchema = new mongoose.Schema(
  {
    claimantName: {
      type: String,
      required: true,
      trim: true,
    },
    itemName: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Claim = mongoose.model("Claim", claimSchema);

module.exports = Claim;
