import React, { useEffect, useState } from "react";
import { db } from "../Firebase";
import "../Resources/template2.css";
import { getAuth } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { Flex, Box, Progress, Text } from "@chakra-ui/react";

const Template2 = () => {
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

  const SkillProgressBar = ({ rating, skill }) => (
    <Flex w="100%" mt={4} direction="row">
      <Box w="60%">
        <Text fontWeight="bold">{skill}</Text>
      </Box>
      <Box w="40%">
        <Progress value={rating * 10} max={100} />
      </Box>
    </Flex>
  );

  return (
    <>
      <div className="resume-box">
        <div className="resume-box">
          <div className="left-section">
            <h2 className="name">
              {personalInfo.firstName} <br /> {personalInfo.lastName}
            </h2>
            <p className="n-p"></p>

            <div className="info">
              <p className="heading">Info</p>
              <p className="p1">
                <span className="span1">
                  <img src="src/assets/location.png" alt="" />
                </span>
                Address
                <span>
                  <br />
                  Chauba
                </span>
              </p>
              <p className="p1">
                <span className="span1">
                  <img src="src/assets/call.png" alt="" />
                </span>
                Phone
                <span>
                  <br />
                  {personalInfo.mobileNumber}
                </span>
              </p>{" "}
            </div>
            <div className="info">
              <p className="heading">Socials</p>
              <p className="p1">
                <span className="span1">
                  <img src="src/assets/mail.png" alt="" />
                </span>
                Email
                <span>
                  <br />
                  {personalInfo.email}
                </span>
              </p>{" "}
              <p className="p1">
                <span className="span1">
                  <img src="src/assets/github.png" alt="" />
                </span>
                Github
                <span>
                  <br />
                  {personalInfo.github}
                </span>
              </p>
              <p className="p1">
                <span className="span1">
                  <img src="src/assets/linkedin.png" alt="" />
                </span>
                Linkden
                <span>
                  <br />
                  {personalInfo.linkeden}
                </span>
              </p>
            </div>
          </div>
          <div className="right-section">
            <div className="right-heading">
              <img src="src/assets/user.png" alt="" />
              <p className="p2">Profile</p>
            </div>
            <p className="p3">{personalInfo.carrerObjective}</p>
            <div className="clearfix"></div>
            <br />

            <div className="right-heading">
              <img src="src/assets/pencil.png" alt="" />
              <p className="p2">Experience</p>
            </div>
            <div className="clearfix">
              {experience.map((exp, index) => {
                return (
                  <div className="lr-box" key={index}>
                    <div className="left">
                      <p className="p4">{exp.StartDate}</p>
                    </div>
                    <div className="right">
                      <p className="p4">{exp.Position}</p>
                      <p className="p5">{exp.Company}</p>
                      <p className="p5">{exp.Description}</p>
                    </div>
                  </div>
                );
              })}
              <div className="clearfix"></div>
              <br />
              <div className="right-heading">
                <img src="src/assets/edu.png" alt="" />
                <p className="p2">Education</p>
                <div className="clearfix"></div>
                {education.map((edu, index) => {
                  return (
                    <div className="lr-box" key={index}>
                      <div className="left">
                        <p className="p4">{edu.Range}</p>
                      </div>
                      <div className="right">
                        <p className="p4">
                          {edu.Qualification} from {edu.Institution}{" "}
                        </p>

                        <p className="p5">With {edu.Percentage}%</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="clearfix"></div>
              <div className="right-heading">
                <img src="src/assets/laptop.png" alt="" />
                <p className="p2">Skills </p>
                <div className="clearfix"></div>
              </div>
              <div className="clearfix"></div>
              <Box mt={6}>
                {skills.map((skill, index) => (
                  <SkillProgressBar
                    key={index}
                    rating={skill.rating}
                    skill={skill.Skills}
                  />
                ))}
              </Box>
            </div>
            <div className="clearfix"></div>
          </div>
          /
        </div>
      </div>
    </>
  );
};

export default Template2;
