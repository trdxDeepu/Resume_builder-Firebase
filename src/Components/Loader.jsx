import React from "react";
import HashLoader from "react-spinners/HashLoader";
const Loader = () => {
  return (
    <>
      <div className="absolute bg-transparent bg-opacity-50 flex items-center justify-center left-0 right-0 top-0 bottom-0 z-50 ">
        <HashLoader color="#36d7b7" size={60} speedMultiplier={1} />
      </div>
    </>
  );
};

export default Loader;
