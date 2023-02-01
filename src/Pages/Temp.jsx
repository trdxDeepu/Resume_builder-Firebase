import React from "react";
import DefaultLayout from "../Components/DefaultLaout";
import template1 from "../Resources/templat1.png";
import template from "../Resources/template.png";
import "./TemplateList.css";
import { useNavigate } from "react-router-dom";
import Template3 from '../Templates/Template3'
function Temp() {
  const navigate = useNavigate();
  const templates = [
    {
      title: "Simple Resume",
      image: template,
    },
    {
      title: "Highlighted Sections Resume",
      image: template1,
    },
    {
      title: "Highlighted Sections Resume",
      image: template1,
    },
  ];

  return (

      <div className="template-list">
        {templates.map((template, index) => {
          return (
            <div className="group template-item" key={index}>
              <img className="group image-container h-100" src={template.image} alt={template.title} />
              <div className="template-title top-50 absolute hidden group-hover:block">{template.title}</div>
              <button
                className="template-try-btn absolute top-80 hidden group-hover:block"
                onClick={() => navigate(`/templates/${index + 1}`)}
              >
                TRY
              </button>
              
            </div>
          );
        })}
      </div>
   
  );
}

export default Temp;
