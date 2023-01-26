// import React, { createContext, useEffect, useState } from "react";

// export const ResumeContext = createContext();

// export const ResumeProvider = ({ children }) => {
//   const [resume, setResume] = useState({
//     personalInfo: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       github: "",
//       linkden: "",
//       address: "",
//     },
//     workExperience: [
//       {
//         title: "",
//         company: "",
//         startDate: "",
//         endDate: "",
//         description: "",
//       },
//     ],
//     education: [
//       {
//         degree: "",
//         school: "",
//         startDate: "",
//         endDate: "",
//         description: "",
//       },
//     ],
//     skills: [],
//   });

//   // setResume({
//   //   ...resume,
//   //   personalInfo: {
//   //     firstName: "depu",
//   //   },
//   // });

//   // console.log(resume.personalInfo.firstName);

//   // useEffect(() => {
//   //   console.log("Resume state has been updated:", resume);
//   // }, [resume]);

//   return (
//     <ResumeContext.Provider value={{ resume, setResume }}>
//       {children}
//     </ResumeContext.Provider>
//   );
// };
