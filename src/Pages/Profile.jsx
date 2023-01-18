import React, { useState } from "react";
import { Form } from "antd";
import { Tabs } from "antd";
import Personal from "../Components/Personal";
import SkillsEducation from "../Components/SkillsAndEducation";
import ExperienceProjects from "../Components/ExperienceProjec";
import { db } from "../Firebase";
import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const { TabPane } = Tabs;

const Profile = () => {


 

  return (
    <div className="container ">
      <div className="mt-5 space-x-24">
        <h2 className="font-extrabold text-center uppercase underline hover:text-slate-700 ">
          Update Profile
        </h2>
        <br />

        <Form
          className=" text-blue-600 uppercase font-semibold "
          layout="vertical"
          onFinish={() => {}}
        >
          <Tabs defaultActiveKey="2">
            <TabPane aria-button="1"  tab="Personal Info" key='1'>
              <Personal />
            </TabPane>
            <TabPane aria-button="2" tab="Skills and Education" key="2">
              <SkillsEducation />
            </TabPane>
            <TabPane className="tab3 4"  tab="Experience / Projects" key="3">
              <ExperienceProjects />
            </TabPane>
          </Tabs>
        </Form>
      </div>
      <div className="flex justify-around mt-4">
        <div className=" mx-14 left-6">
          {" "}
          <button class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Prev
          </button>
        </div>
        <div className=" ">
          {" "}
          <button
            class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={CHange}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
