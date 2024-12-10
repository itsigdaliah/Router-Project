const express = require('express');
const Report = require('../models/Report');
const router = express.Router();

// Create a new report
router.post('/', async (req, res) => {
    try {
        const report = new Report(req.body);
        await report.save();
        res.status(201).json(report);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all reports
router.get('/', async (req, res) => {
    try {
        const reports = await Report.find();
        res.status(200).json(reports);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
