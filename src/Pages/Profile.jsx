import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { Textarea } from "@chakra-ui/react";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { getAuth } from "firebase/auth";
import { db } from "../firebase";
import { setDoc, doc, collection, addDoc } from "firebase/firestore";
import { Form } from "antd";
import { AiFillDelete, AiOutlinePlusSquare } from "react-icons/ai";
import { getDatabase, set, ref } from "firebase/database";
import { toast } from "react-toastify";
function Profile() {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  //Personal Information
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    linkeden: "",
    github: "",
    carrerObjective: "",
    address: "",
  });

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  //Details of Education

  const userTemplate = {
    qualification: "",
    institution: "",
    year: "",
    percentage: "",
  };
  const [educationUser, setEducationUser] = useState([userTemplate]);
  const addUser = () => {
    setEducationUser([...educationUser, userTemplate]);
  };

  const removeUser = (index) => {
    const removedUser = [...educationUser];
    removedUser.splice(index, 1);
    setEducationUser(removedUser);
  };

  const handleEducationChange = (e, index) => {
    const updatedUser = [...educationUser];
    updatedUser[index][e.target.name] = event.target.value;
    setEducationUser(updatedUser);
  };

  // Details of Skills

  const userTemp = {
    skills: "",
    rating: " ",
  };

  const [skills, setSkills] = useState([userTemp]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(personalInfo);

    const auth = getAuth();
    const user = auth.currentUser;
    // const database = getDatabase();
    const personalInfoCopy = { ...personalInfo };

    const educationCopy = educationUser.map((edu, index) => {
      return {
        [`educationUser ${index}`]: {
          qualification: edu.qualification,
          percentage: edu.percentage,
          institution: edu.institution,
          range: edu.year,
        },
      };
    });

    try {
      if (user) {
        console.log(user.displayName);

        await setDoc(doc(db, "users", user.uid), {
          Personal: personalInfoCopy,
          Education: educationCopy,
        });

        toast.success(" 🙌🙌 Profile Updated SuccessFully");
        console.log(user.uid);
      }
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <>
      <Box className="m-3 p-4 shadow-2xl   uppercase font-serif ">
        <Tabs index={tabIndex} onChange={handleTabsChange}>
          <Form
            onSubmit={handleSubmit}
            className=" grid gap-y-2 
          w-3/4 relative inset-6 inset-x-20 inset-y-4 left-32"
          >
            <TabList className="flex m-2 gap-16   ">
              <Tab>Personal Information </Tab>
              <Tab>Education and Skills</Tab>
              <Tab>Three</Tab>
            </TabList>
            <TabPanels>
              <TabPanel className="gap-6">
                <FormControl isRequired id="firstName">
                  <FormLabel className="m-1 p-1">First name</FormLabel>
                  <Input
                    placeholder="First name"
                    value={personalInfo.firstName}
                    onChange={handlePersonalInfoChange}
                    name="firstName"
                  />
                  <FormErrorMessage>First name is required</FormErrorMessage>
                </FormControl>
                <FormControl isRequired id="lastName">
                  <FormLabel className="m-1 p-1">Last name</FormLabel>
                  <Input
                    placeholder="Last name"
                    value={personalInfo.lastName}
                    onChange={handlePersonalInfoChange}
                    name="lastName"
                  />
                  <FormErrorMessage>Last name is required</FormErrorMessage>
                </FormControl>
                <FormControl isRequired id="email">
                  <FormLabel className="m-1 p-1">Email address</FormLabel>
                  <Input
                    type="email"
                    placeholder="Email address"
                    colorScheme="yellow"
                    value={personalInfo.email}
                    onChange={handlePersonalInfoChange}
                    name="email"
                  />

                  <FormErrorMessage>Email is required</FormErrorMessage>
                </FormControl>
                <FormControl isRequired id="mobileNumber">
                  <FormLabel className="m-1 p-1">Mobile Number </FormLabel>
                  <Input
                    placeholder="Email address"
                    value={personalInfo.mobileNumber}
                    onChange={handlePersonalInfoChange}
                    name="mobileNumber"
                  />
                  <FormErrorMessage>Mobile number is required</FormErrorMessage>
                </FormControl>
                <FormControl id="github">
                  <FormLabel className="m-1 p-1">Github</FormLabel>
                  <Input
                    placeholder="Github"
                    value={personalInfo.github}
                    onChange={handlePersonalInfoChange}
                    name="github"
                  />
                </FormControl>
                <FormControl id="linkeden">
                  <FormLabel className="m-1 p-1"> Linkedin </FormLabel>
                  <Input
                    placeholder="Linkedin"
                    colorScheme="linkedin"
                    value={personalInfo.linkeden}
                    onChange={handlePersonalInfoChange}
                    name="linkeden"
                  />
                </FormControl>
                <FormControl id="carrerObjective">
                  <FormLabel className="m-1 p-1"> Carrer Objective</FormLabel>
                  <Textarea
                    placeholder="Carrer Objective"
                    value={personalInfo.carrerObjective}
                    onChange={handlePersonalInfoChange}
                    name="carrerObjective"
                  />
                </FormControl>
                <FormControl id="address ">
                  <FormLabel className="m-1 p-1"> Address </FormLabel>
                  <Textarea
                    placeholder="Address "
                    value={personalInfo.address}
                    onChange={handlePersonalInfoChange}
                    name="address"
                  />
                </FormControl>
              </TabPanel>
              <TabPanel className="font-serif">
                <span>Education</span>

                {educationUser.map((user, index) => (
                  <div className="flex space-x-6 m-4" key={index}>
                    <Input
                      placeholder="Qualifications"
                      htmlSize={20}
                      width="auto"
                      name="qualification"
                      value={user.qualification}
                      onChange={(e) => handleEducationChange(e, index)}
                    />
                    <Input
                      placeholder="Institution"
                      htmlSize={26}
                      width="auto"
                      name="institution"
                      value={user.institution}
                      onChange={(e) => handleEducationChange(e, index)}
                    />
                    <Input
                      placeholder=" Passing Year"
                      htmlSize={26}
                      width="auto"
                      name="year"
                      value={user.year}
                      onChange={(e) => handleEducationChange(e, index)}
                    />
                    <Input
                      placeholder="Percentage"
                      htmlSize={26}
                      width="auto"
                      name="percentage"
                      value={user.percentage}
                      onChange={(e) => handleEducationChange(e, index)}
                    />
                    <div className=" right-3 flex space-x-10 text-2xl m-2">
                      <AiOutlinePlusSquare
                        className="text-blue-500 hover:text-blue-700 active:shadow-md active:text-blue-800 "
                        onClick={addUser}
                      />
                      <AiFillDelete
                        className="text-orange-500 hover:text-orange-600 active:text-orange-700 active:shadow-xl "
                        onClick={() =>
                          index == 0
                            ? toast.error("😡😡😡😡")
                            : removeUser(index)
                        }
                      />
                    </div>
                  </div>
                ))}

                <div>
                  <span>Skills</span>
                  <div className="flex space-x-6 m-4">
                    <Input
                      placeholder="Skill"
                      htmlSize={20}
                      width="auto"
                      name="skill"
                    />
                    <Input
                      placeholder="Rating"
                      htmlSize={20}
                      width="auto"
                      name="skill"
                    />
                    <div className=" right-3 flex space-x-10 text-2xl m-2">
                      <AiOutlinePlusSquare
                        className="text-blue-500 hover:text-blue-700 active:shadow-md active:text-blue-800 "
                        onClick={addUserSkills}
                      />
                      <AiFillDelete
                        className="text-orange-500 hover:text-orange-600 active:text-orange-700 active:shadow-xl "
                        onClick={() =>
                          index == 0
                            ? toast.error("😡😡😡😡")
                            : removeUserSkills(index)
                        }
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
            <Button type="submit" onClick={handleSubmit} colorScheme="blue">
              {" "}
              Next me{" "}
            </Button>
          </Form>
        </Tabs>
      </Box>
    </>
  );
}

export default Profile;
