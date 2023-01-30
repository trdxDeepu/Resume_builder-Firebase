import React, { useEffect, useState } from "react";
import { db } from "../Firebase";
import "../Resources/template2.css";
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

  return (
    <>
      <div className="resume-box">
        <div className="left-section">
          <img src="src/assets/" alt="" />
        </div>
        <div className="right-section"></div>
        <div className="clearfix"></div>
      </div>
    </>
  );
};

export default Template2;
