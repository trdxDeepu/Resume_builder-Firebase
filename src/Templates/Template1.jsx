import React, { useEffect, useState } from "react";
import "../Resources/template.css";
import { Image } from "@chakra-ui/react";
import { AiOutlineGithub, AiFillMobile } from "react-icons/ai";
import { FaLinkedinIn, FaEnvelopeOpen, FaMapMarker } from "react-icons/fa";
import { getAuth } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../Firebase";

const Template1 = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user.displayName);

  const [personalInfo, setPersonalInfo] = useState({});
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [projects, setProjects] = useState([]);
  const [interest, setInterest] = useState([]);

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
        setInterest(data.Interest);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="resume-main">
        <div className="left-box">
          <br />
          <br />
          <div className="profile">
            <img src="src\assets\Luffy.jpeg" alt="" />
          </div>
          <div className="content-box">
            <h2>Profile</h2>
            <hr className="hr1" />
            <p className="p1">{personalInfo.carrerObjective}</p>
            <br />
            <br />

            <h2>Skills</h2>
            <hr className="hr1" />
            <br />
            {skills.map((skill) => {
              return (
                <div className="col-div-3 col3 ">
                  <span className="inp">{skill.Skills}</span>
                </div>
              );
            })}

            <div className="clearfix"></div>

            <h2>Interest</h2>
            <hr className="hr1" />
            {interest.map((inter, index) => {
              return (
                <div className="col-div-3" key={index}>
                  <span className="inp">{inter.interest}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="right-box">
          <h1 className="font-bold text-4xl  ">
            {personalInfo.firstName} <br />
            <span>{personalInfo.lastName}</span>{" "}
          </h1>
          <br />
          <h2 className="heading">Work Experience</h2>
          <hr className="hr2" />
          <br />
          {experience.map((exp, index) => {
            return (
              <>
                <div className="col-div-4">
                  <p className="p5">{exp.StartDate}</p>
                  <span className="span1">{exp.Company}</span>
                </div>
                <div className="col-div-8">
                  <p className="p5">{exp.Position}</p>
                  <span className="span1">{exp.Description}</span>
                </div>
              </>
            );
          })}
          <div className="clearfix"></div>
          <h2 className="heading">Education</h2>
          <hr className="hr2" />
          <br />
          {education.map((edu, index) => {
            return (
              <>
                <div className="col-div-4" key={index}>
                  <p className="p5">{edu.Range} </p>
                  <span className="span1"></span>
                </div>
                <div className="col-div-8">
                  <p className="span1">
                    {edu.Qualification} in {edu.Institution} With{" "}
                    <span className="p5">{edu.Percentage} %</span>
                  </p>
                </div>
              </>
            );
          })}
          <div className="clearfix"></div>
        </div>
      </div>
    </>
  );
};

export default Template1;
