import React, { Component } from 'react';
import "./Resume.css";

class Resume extends Component {
    render() {
        return (
            <div className="Resume">
                <h3>Skill Highlights</h3>
                <div className="Dividing-line">▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔</div>
                <div className="Resume-list">
                    <ul className="Two-column-list">
                        <li>Fluent in C#, XAML, WPF, .NET Framework</li>
                        <li>Familiar with UWP, HTML, JavaScript, Java</li>
                        <li>MVVM</li>
                        <li>UX Design</li>
                        <li>RESTful Architecture</li>
                        <li>Git, Mercurial</li>
                        <li>Agile / Scrum</li>
                    </ul>
                </div>
                <h3>Experience</h3>
                <div className="Dividing-line">▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔</div>
                <h5>January 2014 - PRESENT</h5>
                <h4>Software Developer - <span>Datawatch Corporation, Greensboro, NC</span></h4>
                <ul>
                    <li>Designed and developed Data Prep Studio, Datawatch’s data preparation product.</li>
                    <li>Designed and developed UX for PDF Table Extractor, a product focused on automatic table discovery in PDF documents.</li>
                    <li>Worked on-site with Panopticon Software in Stockholm, Sweden following their acquisition by Datawatch to bring Panopticon’s data visualization software into the Datawatch software suite.</li>
                    <li>Developed data connectors that allow Datawatch software to connect to IBM Cognos TM1, IBM Cloudant, and streaming data sources.</li>
                    <li>Helped develop US Patent: 9703766 which protects the algorithms that power PDF Table Extractor.</li>
                </ul>
                <h5>August 2013 - December 2013</h5>
                <h4>Intern - <span>Datawatch Corporation, Greensboro, NC</span></h4>
                <ul>
                    <li>Performed quality assurance testing for Monarch 12.</li>
                    <li>Implemented continuous integration for Monarch 12 through Atlassian’s Bamboo software.</li>
                </ul>
                <h5>January 2012 - April 2013</h5>
                <h4>Lab Tutor - <span>University of North Carolina Greensboro, Greensboro, NC</span></h4>
                <ul><li>Assisted students with programming assignments during open lab hours.</li></ul>


                <h3>Education</h3>
                <div className="Dividing-line">▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔</div>
                <h5>August 2008 - December 2013</h5>
                <ul><li><h4>BS in Computer Science - </h4><span>University of North Carolina Greensboro, Greensboro, NC</span></li></ul>

                <h3>Awards</h3>
                <div className="Dividing-line">▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔</div>
                <ul>
                    <li>Datawatch President’s Award at the FY2016 Datawatch Kickoff.</li>
                    <li>Outstanding Computer Science Undergraduate Student at Computer Science graduation ceremony in Spring 2014.</li>
                    <li>1st place at the ACM Programming Contest at North Carolina A&T University in Spring 2012.</li>
                </ul>
            </div>
        );
    }
}

export default Resume;