const mongoose = require('mongoose');


// define a schema for individual work experiences
const experienceSchema = new mongoose.Schema({
  company: String,
  role: String,
  startDate: String,
  endDate: String,
  description: [String],
}, { _id: false}); // Disable automatic id generation for subdocuments

// define a schema for education qualifications
const educationSchema = new mongoose.Schema({
  institution: String,
  degree: String,
  graduationYear: String
}, {_id: false});
// schema for projects
const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: [String],
  technologies: [String],
  link: String,
  date: String
}, { _id: false });
//schema for certifications Skills and intrests


// main resume schema
const resumeSchema = new mongoose.Schema({
  // basic profile information
  name: {
    type: String,
    required: true
  },
  title: String,
  //array of experience entries using experienceSchema
  experience: [experienceSchema],
  // array of education entries using educationSchema
  education: [educationSchema],
  // simple list of skills
  skills: [String],
  contact: {
    email: String,
    phone: String,
    website: String,
    linkedIn: String,
    github: String
  },
  projects: [projectSchema],
  certificationsSkillsInterests: {
    certifications: [String],
    technologies: [String],
    skills: [String],
    interests: [String]
  }
}, { timestamps: true}); // automatically add createdAt and updatedAt fields



// Export the model for use in routes and controllers
module.exports = mongoose.model('Resume', resumeSchema);