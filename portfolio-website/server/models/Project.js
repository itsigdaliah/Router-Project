// server/models/Project.js
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [{ type: String }],
  githubLink: { type: String },
  liveLink: { type: String },
  image: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);

// server/models/Message.js
const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  read: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Message', MessageSchema);