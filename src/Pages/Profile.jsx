import React from "react";
import { Form } from "antd";
import { Tabs } from "antd";
import Personal from "../Components/Personal";

const { TabPane } = Tabs;

const Profile = () => {
  return (
    <div className="container shadow-smz">
      <div className="mt-5 space-x-24">
        <h2 className="font-extrabold text-center uppercase underline hover:text-slate-700 ">
          Update Profile{" "}
        </h2>
        <br />
        
        <Form className=" text-blue-600 uppercase font-semibold " layout="vertical"  onFinish={()=>{}}>
          
        <Tabs defaultActiveKey="1">
            <TabPane tab="Personal Info" key="1">
              <Personal />
            </TabPane>
            <TabPane tab="Skills and Education" key="2">
             
            </TabPane>
            <TabPane tab="Experience / Projects" key="3">
             
            </TabPane>
          </Tabs>
        
         
        </Form>
      </div>
    </div>
  );
};

export default Profile;
