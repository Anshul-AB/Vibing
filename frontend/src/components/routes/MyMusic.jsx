import React, {  useEffect, useState } from "react";
import MyMusicCard from "../Common/MyMusicCard";
import { makeAuthenticatedGETRequest } from "../../utils/serverHelpers";
import LoggedInContainer from "../../Container/LoggedInContainer";

const MyMusic = () => {
  const [songData, setSongData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await makeAuthenticatedGETRequest("/song/mysongs");
        // console.log("API response:", response.data);

        if (!Array.isArray(response.data)) {
          console.error("API response is not an array");
          return;
        }
        setSongData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  return (
    <LoggedInContainer>
      {/* main */}
      {/* My Music */}
      <div className="p-5 cursor-pointer">
        <div className="text-red-500 text-xl font-semibold pb-5">My Songs</div>
        <div>
          {songData.map((item) => (
            <MyMusicCard
              key={JSON.stringify(item)}
              info={item}
              playSound={() => {}}
            />
          ))}
        </div>
      </div>
    </LoggedInContainer>
  );
};

export default MyMusic;
