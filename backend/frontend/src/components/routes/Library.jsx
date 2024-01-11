import React, { useEffect, useState } from "react";
import LoggedInContainer from "../../Container/LoggedInContainer";
import Card from "../Common/Card";
import { makeAuthenticatedGETRequest } from "../../utils/serverHelpers";

const Library = () => {
  const [myPlaylists, setMyPlaylists] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const response = await makeAuthenticatedGETRequest(
        "/playlist/get/myplaylists"
      );
      setMyPlaylists(response.data);
      // console.log(response.data);
    };
    getdata();
  }, []);

  return (
    <LoggedInContainer>
      <div className="text-green-500 text-xl font-semibold pb-5">My Playlists</div>
      <div className="grid grid-cols-5 gap-x-4 p-4 ">
        {myPlaylists.map((item) => (
          <Card
            key={JSON.stringify(item)}
            title={item.name}
            description=""
            imgUrl={item.thumbnail}
            isLibraryRoute
            playlistId={item._id}
          />
        ))}
      </div>
    </LoggedInContainer>
  );
};

export default Library;
