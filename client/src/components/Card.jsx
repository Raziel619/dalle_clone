import React from "react";
import { download } from "../assets";
import { downloadImage } from "../utils";

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className="relative rounded-xl group shadow-card hover:shadow-cardhover card">
      <img
        className="object-cover w-full h-auto rounded-xl"
        src={photo}
        alt={prompt}
      />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
        <p className="overflow-y-auto text-sm text-white">{prompt}</p>
      </div>
    </div>
  );
};

export default Card;
