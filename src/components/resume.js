import React, { Component } from 'react';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import { Grid, Cell } from 'react-mdl';


class Resume extends Component {
    render() {
        return(
            <div>
            <Grid>
                <Cell className="resume-left-col" col={4}>
                <div style={{textAlign: "center"}}>
                <img src="https://www.w3schools.com/w3images/avatar2.png" alt="avatar" className="avatar-img2" />
                </div>
                <h2 style={{textAlign: "center"}}>Thanh Dang</h2>
                <h4 style={{color:"grey", textAlign: "center"}}>Full Stack Web Developer</h4>
                <p>Full Stack Web Developer with a background in education and finance.  Team player, problem solver and a lifelong commitment to learning.</p>
                
                <hr style={{borderTop: "2px solid black"}}/>
                <h5>Location</h5>
                <p>Houston, TX</p>
                
                <h5>Phone Number</h5>
                <p>352-484-9546</p>
                
                <h5>E-mail</h5>
                <p>thanhqd1990@gmail.com</p>
                
                <h5>Website</h5>
                <p>www.thanh-dang.com</p>
                <hr style={{borderTop: "2px solid black"}}/>
                
                </Cell>
                <Cell className="resume-right-col" col={8}>
                <h2>Education</h2>
                <Education 
                    startYear={2011}
                    endYear={2013}
                    schoolName="University of Central Florida"
                    schoolDescription="B.S. Elementary Education"
                />

                <Education 
                    startYear={2018}
                    endYear={2019}
                    schoolName="University of Texas"
                    schoolDescription="Full Stack Web Developer Certification"
                />
                <hr style={{borderTop: "3px solid #e22947"}}/>
                <h2>Experience</h2>

                
                <Experience
                    startYear={2015}
                    endYear="Present"
                    jobName="Wells Fargo Bank N.A."
                    jobDescription="Handled large volumes of cash while being in compliance with federal regulations and preventing loss exposure. Provided exceptional customer service through product knowledge and problem solving. Supervise and coach team members in the teller role."
                />
                <Experience
                    startYear={2011}
                    endYear={2013}
                    jobName="Marion County Public Schools"
                    jobDescription="Managed classroom sizes ranging from 16-20 students.
                    Followed and taught lesson plans assigned by permanent teacher for students' in Kindergarten through the 5th grade. Maintained effective classroom management strategies and applied advanced teaching capabilities in all subject areas."
                />
                <hr style={{borderTop: "3px solid #e22947"}}/>
                <h2>Skills</h2>
                <Skills
                skill="HTML"
                progress={90} />
                <Skills
                skill="CSS"
                progress={90} />
                <Skills
                skill="Javascript"
                progress={80} />
                <Skills
                skill="jQuery"
                progress={80} />
                <Skills
                skill="Node.js"
                progress={75} />
                <Skills
                skill="MySQL"
                progress={75} />
                <Skills
                skill="React"
                progress={70} />
                </Cell>
                
            </Grid>
            </div>
        )
    }
}

export default Resume;