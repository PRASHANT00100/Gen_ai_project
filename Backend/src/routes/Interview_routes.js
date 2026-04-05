const express = require('express');

const interviewRouter = express.Router();
const authMiddleware = require("../middlewares/auth_middleware");
const interviewController = require('../controllers/interview_controller')
const upload  = require('../middlewares/file_middleware');

/**
 * @route Post /api/interview
 * @description  Generate new interview report on the basis of user 
 * self description, resume pdf and job description
 * @access Private
 */

interviewRouter.post("/", authMiddleware.AuthUser, upload.single("resume"), interviewController.generateInterviewReportController);


module.exports = interviewRouter;