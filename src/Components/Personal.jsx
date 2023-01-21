import React, { useState } from "react";
import { Form } from "antd";
import { Input } from "antd";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMobile,
  AiFillMail,
  AiOutlineUser,
} from "react-icons/ai";
import { toast } from "react-toastify";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { CiLocationOn } from "react-icons/ci";

const { TextArea } = Input;

const Personal = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    github: "",
    linkeden: "",
    carrierObjective: "",
    address: "",
  });

  const {
    firstName,
    lastName,
    email,
    mobileNumber,
    github,
    linkeden,
    carrierObjective,
    address,
  } = formData;

  const props = {
    name: "file",
    accept: ".png, .jpeg, ",
    action: "",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        toast.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        toast.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div>
      <div className="row ">
        <div className="m-2 p-2">
          <p className="mb-2  font-serif">Image</p>
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </div>
        <div className="col-md-4">
          <Form.Item
            name="firstName"
            label="First Name"
            id="firstName"
            value={firstName}
            rules={[{ required: true }]}
          >
            <Input className="rounded-lg shadow- text-gray-500" 
            placeholder="First Name" />
            <AiOutlineUser className="absolute right-3 top-3 w-10 h-5 " />
          </Form.Item>
        </div>
        <div className="col-md-4">
          <Form.Item
            name="lastName"
            label="Last Name"
            id="lastName"
            value={lastName}
            rules={[{ required: true }]}
          >
            <Input className="rounded-lg shadow-md text-gray-500" 
            placeholder="Last Name" />
            <AiOutlineUser className="absolute right-3 top-3 w-10 h-5 " />
          </Form.Item>
        </div>
        <div className="col-md-4">
          <Form.Item
            name="email"
            label="Email address"
            id="email"
            value={email}
            rules={[{ required: true }]}
          >
            <Input className="rounded-lg shadow-md text-gray-500" 
            placeholder="Email" />
            <AiFillMail className="absolute right-3 top-3 w-10 h-5 " />
          </Form.Item>
        </div>
        <div className="col-md-4">
          <Form.Item
            name="mobileNumber"
            label="Mobile Number"
            id="mobileNumber"
            value={mobileNumber}
            rules={[{ required: true }]}
          >
            <Input
              className="rounded-lg shadow-md text-gray-500"
              placeholder="Mobile Number"
            />
            <AiFillMobile className="absolute right-3 top-3 w-10 h-5 " />
          </Form.Item>
        </div>
        <div className="col-md-4">
          <Form.Item
            name="github"
            label="Github"
            id="github"
            value={github}
            rules={[{ required: true }]}
          >
            <Input
              className="rounded-lg shadow-md  text-gray-500"
              placeholder="Github Link"
            />
            <AiFillGithub className="absolute right-3 top-3 w-10 h-5 " />
          </Form.Item>
        </div>
        <div className="col-md-4">
          <Form.Item
            name="linkeden"
            label="Linkeden"
            id="linkden"
            value={linkeden}
            rules={[{ required: true }]}
          >
            <Input
              className="rounded-lg shadow-md text-gray-500 "
              placeholder="Linkden Link"
            />
            <AiFillLinkedin className="absolute right-3 top-3 w-10 h-5 " />
          </Form.Item>
        </div>

        <div className="col-md-12">
          <Form.Item
            name="carrierObjective"
           
            label="Carrier Objective"
            id="carrierObjective"
            value={carrierObjective}
            rules={[{ required: true }]}
          >
            <TextArea
              className="rounded-lg shadow-md text-gray-500"
              placeholder="Carrer Objective"
            />
          </Form.Item>
        </div>
        <div className="col-md-12">
          <Form.Item
            name="address"
            label="Address"
            id="address"
           
            value={address}
            rules={[{ required: true }]}
          >
            <TextArea
              className="text-gray-500 rounded-lg shadow-md font-medium"
              placeholder="Address "
            />
            <CiLocationOn className="absolute right-3 top-3 w-10 h-5 " />
          </Form.Item>
        </div>
      </div>
    </div>
  );
};

export default Personal;
