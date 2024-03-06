import React from "react";
import anim from "../../assets/notauthorized.json";
import Lottie from "lottie-react";

const NotAuthorized = () => {
  return (
    <div className="min-h-[calc(100vh-150px)] py-10">
      <p className="text-center lg:text-4xl  -mb-20 lg:-mb-44">
        Not Authorized
      </p>

      <div className="lg:w-[60%] mx-auto relative">
        <Lottie animationData={anim}></Lottie>
      </div>
    </div>
  );
};

export default NotAuthorized;
