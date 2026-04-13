const express = require('express');

const interviewRouter = express.Router();
const authMiddleware = require("../middlewares/auth_middleware");
const interviewController = require('../controllers/interview_controller')
const upload  = require('../middlewares/file_middleware');

/**
 * @route Post /api/interview
 * @description  Generate new interview report on the basis of user 
 * self description, resume pdf and job description
 * @access private
 */

interviewRouter.post("/", authMiddleware.AuthUser, upload.single("resume"), interviewController.generateInterviewReportController);

/**
 * @route GET /api/interview/report/:interviewId
 * @description get interview report by interviewId.
 * @access private
 */

interviewRouter.get('/report/:interviewId' , authMiddleware.AuthUser, interviewController.generateInterviewReportByIdController);

/**
 * @route GET  /api/interview
 * @description get all interview reports of logged in user
 * @access private 
 */

interviewRouter.get('/' , authMiddleware.AuthUser, interviewController.getAllInterviewReportsController);

module.exports = interviewRouter;