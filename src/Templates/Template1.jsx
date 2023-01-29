import { getAuth } from "firebase/auth";
import { collection, query, getDoc, doc } from "firebase/firestore";
import React from "react";
import "./template.css";
import { useEffect, useState } from "react";
import { db } from "../Firebase";
import {
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
  FaPhoneAlt,
  FaMapMarker,
} from "react-icons/fa";

const Template1 = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user.displayName);

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

  const educationArray = Object.entries(education).map(([key, value]) => value);
  console.log(educationArray);
  const SkillsArray = Object.entries(skills).map(([key, value]) => value);
  console.log("skill arrray is : ", SkillsArray);
  const experienceArray = Object.entries(experience).map(
    ([key, value]) => value
  );
  const projectArray = Object.entries(projects).map(([key, value]) => value);
  console.log("Experience array is  : ", projectArray);

  return (
    <div className="container1">
      <div className="container">
        <div className="left_side">
          <div className="profileText">
            <h2>
              {personalInfo.firstName} {personalInfo.lastName}
            </h2>
          </div>
          <div className="contactInfo">
            <h3 className="title">Contact Info</h3>
            <ul>
              <li>
                <span className="icon">
                  <FaPhoneAlt />
                </span>
                <span className="text">{personalInfo.mobileNumber}</span>
              </li>
              <li>
                <span className="icon">
                  <FaRegEnvelope />
                </span>
                <span className="text">{personalInfo.email}</span>
              </li>
              <li>
                <span className="icon">
                  <FaGithub />
                </span>
                <span className="text">{personalInfo.github}</span>
              </li>
              <li>
                <span className="icon">
                  <FaLinkedin />
                </span>
                <span className="text">{personalInfo.linkeden}</span>
              </li>

              <li>
                <span className="icon">
                  <FaMapMarker />
                </span>
                <span className="text">{personalInfo.address}</span>
              </li>
            </ul>
          </div>

          <div className="contactInfo education">
            <h3 className="title">Education</h3>
            {educationArray.map((outerArray, outerIndex) => {
              return (
                <div key={outerIndex}>
                  {outerArray.map((innerObject, innerIndex) => {
                    const educationDetail =
                      innerObject[`educationUser ${innerIndex}`];
                    return (
                      <ul key={innerIndex}>
                        <li>
                          <h6 className="h66">{educationDetail.Range}</h6>
                          <p className="p1">
                            <b>{educationDetail.Qualification}</b>
                            <b>{educationDetail.Percentage}%</b> in{" "}
                            <span>{educationDetail.Institution}</span>
                          </p>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="right_side">
          <div className="about">
            <h2 className="title2">Profile</h2>
            <hr />
            <p className="pp">{personalInfo.carrerObjective}</p>
          </div>
          <div className="about">
            <h2 className="title2">Experience</h2>
            <hr />
            {experienceArray.map((outerArray, outerIndex) => {
              return (
                <div key={outerIndex}>
                  {outerArray.map((innerObject, innerIndex) => {
                    const experienceDetail =
                      innerObject[`experience ${innerIndex}`];
                    return (
                      <div className="box" key={innerIndex}>
                        <div className="year_company">
                          <h5>{experienceDetail.Company}</h5>
                        </div>
                        <div className="text">
                          <h4>{experienceDetail.Position}</h4>
                          <h4>{experienceDetail.Description}</h4>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="about skill">
            <h2 className="title2">Skills</h2>
            <hr />
            {SkillsArray.map((outerArray, outerIndex) => {
              return (
                <div key={outerIndex}>
                  {outerArray.map((innerObject, innerIndex) => {
                    const skillDetail = innerObject[`SkillsUser ${innerIndex}`];
                    return (
                      <div key={innerIndex} className="boxw">
                        <div className="box3">{skillDetail.Skills}</div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="about">
            <h2 className="title2">Experience</h2>
            <hr />
            {projectArray.map((outerArray, outerIndex) => {
              return (
                <div key={outerIndex}>
                  {outerArray.map((innerObject, innerIndex) => {
                    const projectDetail = innerObject[`project ${innerIndex}`];
                    return (
                      <div className="box" key={innerIndex}>
                        <div className="year_company">
                          <h5>{projectDetail.Title}</h5>
                        </div>
                        <div className="text">
                          <h4>{projectDetail.Year}</h4>
                          <h4>{projectDetail.Title}</h4>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;
