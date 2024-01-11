import React from "react";
import Card from "./Card";

const Playlist = ({ titlePlaylist, cardsData }) => {
  return (
    <div>
      <div className="mx-5 w-full py-4 text-2xl text-white font-semibold">
        {titlePlaylist}
      </div>

      <div className="grid grid-cols-5 gap-x-4 p-4 ">
      {
        (cardsData.map((item, index) => {
          return (
              <Card
              key={index}
                title={item.title}
                description={item.description}
                imgUrl={item.imgUrl}
              />
              );
            }))
          }
          </div>
    </div>
  );
};

export default Playlist;
