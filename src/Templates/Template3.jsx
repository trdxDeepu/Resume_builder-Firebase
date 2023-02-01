import React, { useEffect, useState } from "react";
import { db } from "../Firebase";
import "../Resources/template2.css";
import { getAuth } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { Flex, Box, Progress, Text } from "@chakra-ui/react";
import { AiOutlineGithub, AiFillMobile } from "react-icons/ai";
import { FaLinkedinIn, FaEnvelopeOpen, FaMapMarker } from "react-icons/fa";
import "../Resources/template3.css";
const Template3 = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  const [personalInfo, setPersonalInfo] = useState({});
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        const data = userDoc.data();
        setPersonalInfo(data.Personal);
        setEducation(data.Education);
        console.log(education);
        setSkills(data.Skills);
        console.log(skills);
        setExperience(data.Experience);
        setProjects(data.Projects);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="full-name">
            <span className="first-name">{personalInfo.firstName}</span>
            <span className="last-name">{personalInfo.lastName}</span>
          </div>
          <div className="contact-info">
            <span className="email">Email: </span>
            <span className="email-val">{personalInfo.email}</span>
            <span className="separator"></span>
            <span className="phone">Phone: </span>
            <span className="phone-val">{personalInfo.mobileNumber}</span>
          </div>
          {/* 
          <div className="about">
            <span className="position">Front-End Developer </span>
            <span className="desc">
              I am a front-end developer with more than 3 years of experience
              writing html, css, and js. I'm motivated, result-focused and
              seeking a successful team-oriented company with opportunity to
              grow.
            </span>
          </div> */}
        </div>
        <div className="details">
          <div className="section">
            <div className="section__title">Experience</div>
            <div className="section__list">
              {experience.map((exp) => {
                return (
                  <div className="section__list-item">
                    <div className="left">
                      <div className="name">{exp.Company}</div>
                      {/* <div className="addr"></div> */}
                      <div className="duration">{exp.StartDate}</div>
                    </div>
                    <div className="right">
                      <div className="name">{exp.Position}</div>
                      <div className="desc">{exp.Description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="section">
            <div className="section__title">Education</div>
            <div className="section__list">
              {education.map((edu) => {
                return (
                  <div className="section__list-item">
                    <div className="left">
                      <div className="name">{edu.Institution}</div>
                      <div className="addr">San Fr, CA</div>
                      <div className="duration">Jan 2011 - Feb 2015</div>
                    </div>
                    <div className="right">
                      <div className="name"> {edu.Qualification} </div>
                      <div className="desc">{edu.Percentage}</div>
                    </div>
                  </div>
                );
              })}

              <div className="section__list-item">
                <div className="left">
                  <div className="name">Akount</div>
                  <div className="addr">San Monica, CA</div>
                  <div className="duration">Jan 2011 - Feb 2015</div>
                </div>
                <div className="right">
                  <div className="name">Fr developer</div>
                  <div className="desc">did This and that</div>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="section__title">Skills</div>
            <div className="skills">
              <div className="skills__item">
                {skills.map((skill) => {
                  return (
                    <div className="left">
                      <div className="name">{skill.Skills}</div>

                      <div className="right">
                        <input id="ck1" type="checkbox" checked />

                        <label for="ck1"></label>
                        <input id="ck2" type="checkbox" checked />

                        <label for="ck2"></label>
                        <input id="ck3" type="checkbox" />

                        <label for="ck3"></label>
                        <input id="ck4" type="checkbox" />
                        <label for="ck4"></label>
                        <input id="ck5" type="checkbox" />
                        <label for="ck5"></label>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* <div className="skills__item">
              <div className="left">
                <div className="name">CSS</div>
              </div>
              <div className="right">
                <input id="ck1" type="checkbox" checked />

                <label for="ck1"></label>
                <input id="ck2" type="checkbox" checked />

                <label for="ck2"></label>
                <input id="ck3" type="checkbox" />

                <label for="ck3"></label>
                <input id="ck4" type="checkbox" />
                <label for="ck4"></label>
                <input id="ck5" type="checkbox" />
                <label for="ck5"></label>
              </div>
            </div> */}
          </div>
          {/* <div className="section">
            <div className="section__title">Interests</div>
            <div className="section__list">
              <div className="section__list-item">Football, programming.</div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Template3;
