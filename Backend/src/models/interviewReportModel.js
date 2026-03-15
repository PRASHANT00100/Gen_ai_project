const mongoose = require('mongoose');

/**
 * - job description schema :string
 *  - resume text :string
 *  - self description :string
 * 
 *  - matchScore : number
 * 
 *  - Technical questions : [{
 *        question : "",
 *        intension : "",
 *        answer : ""
 *        }]
 *  - Behavioral questions :[{
 *        question : "",
 *        intension : "",
 *        answer : ""
 *        }]
 *  - Skill gaps : [{
 *           skill :"",
 *           severity : {
 *             type : String ,
 *             enum :['low' , 'medium', 'high'] 
 *        }
 *       }]
 *   - Preparation plan [{
 *        day : number,
 *        focus :string,
 *        tasks :[string]
 *       }]
 */

const TechnicalQuestionSchema = new mongoose.Schema({
    question : {
        type :String ,
        required : [true , " Technical question is required"]
    },
    intension : {
        type : String ,
        required : [true ,"Intension is required"]
    },
    answer : {
        type : String ,
        required :[ true , "Answer is required" ]
    },
},{
    _id:false,
});

const BehavioralQuestionSchema =  new mongoose.Schema({
    question : {
        type :String ,
        required : [true , " Technical question is required"]
    },
    intension : {
        type : String ,
        required : [true ,"Intension is required"]
    },
    answer : {
        type : String ,
        required :[ true , "Answer is required" ]
    },
},{
    _id:false,
});

const SkillGapSchema = new mongoose.Schema({
    skill : {
        type :String,
        required : [true , "Skill is required"]
    },
    severity :{
        type:String ,
        enum : ['low' , 'medium' , 'high'],
        required : [true , "Severity is required"]
    }
},{
    _id :false,
});

const PreparationPlanSchema = new mongoose.Schema({
    day :{
        type :Number ,
        required :[true , ' Day is required ']
    },
    focus :{
        type :String,
        required :[true , ' Focus is required ']
    },
    task :{
        type : String,
        required :[true , ' Task is required ']
    }

})

const interviewReportSchema = new mongoose.Schema({
    jobDescription : {
        type : String ,
        required : [true , "job description is required "]
    },
    resume:{
        type : String
    },
    selfDescription : {
        type :String
    },
    matchScore :{
        type : Number,
        min:0,
        max:100
    },
    technicalQuestion :[TechnicalQuestionSchema],
    behavioralQuestion :[BehavioralQuestionSchema],
    skillGap :[SkillGapSchema],
    PreparationPlan :[PreparationPlanSchema]
},{
    timestamps:true
})

const interviewReportModel = mongoose.model('InterviewReport' , interviewReportSchema);
module.exports = interviewReportModel;
