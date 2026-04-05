import React from "react";
import "../styles/Home.scss"
const Home =()=>{
    return(
        <main className="home">
            <div className="interview-input-group">
                <div className="left">
                    <label htmlFor="jobDescription"> Job Description </label>
                    <textarea id="jobDescription" name="jobDescription" placeholder=" enter job description here...." ></textarea>
                </div>
            <div className="right">
                <div className="input-group">
                    <p>Resume <small className="highlight">(Use Resume and self description together for better results)</small></p>
                    <label className="file-label" htmlFor="resume"> Upload resume</label>
                    <input hidden type="file" name="resume" placeholder="upload resume" id="resume" accept=".pdf" />
                </div>
                <div className="input-group">
                     <label htmlFor="selfDescription"> Self Description </label>
                     <textarea id="selfDescription" name="selfDescription" placeholder="Describe yourself in a few sentences..."></textarea> 
                </div>
                <button className=" button Primary-button"> Generate Interview Report</button>
            </div>
            </div>
        </main>
    )
}

export default Home;