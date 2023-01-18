import React from "react";
import { useState } from 'react';
import { Form } from "antd";
import { Input } from "antd";
import { AiFillGithub ,
   AiFillLinkedin, 
   AiOutlineMobile,
   AiOutlineMail,
   AiOutlineUser
  } 
from "react-icons/ai";
import { toast } from "react-toastify";
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import {CiLocationOn} from 'react-icons/ci'


const { TextArea } = Input;

const Personal = () => {

  
  
  const props = {
    name: 'file',
    accept:".png, .jpeg, ",
    action: '',
        headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
      toast.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        toast.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div>
      <div className="row ">
        <div className="m-2 p-2" > 
        <p className="mb-2  font-serif" >Image</p>
        <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
  </div>
        <div className="col-md-4">
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[{ required: true }]}
          >
            <Input className="rounded-lg shadow-md" placeholder="First Name" />
            <AiOutlineUser className="absolute right-3 top-3 w-10 h-5 "/>
          </Form.Item>
        </div>
        <div className="col-md-4">
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ required: true }]}
          >
            <Input className="rounded-lg shadow-md" placeholder="Last Name"/>
            <AiOutlineUser className="absolute right-3 top-3 w-10 h-5 "/>
          </Form.Item>
        </div>
        <div className="col-md-4">
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input className="rounded-lg shadow-md" placeholder="Email"/>
            <AiOutlineMail className="absolute right-3 top-3 w-10 h-5 "/>
          </Form.Item>
        </div>
        <div className="col-md-4">
          <Form.Item
            name="mobileNumber"
            label="Mobile Number"
            rules={[{ required: true }]}
          >
            <Input className="rounded-lg shadow-md" placeholder="Mobile Number"/>
            <AiOutlineMobile className="absolute right-3 top-3 w-10 h-5 "/>
          </Form.Item>
        </div>
        <div className="col-md-4">
        
          <Form.Item name="github" label="Github" 
           rules={[{ required: true }]} > 
          
            <Input className="rounded-lg shadow-md " 
            placeholder="Github Link"  />
            <AiFillGithub className="absolute right-3 top-3 w-10 h-5 "/>
          </Form.Item>
        </div>
        <div className="col-md-4">
          <Form.Item
            name="linkeden"
            label="Linkeden"
            rules={[{ required: true }]}
          >
            
            <Input className="rounded-lg shadow-md" placeholder="Linkden Link" />
            <AiFillLinkedin className="absolute right-3 top-3 w-10 h-5 "/>
          </Form.Item>
        </div>

        <div className="col-md-12">
          <Form.Item
            name="carrierObjective"
            label="Carrier Objective"
            rules={[{ required: true }]}
          >
            <TextArea className="rounded-lg shadow-md" placeholder="Carrer Objective"/>
          </Form.Item>
        </div>
        <div className="col-md-12">
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true }]}
          >
            <TextArea className="rounded-lg shadow-md"  placeholder="Address"/>
            <CiLocationOn className="absolute right-3 top-3 w-10 h-5 "/>
          </Form.Item>
        </div>
      </div>
    </div>
  );
};

export default Personal;
