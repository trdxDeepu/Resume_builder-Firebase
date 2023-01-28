import { getAuth } from "firebase/auth";
import { collection, query, getDoc, doc } from "firebase/firestore";
import React from "react";
import { useEffect, useState } from "react";
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
  console.log("skill arrra is : ", SkillsArray);

  return (
    <div>
      <p>{personalInfo.firstName}</p>
      <p>{personalInfo.mobileNumber}</p>
      <p>{personalInfo.github}</p>
      <p>{personalInfo.address}</p>
      <p>{personalInfo.lastName}</p>
      <h2>Education</h2>
      <div>
        <div>
          <div>
            {educationArray.map((outerArray, outerIndex) => {
              return (
                <div key={outerIndex}>
                  {outerArray.map((innerObject, innerIndex) => {
                    const educationDetail =
                      innerObject[`educationUser ${innerIndex}`];
                    return (
                      <div key={innerIndex}>
                        <p>Qualification: {educationDetail.Qualification}</p>
                        <p>Percentage: {educationDetail.Percentage}</p>
                        <p>Range: {educationDetail.Range}</p>
                        <p>Institution: {educationDetail.Institution}</p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div>
            {SkillsArray.map((outerArray, outerIndex) => {
              return (
                <div key={outerIndex}>
                  {outerArray.map((innerObject, innerIndex) => {
                    const skillDetail = innerObject[`SkillsUser ${innerIndex}`];
                    return <div key={innerIndex}>{skillDetail.Skills}</div>;
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
