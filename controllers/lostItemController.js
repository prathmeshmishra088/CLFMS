const LostItem = require("../models/LostItem");

// Create
exports.createLostItem = async (req,res)=>{
try{

const item = await LostItem.create(req.body);

res.status(201).json(item);

}catch(error){
res.status(500).json({
message:error.message
});
}
};

// Read
exports.getLostItems = async (req,res)=>{
try{

const items = await LostItem.find();

res.status(200).json(items);

}catch(error){
res.status(500).json({
message:error.message
});
}
};

// Update
exports.updateLostItem = async (req,res)=>{
try{

const item = await LostItem.findByIdAndUpdate(
req.params.id,
req.body,
{new:true}
);

res.status(200).json(item);

}catch(error){
res.status(500).json({
message:error.message
});
}
};

// Delete
exports.deleteLostItem = async (req,res)=>{
try{

await LostItem.findByIdAndDelete(req.params.id);

res.status(200).json({
message:"Item deleted"
});

}catch(error){
res.status(500).json({
message:error.message
});
}
};