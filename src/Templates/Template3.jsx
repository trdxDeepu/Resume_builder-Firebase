import React from "react";

const Template3 = () => {
  return (
    <div>
      <div className=" m-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 bg-dark text-white text-center py-3">
              <div className="header-left">
                <Image
                  borderRadius="full"
                  boxSize="150px"
                  src={Luffy}
                  alt="Resume_image"
                  className="img-thumbnail rounded-circle mb-2"
                />
                <h1 className="display-5 text-uppercase text-white-50">
                  {user.firstName} {user.lastName}
                </h1>
                <h1 className="lead text-uppercase text-white-50 mb-4">
                  Front end{" "}
                </h1>
              </div>
              <h5 className="text-uppercase bg-white text-dark py-2 rounded-pill">
                Contacts
              </h5>
              <ul className="list-unstyled text-white-50 ml-5 py-2 text-left">
                <li className="list-item">
                  {" "}
                  <AiFillMobile />
                  {user.mobileNumber}
                </li>
                <li className="list-item">
                  <AiOutlineGithub /> {user.github}
                </li>
                <li className="list-item">
                  <FaLinkedinIn /> {user.linkden}
                </li>
                <li className="list-item">
                  <FaEnvelopeOpen /> {user.email}
                </li>
                <li className="list-item">
                  <FaMapMarker /> {user.address}
                </li>
              </ul>

              <div>
                <h5 className="text-uppercase bg-white text-dark py-2 rounded-pill">
                  Skills
                </h5>
                {user.skills.map((skill) => {
                  return (
                    <ul className="list text-white-50 ml-5 py-2 text-left text-captalize">
                      <li className="list-item">{skill.technology}</li>
                    </ul>
                  );
                })}
              </div>

              <div>
                <h5 className="text-uppercase bg-white text-dark py-2 rounded-pill">
                  Education
                </h5>
                {user.education.map((edu) => {
                  return (
                    <ul className="list text-white-50 ml-5 py-2 text-left text-captalize">
                      <li className="list-item">
                        {edu.range} <br /> {edu.qualification} with{" "}
                        {edu.percentage}% in <span>{edu.institution}</span>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="col-lg-8 bg-light text-dark py-4 px5">
            <div className="header-right">
              <h4 className="text-uppercase">Profile</h4>
              <hr />
              <p>{user.carrierObjective}</p>
            </div>
            <div>
              <h4 className="text-uppercase">Experience</h4>
              <hr />
              {user.experience.map((exp) => {
                return (
                  <ul className="list">
                    <li className="list-item">
                      <h5 className="display-6 text-uppercase">
                        {exp.position}
                      </h5>
                      <h6 className="text-uppercase text-black-50">
                        {exp.company}
                      </h6>
                      <p>{exp.description}</p>
                    </li>
                  </ul>
                );
              })}
            </div>
            <div>
              <h4 className="text-uppercase">Interests</h4>
              <hr />
              {user.intrest.map((intr) => {
                return (
                  <ul className="list">
                    <li className="list-item">
                      <h6 className="text-sm text-uppercase text-dark-50">
                        {intr.intrest}
                      </h6>
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template3;
