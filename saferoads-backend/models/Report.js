const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    type: { type: String, required: true }, // "Traffic", "Accident", "Road Damage"
    description: { type: String, required: true },
    location: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
    },
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Report', reportSchema);
