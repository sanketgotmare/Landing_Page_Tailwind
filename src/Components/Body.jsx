import React from "react";

const Body = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center">
        <img src="./assets/Blue-Shape.svg" alt="1st" className="-rotate-[45deg] h-64"/>
        <img src="./assets/Pink-Shape.svg" alt="2nd" className="absolute -rotate-[30deg] h-64"/>
        <img src="./assets/Purple-Shape.svg" alt="3rd" className="absolute -rotate-[15deg] h-64"/>
        <img src="./assets/Hero-Model.png" alt="hero" className="absolute h-64"/>
      </div>
      <div>
        <h1 className="text-5xl font-bold font-playfair leading-tight">Host your website in less than 5 minutes</h1>
        <p className="font-lato text-gray-400">with Hoster , get your website up and running in no less than 5 minuteswith the most competative pricing packages</p>
        <form action="" className="flex flex-col gap-4">
          <input type="email" placeholder="Enter email address" className="rounded-md px-4 py-3 placeholder:text-gray-400"/>
          <button className="rounded-md px-4
          py-3 bg-blue-400 hover:bg-blue-600 text-white">join waitlist</button>
        </form>
        <div className="flex gap-2">
          <img src="./assets/Checkmark.svg" alt="check" />
          <p className="font-lato text-gray-400">No spam, ever.Unsubscribe.anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
