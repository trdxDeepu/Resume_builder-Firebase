import React from "react";
import { Form } from "antd";
import { Tabs } from "antd";
import Personal from "../Components/Personal";
import SkillsEducation from "../Components/SkillsAndEducation";
import ExperienceProjects from "../Components/ExperienceProject";

const { TabPane } = Tabs;

const Profile = () => {
  return (
    <div className="container ">
      <div className="mt-5 space-x-24">
        <h1
          className="font-extrabold  text-center 
        uppercase underline 
        hover:text-slate-700 "
        >
          Update Profile
        </h1>
        <br />

        <Form
          className=" text-blue-600 uppercase font-semibold "
          layout="vertical"
          onFinish={() => {}}
        >
          <Tabs defaultActiveKey="1">
            <TabPane tab="Personal Info" key="1">
              <Personal />
            </TabPane>
            <TabPane tab="Skills and Education" key="2">
              <SkillsEducation />
            </TabPane>
            <TabPane tab="Experience / Projects" key="3">
              <ExperienceProjects />
            </TabPane>
          </Tabs>
        </Form>
      </div>
      <div className="flex justify-around mt-4">
        <div className=" ">
          {" "}
          <button
            className=" bg-blue-600 hover:bg-blue-700
           text-white font-bold py-2 px-4 
           border font-serif border-blue-700 
           rounded-lg"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;