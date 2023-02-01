import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useNavigate, useParams } from "react-router-dom";
import DefaultLayout from "../Components/DefaultLaout";
import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";
import Template3 from "../Templates/Template3";

import { Button } from "antd";
function Templates1() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const params = useParams();
  const navigate = useNavigate();
  const gettemplate = () => {
    switch (params.id) {
      case "1": {
        return <Template2 />;
      }
      case "2": {
        return <Template1 />;
      }
      case "3": {
        return <Template3 />;
      }
    }
  };
  return (
    <>
      <div className="d-flex justify-content-end my-5 mx-5 ">
        <Button className="back-btn" onClick={() => navigate("/temp")}>
          Back
        </Button>
        <Button className="mx-5" onClick={handlePrint}>
          Print
        </Button>
      </div>
      <div ref={componentRef}>{gettemplate()}</div>
    </>
  );
}

export default Templates1;
