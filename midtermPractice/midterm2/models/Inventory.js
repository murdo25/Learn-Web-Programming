var mongoose = require('mongoose');

var InventorySchema = new mongoose.Schema({
    Name: String,
    Price: Number,
    Picture: String,
    orders: { type: Number, default: 0 }
});

InventorySchema.methods.upvote = function(cb) {
    this.orders += 1;
    this.save(cb);
};

mongoose.model('Inventory', InventorySchema);
