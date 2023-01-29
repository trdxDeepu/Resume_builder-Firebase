import React, { useEffect, useState } from "react";
import { db } from "../Firebase";
import { getAuth } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
const Template2 = () => {
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
  console.log("Education => ", educationArray);
  const SkillsArray = Object.entries(skills).map(([key, value]) => value);
  console.log("skill array is : ", SkillsArray);
  const experienceArray = Object.entries(experience).map(
    ([key, value]) => value
  );
  console.log("Experience array is : ", experienceArray);

  const projectArray = Object.entries(projects).map(([key, value]) => value);
  console.log("Project is  : ", projectArray);

  return(
    <>
    <div className="resume_wrapper">
        
    </div>
    </>
  )
};

export default Template2;
