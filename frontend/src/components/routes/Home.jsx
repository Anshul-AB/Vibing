import React, { useState } from "react";
import Sidebar from "../Common/Sidebar";
import Navbar from "../Common/Navbar";
import Playlist from "../Common/Playlist";
const cardsData = require('../../Api/api');

const Home = () => {
  // const [myArray , setMyArray]= useState([{
  //   name: "Open Day Event",
  //   date: "July 7",
  //   topics: [
  //     {
  //       title: "Engineering",
  //       id: 1,
  //       description: "some text here",
  //       programs: [
  //         {
  //           title: "Some title",
  //           id: 1,
  //           description: "Some description",
  //           price: 7,
  //         },
  //         {
  //           title: "Some title",
  //           id: 2,
  //           description: "Some description",
  //           price: 15,
  //         },
  //         {
  //           title: "Some title",
  //           id: 3,
  //           description: "Some description",
  //           price: 0,
  //         },
  //         {
  //           title: "Some title",
  //           id: 4,
  //           description: "Some description",
  //           price: 5,
  //         },
  //         {
  //           title: "Some title",
  //           id: 5,
  //           description: "Some description",
  //           price: 19,
  //         },
  //       ],
  //     },
  //     {
  //       title: "History",
  //       id: 2,
  //       description: "some text here",
  //       programs: [
  //         {
  //           title: "Some title",
  //           id: 1,
  //           description: "Some description",
  //           price: 30,
  //         },
  //         {
  //           title: "Some title",
  //           id: 2,
  //           description: "Some description",
  //           price: 30,
  //         },
  //         {
  //           title: "Some title",
  //           id: 3,
  //           description: "Some description",
  //           price: 30,
  //         },
  //       ],
  //     },
  //     {
  //       title: "English",
  //       id: 3,
  //       description: "some text here",
  //       programs: [
  //         {
  //           title: "Some title",
  //           id: 1,
  //           description: "Some description",
  //           price: 30,
  //         },
  //         {
  //           title: "Some title",
  //           id: 2,
  //           description: "Some description",
  //           price: 30,
  //         },
  //         {
  //           title: "Some title",
  //           id: 3,
  //           description: "Some description",
  //           price: 30,
  //         },
  //       ],
  //     },
  //   ],
  // }])


  // console.log("121212", myArray[0]?.topics[0]?.programs[0]?.title)

//  const newArray = myArray.map((item)=>{
//   return{
//     ...item, topics:item.topics.map((events)=>{
//       return{
//         ...events, programs: events.programs.map((pro) => {
//           if(pro.price >= 7){

//             return {
//               ...pro , test: pro.title + ' ' + pro?.description
//             }
//           }
//           else{
//             return{
//               ...pro
//             }
//           }
//         })
//       }
//     })
//   }
// })

// console.log("newArray---------------" ,newArray);

  return (
    <div >
      <div className="min-h-screen w-screen grid grid-cols-6">
        {/* left */}
        <div className="bg-black text-white col-span-1 top-0 p-2">
          <Sidebar />
        </div>

        {/* right */}
        <div className="col-span-5 overflow-y-auto bg-gradient-to-b from-black to-gray-800">
          {/* top */}
          <div className="h-1/10 p-3">
            <Navbar />
          </div>

          {/* main */}
          <div className="flex flex-col ">
            <Playlist titlePlaylist='focus' cardsData={cardsData.focusCardsData}/>
            <Playlist titlePlaylist='spotify' cardsData={cardsData.spotifyPlaylistsCardData}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
