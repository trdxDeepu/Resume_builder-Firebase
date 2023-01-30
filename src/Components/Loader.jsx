import React from "react";
import HashLoader from "react-spinners/HashLoader";
const Loader = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <HashLoader
          color="#000000"
          size={60}
          speedMultiplier={1}
          className="spinner border-2 border-gray-700 border-t-2 w-10 h-10"
        />
      </div>
    </>
  );
};

export default Loader;
