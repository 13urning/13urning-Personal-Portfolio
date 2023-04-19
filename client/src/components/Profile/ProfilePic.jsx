import React from "react";
import regor from "../Assets/regoravatar.png";

export default function ProfilePic() {
  return (
    <div className=" bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mx-auto my-4 overflow-hidden mt-20 md:h-96 md:w-96">
      <img
        src={regor}
        className="object-cover w-80 h-80 md:h-96 md:w-96"
        alt=""
      />
    </div>
  );
}
