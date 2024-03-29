import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Button, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";

import React, { useState } from "react";
import { Textarea } from "@chakra-ui/react";

import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { getAuth } from "firebase/auth";
import { db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { Form } from "antd";

import {
  AiFillDelete,
  AiOutlinePlusSquare,
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

import { toast } from "react-toastify";
import Loader from "../Components/Loader";
function Profile() {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  const auth = getAuth();

  //Personal Information
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const [showPrevious, setShowPrevious] = useState(false);

  const handleNextClick = () => {
    if (index < 3) {
      setIndex(index + 1);
      setShowPrevious(true);
    }
  };

  const handlePreviousClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
    if (index === 0) {
      setShowPrevious(false);
    }
  };

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

  // const [photo, setPhoto] = useState(null);
  // const handleFileSelect = (e) => {
  //   setPhoto(e.target.files[0]);
  // };

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });

    // if (e.target.files) {
    //   setPersonalInfo({ ...personalInfo, photos: e.target.files });
    // }
    // console.log(personalInfo);
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
    updatedUser[index][e.target.name] = e.target.value;
    setEducationUser(updatedUser);
  };

  // Details of Skills

  const userTemp = {
    skills: "",
    rating: "",
  };

  const [userSkills, setUserSkills] = useState([userTemp]);

  const addUserSkills = () => {
    setUserSkills([...userSkills, userTemp]);
  };

  const removeUserSkills = (index) => {
    const removedUser = [...userSkills];
    removedUser.splice(index, 1);
    setUserSkills(removedUser);
  };

  const handleSkillsChange = (e, index) => {
    const updatedUserSkills = [...userSkills];
    updatedUserSkills[index][e.target.name] = e.target.value;
    setUserSkills(updatedUserSkills);
  };

  //Details of Experience and Projects

  const userExpTemplate = {
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
  };

  const [userExp, setUserExp] = useState([userExpTemplate]);

  const addUserExp = () => {
    setUserExp([...userExp, userExpTemplate]);
  };

  const removeUserExp = (index) => {
    const removedUserExp = [...userExp];

    removedUserExp.splice(index, 1);

    setUserExp(removedUserExp);
  };

  const handleExpChange = (e, index) => {
    const updatedUserExp = [...userExp];
    updatedUserExp[index][e.target.name] = e.target.value;
    setUserExp(updatedUserExp);
  };

  //Projects

  const projectTemplate = {
    title: "",
    year: "",
    description: "",
  };

  const [userProject, setUserProject] = useState([projectTemplate]);

  const addUserProject = () => {
    setUserProject([...userProject, projectTemplate]);
  };

  const removedUserProject = (index) => {
    const removedUserProject = [...userProject];
    removedUserProject.splice(index, 1);
    setUserProject(removedUserProject);
  };

  const handleUserProject = (e, index) => {
    const updatedUserProject = [...userProject];
    updatedUserProject[index][e.target.name] = e.target.value;
    setUserProject(updatedUserProject);
  };

  const userInterestTemp = {
    interest: "",
  };

  const [userInterest, setUserInterest] = useState([userInterestTemp]);

  const addUserInterest = () => {
    setUserInterest([...userInterest, userInterestTemp]);
  };

  const removedUserInterest = (index) => {
    const removedUserInterest = [...userInterest];
    removedUserInterest.splice(index, 1);
    setUserInterest(removedUserInterest);
  };

  const handleChangeInterest = (e, index) => {
    const updatedUserInterest = [...userInterest];
    updatedUserInterest[index][e.target.name] = e.target.value;
    setUserInterest(updatedUserInterest);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    const personalInfoCopy = {
      ...personalInfo,
    };

    const education = educationUser.map((edu) => {
      return {
        Qualification: edu.qualification,
        Percentage: edu.percentage,
        Institution: edu.institution,
        Range: edu.year,
      };
    });

    const skills = userSkills.map((skill) => {
      return {
        Skills: skill.skills,
        Rating: skill.rating,
      };
    });

    const experience = userExp.map((exp) => {
      return {
        Company: exp.company,
        Position: exp.position,
        StartDate: exp.startDate,
        EndDate: exp.endDate,
        Description: exp.description,
      };
    });

    const projects = userProject.map((project) => {
      return {
        Title: project.title,
        Year: project.year,
        Description: project.description,
      };
    });

    const interests = userInterest.map((inter) => {
      return {
        Interest: inter.interest,
      };
    });

    try {
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          Personal: personalInfoCopy,
          Education: education,
          Skills: skills,
          Experience: experience,
          Projects: projects,
          Interest: interests,
        });
        toast.success("😊😊 Profile Updated Successfully    ");
      }
    } catch (error) {
      toast.error(" Not update  ");
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="   m-2 p-2 mt-4 container-fluid shadow-md  ">
        <Tabs index={index} onChange={setIndex}>
          <Form onSubmit={handleSubmit}>
            <TabList className="flex m-2 gap-16 font-serif text-2xl font-bold  ">
              <Tab>Personal Information </Tab>
              <Tab>Education and Skills</Tab>
              <Tab>Experience and Projects</Tab>
              <Tab>Others</Tab>
            </TabList>
            <TabPanels>
              <TabPanel className=" row  font-serif">
                <div className="col-md-4  text-uppercase  ">
                  <FormControl isRequired id="firstName">
                    <FormLabel className=" m-1 p-1 strong">
                      First name
                    </FormLabel>
                    <Input
                      placeholder="First name"
                      value={personalInfo.firstName}
                      onChange={handlePersonalInfoChange}
                      name="firstName"
                    />
                    <FormErrorMessage>First name is required</FormErrorMessage>
                  </FormControl>
                </div>
                <div className="col-md-4 text-uppercase">
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
                </div>
                <div className="col-md-4 text-uppercase">
                  <FormControl isRequired id="email">
                    <FormLabel className="m-1 p-1">Email address</FormLabel>
                    <InputGroup>
                      <InputLeftAddon children={<AiOutlineMail />} />
                      <Input
                        type="email"
                        placeholder="Email"
                        value={personalInfo.email}
                        onChange={handlePersonalInfoChange}
                        name="email"
                      />
                    </InputGroup>

                    <FormErrorMessage>Email is required</FormErrorMessage>
                  </FormControl>
                </div>
                <div className="col-md-4 text-uppercase">
                  <FormControl isRequired id="mobileNumber">
                    <FormLabel className="m-1 p-1">Mobile Number </FormLabel>
                    <InputGroup>
                      <InputLeftAddon children="+91" />
                      <Input
                        type="tel"
                        placeholder="Mobile Number"
                        value={personalInfo.mobileNumber}
                        onChange={handlePersonalInfoChange}
                        name="mobileNumber"
                      />
                    </InputGroup>
                    <FormErrorMessage>
                      Mobile number is required
                    </FormErrorMessage>
                  </FormControl>
                </div>
                <div className="col-md-4 text-uppercase">
                  <FormControl id="github">
                    <FormLabel className="m-1 p-1">Github</FormLabel>
                    <InputGroup>
                      <InputLeftAddon children={<AiFillGithub />} />
                      <Input
                        placeholder="Github"
                        value={personalInfo.github}
                        onChange={handlePersonalInfoChange}
                        name="github"
                      />
                    </InputGroup>
                  </FormControl>
                </div>
                <div className="col-md-4 text-uppercase">
                  <FormControl id="linkeden">
                    <FormLabel className="m-1 p-1"> Linkedin </FormLabel>
                    <InputGroup>
                      <InputLeftAddon children={<AiFillLinkedin />} />
                      <Input
                        placeholder="linkeden"
                        value={personalInfo.linkeden}
                        onChange={handlePersonalInfoChange}
                        name="linkeden"
                      />
                    </InputGroup>
                  </FormControl>
                </div>
                <div className="col-md-12 text-uppercase">
                  <FormControl id="carrerObjective">
                    <FormLabel className="m-1 p-1"> Carrer Objective</FormLabel>
                    <Textarea
                      placeholder="Carrer Objective"
                      value={personalInfo.carrerObjective}
                      onChange={handlePersonalInfoChange}
                      name="carrerObjective"
                    />
                  </FormControl>
                </div>
                <div className="col-md-12 text-uppercase">
                  <FormControl id="address ">
                    <FormLabel className="m-1 p-1"> Address </FormLabel>
                    <Textarea
                      placeholder="Address "
                      value={personalInfo.address}
                      onChange={handlePersonalInfoChange}
                      name="address"
                    />
                  </FormControl>
                </div>
              </TabPanel>
              <TabPanel className="font-serif text-lg">
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
                  {userSkills.map((skill, index) => (
                    <div className="flex space-x-6 m-4" key={index}>
                      <Input
                        placeholder="Skill"
                        htmlSize={20}
                        width="auto"
                        name="skills"
                        value={skill.skills}
                        onChange={(e) => handleSkillsChange(e, index)}
                      />
                      <Input
                        placeholder="Rating"
                        htmlSize={26}
                        width="auto"
                        name="rating"
                        value={skill.rating}
                        onChange={(e) => handleSkillsChange(e, index)}
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
                  ))}
                </div>
              </TabPanel>
              <TabPanel className="font-serif text-lg">
                <div>
                  <h5>
                    <span>Experience</span>
                  </h5>

                  {userExp.map((exp, index) => (
                    <div className="flex space-x-6 m-4" key={index}>
                      <Input
                        placeholder="Company "
                        htmlSize={20}
                        width="auto"
                        name="company"
                        value={exp.company}
                        onChange={(e) => handleExpChange(e, index)}
                      />
                      <Input
                        placeholder="Position"
                        htmlSize={26}
                        width="auto"
                        name="position"
                        value={exp.position}
                        onChange={(e) => handleExpChange(e, index)}
                      />

                      <Input
                        placeholder="Start Date"
                        type="date"
                        htmlSize={26}
                        width="auto"
                        name="startDate"
                        value={exp.startDate}
                        onChange={(e) => handleExpChange(e, index)}
                      />

                      <Input
                        placeholder="End Date"
                        type="daterange"
                        htmlSize={26}
                        width="auto"
                        name="endDate"
                        value={exp.endDate}
                        onChange={(e) => handleExpChange(e, index)}
                      />

                      <Input
                        placeholder="Description"
                        htmlSize={26}
                        width="auto"
                        name="description"
                        value={exp.description}
                        onChange={(e) => handleExpChange(e, index)}
                      />
                      <div className=" right-3 flex space-x-10 text-2xl m-2">
                        <AiOutlinePlusSquare
                          className="text-blue-500 hover:text-blue-700 active:shadow-md active:text-blue-800 "
                          onClick={addUserExp}
                        />
                        <AiFillDelete
                          className="text-orange-500 hover:text-orange-600 active:text-orange-700 active:shadow-xl "
                          onClick={() =>
                            index == 0
                              ? toast.error("😡😡😡😡")
                              : removeUserExp(index)
                          }
                        />
                      </div>
                    </div>
                  ))}

                  <span>Project </span>
                  {userProject.map((project, index) => (
                    <div className="flex space-x-6 m-4">
                      <Input
                        placeholder="Title"
                        htmlSize={20}
                        width="auto"
                        name="title"
                        value={project.title}
                        onChange={(e) => handleUserProject(e, index)}
                      />
                      <Input
                        placeholder="Year"
                        htmlSize={26}
                        width="auto"
                        name="year"
                        value={project.year}
                        onChange={(e) => handleUserProject(e, index)}
                      />
                      <div className="">
                        <Textarea
                          placeholder="Project Description"
                          htmlSize={40}
                          width={80}
                          name="description"
                          value={project.description}
                          onChange={(e) => handleUserProject(e, index)}
                        />
                      </div>

                      <div className=" right-3 flex space-x-10 text-2xl m-2">
                        <AiOutlinePlusSquare
                          className="text-blue-500 hover:text-blue-700 active:shadow-md active:text-blue-800 "
                          onClick={addUserProject}
                        />
                        <AiFillDelete
                          className="text-orange-500 hover:text-orange-600 active:text-orange-700 active:shadow-xl "
                          onClick={() =>
                            index == 0
                              ? toast.error("😡😡😡😡")
                              : removedUserProject(index)
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                {userInterest.map((inter, index) => (
                  <div className="flex space-x-6 m-4" key={index}>
                    <Input
                      placeholder="Interests"
                      htmlSize={20}
                      width="auto"
                      name="interests"
                      value={inter.interests}
                      onChange={(e) => handleChangeInterest(e, index)}
                    />

                    <div className=" right-3 flex space-x-10 text-2xl m-2">
                      <AiOutlinePlusSquare
                        className="text-blue-500 hover:text-blue-700 active:shadow-md active:text-blue-800 "
                        onClick={addUserInterest}
                      />
                      <AiFillDelete
                        className="text-orange-500 hover:text-orange-600 active:text-orange-700 active:shadow-xl "
                        onClick={() =>
                          index == 0
                            ? toast.error("😡😡😡😡")
                            : removedUserInterest(index)
                        }
                      />
                    </div>
                  </div>
                ))}
              </TabPanel>
            </TabPanels>
            <hr />
            <div className=" flex space-x-96 justify-around m-5 p-3">
              {index < 1 ? (
                <Button
                  variant="outline"
                  colorScheme="red"
                  className="float-left invisible"
                  onClick={handlePreviousClick}
                  leftIcon={<ArrowBackIcon />}
                >
                  Previous
                </Button>
              ) : (
                <Button
                  variant="outline"
                  colorScheme="red"
                  className="float-left"
                  onClick={handlePreviousClick}
                  leftIcon={<ArrowBackIcon />}
                >
                  Previous
                </Button>
              )}

              {index === 3 ? (
                <div className=" justify-center items-center">
                  <Button
                    type="submit"
                    onClick={handleSubmit}
                    colorScheme="blue"
                    className="content-center"
                  >
                    {" "}
                    Update Profile{" "}
                  </Button>
                </div>
              ) : (
                <div className="flex ">
                  <Button
                    colorScheme="red"
                    variant="outline"
                    rightIcon={<ArrowForwardIcon />}
                    onClick={handleNextClick}
                  >
                    Next
                  </Button>
                </div>
              )}
            </div>
          </Form>
        </Tabs>
      </div>
    </>
  );
}

export default Profile;
