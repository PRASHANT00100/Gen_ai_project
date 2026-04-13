import {getAllInterviewReport , generateInterviewReport , generateInterviewReportById} from "../services/interview_api";
import { InterviewContext } from "../interview_context";
import { useContext , useEffect } from "react";
import { useParams } from "react-router";


export const useInterview = () =>{

    const context = useContext(InterviewContext);
    const {interviewId} = useParams();

    if(!context){
        throw new Error("useInterview must be used within an InterviewProvider");        
    }
    
    const {loading ,setLoading , report ,setReport , reports ,setReports} = context;

    const genereteReport = async ({jobDescription , selfDescription , resumeFile}) =>{

        setLoading(true);
        const response = null ;
        try {
             response = await generateInterviewReport({jobDescription , selfDescription ,resumeFile}) ;
            setReport(response.interviewReport);
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
        return response.interviewReport ;
    };

    const getReportById = async (interviewId) =>{

        setLoading(true);
        const response = null ;
        try {
             response = await generateInterviewReportById({interviewId}) ;
            setReport(response.interviewReport);
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
        return response.interviewReport ;
    };

    const getReports = async() =>{
         setLoading(true);
         const response = null ;
        try {
             response = await getAllInterviewReport() ;
            setReports(response.interviewReport);
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
        return response.interviewReport ;
    }

     useEffect(() => {
            if (interviewId) {
                getReportById(interviewId)
            }else{
                getReports();
            }
        }, []);

    return { report , reports ,loading ,getReportById , getReports , genereteReport}
}