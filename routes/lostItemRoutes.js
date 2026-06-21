const express = require("express");

const router = express.Router();

const {
createLostItem,
getLostItems,
updateLostItem,
deleteLostItem
} = require("../controllers/lostItemController");

router.post("/", createLostItem);
router.get("/", getLostItems);
router.put("/:id", updateLostItem);
router.delete("/:id", deleteLostItem);

module.exports = router;