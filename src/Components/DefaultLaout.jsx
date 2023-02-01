import React from "react";
import "../Resources/defaultlaout.css";

const DefaultLayout = (props) => {
  return (
    <div>
      <div className="layout">
        <div className="header"></div>
        <div className="content" style={{ overflow: "scroll" }}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
