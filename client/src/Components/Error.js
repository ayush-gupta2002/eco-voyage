import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="min-h-screen h-full w-full flex">
      <div className="p-4 sm:p-0 sm:m-auto flex flex-col gap-4">
        <h1 className="font-semibold text-5xl text-gray-500 mx-auto">Oops!</h1>
        <h3 className="font-semibold text-2xl text-gray-700 mx-auto">
          Looks like our services are currently offline. Please try again after
          sometime.
        </h3>
        <Link className="w-fit mx-auto" to="/">
          <button className="p-2 bg-teal-500 text-white font-semibold w-fit mx-auto shadow-lg cursor-pointer hover:scale-105 duration-500">
            Back to homepage
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Error;
