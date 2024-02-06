import React, { useState } from "react";
import Input from "../Common/Input";
import CloudinaryUpload from "../Common/CloudinaryUpload";
import { makeAuthenticatedPOSTRequest } from "../../utils/serverHelpers";
import { useNavigate } from "react-router-dom";
import LoggedInContainer from '../../Container/LoggedInContainer'

const UploadSong = () => {
  const [name, setName] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [playlistUrl, setPlaylistUrl] = useState("");
  const [uploadedSongFilename, setUploadedSongFilename] = useState();
  const navigate = useNavigate();

  const submitSong = async () => {
    const data = { name, thumbnail, track: playlistUrl };
    const response = await makeAuthenticatedPOSTRequest("/song/create", data);
    if (response.err) {
      alert("Insufficient details to create song");
      return;
    }
    alert("success");
    navigate("/mymusic");
  };

  return (
    <LoggedInContainer>
      {/* main */}

      {/* upload form */}
      <div className="p-5 mx-10 ">
        <h1 className="text-white font-semibold text-2xl mb-5">
          Upload Your <span className="text-cyan-400"> Music</span>{" "}
        </h1>
        <div className="flex space-x-3 w-full">
          <Input
            type="text"
            label="Name"
            placeholder="Enter Song Name"
            value={name}
            setValue={setName}
            labelClassName={"text-white"}
            className={"bg-cyan-200 w-1/3"}
          />
          <Input
            type="text"
            label="Thumbnail"
            placeholder="Enter Thumbnail"
            value={thumbnail}
            setValue={setThumbnail}
            labelClassName={"text-white"}
            className={"bg-cyan-200 w-1/3"}
          />
          <div className="flex items-center justify-center pt-3 w-1/3">
            {uploadedSongFilename ? (
              <div className="bg-cyan-200 p-2 rounded-md hover:bg-cyan-300 w-full">
                {uploadedSongFilename.substring(0, 35)}...
              </div>
            ) : (
              <div className="bg-cyan-200 flex items-center justify-center rounded-md hover:bg-cyan-300 w-full">
                <CloudinaryUpload
                  setUrl={setPlaylistUrl}
                  setName={setUploadedSongFilename}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* submit button */}
      <div
        className="bg-cyan-400 w-1/3 flex items-center justify-center p-2 rounded-full cursor-pointer font-semibold mx-auto hover:bg-cyan-500"
        onClick={submitSong}
      >
        Submit Song
      </div>
    </LoggedInContainer>
  );
};

export default UploadSong;
