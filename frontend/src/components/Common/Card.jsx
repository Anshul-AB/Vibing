import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, description, imgUrl, isLibraryRoute, playlistId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isLibraryRoute) {
      navigate("/playlist/" + playlistId);
    }
  };

  

  return (
    <>
      <div
        className={`w-full flex flex-col bg-black bg-opacity-40 text-white py-5 px-2 rounded-md 
        hover:shadow-[0_8px_10px_rgba(255,_255,_255,_0.5)] hover:scale-95 
         `}
        onClick={handleClick}
      >
        <div className="relative overflow-hidden rounded-md h-40 w-full">
          <img
            className="object-cover w-full h-full "
            src={imgUrl}
            alt="thumbnail"
          />
        </div>
        <span className=" text-sm pt-1 pb-1">{title}</span>
        <span className=" text-xs ">{description}</span>
      </div>
    </>
  );
};

export default Card;
