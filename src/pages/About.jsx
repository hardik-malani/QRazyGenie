import React from "react";
import ReactPlayer from 'react-player/youtube'


export default function About() {
  return (
    <div className="bg-gray-300 h-screen min-h-[100%] w-full flex flex-col justify-center items-center space-y-10">
      <span className="text-2xl font-semibold underline">Video Demo</span>
      <ReactPlayer url='https://youtu.be/AispB2upUks?si=Q9LgAvt0qO5dje8C' controls='true' />
    </div>
  );
}
