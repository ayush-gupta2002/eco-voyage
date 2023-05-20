import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addItem } from "../redux/summaryRedux";

const vehicleType = [
  "Car-Type-Mini",
  "Car-Type-Supermini",
  "Car-Type-LowerMedium",
  "Car-Type-UpperMedium",
  "Car-Type-Executive",
  "Car-Type-Luxury",
  "Car-Type-Sports",
  "Car-Type-4x4",
  "Car-Type-MPV",
  "Car-Size-Small",
  "Car-Size-Medium",
  "Car-Size-Large",
  "Car-Size-Average",
  "Motorbike-Size-Small",
  "Motorbike-Size-Medium",
  "Motorbike-Size-Large",
  "Motorbike-Size-Average",
  "Bus-LocalAverage",
  "Bus-Coach",
  "Taxi-Local",
  "Train-National",
  "Train-Local",
  "Train-Tram",
];

function RoadForm() {
  const [vehicle, setVehicle] = useState("");
  const [distance, setDistance] = useState(0);
  const [unit, setUnit] = useState("km");
  const [fuel, setFuel] = useState("Petrol");
  const dispatch = useDispatch();

  const renderedVehicleTypes = vehicleType.map((type) => {
    return <option>{type}</option>;
  });

  console.log(vehicle, unit, fuel, distance);

  const handleAdd = () => {
    const toAdd = {
      type: "road",
      vehicle_type: vehicle,
      distance_unit: unit,
      fuel_type: fuel,
      distance: distance,
    };
    dispatch(addItem(toAdd));
  };

  return (
    <div className="mx-6 my-4">
      <div className="flex mt-4">
        <div className="text-gray-500 font-semibold mb-2 my-auto">
          Vehicle Type
        </div>
        <div className="flex ml-2 w-fit border-2 p-2 text-gray-600 bg-white">
          <select
            onChange={(e) => {
              setVehicle(e.target.value);
            }}
            className="cursor-pointer focus:outline-none w-fit"
          >
            {renderedVehicleTypes}
          </select>
        </div>
      </div>
      <div className="flex mt-4">
        <div className="text-gray-500 font-semibold my-auto">
          Distance Travelled
        </div>
        <input
          value={distance}
          onChange={(e) => {
            setDistance(e.target.value);
          }}
          type="number"
          className="border-2 focus:outline-none text-gray-500 p-2 ml-2"
        ></input>
      </div>
      <div className="flex mt-4">
        <div className="text-gray-500 font-semibold mb-2 my-auto">
          Distance Unit
        </div>
        <div className="flex ml-2 w-1/3 border-2 p-2 text-gray-600 bg-white">
          <select
            onChange={(e) => {
              setUnit(e.target.value);
            }}
            className="w-full focus:outline-none cursor-pointer"
          >
            <option>km</option>
            <option>mi</option>
          </select>
        </div>
      </div>
      <div className="flex mt-4">
        <div className="text-gray-500 font-semibold mb-2 my-auto">
          Fuel Type
        </div>
        <div className="flex ml-2 w-1/3 border-2 p-2 text-gray-600 bg-white">
          <select
            onChange={(e) => {
              setFuel(e.target.value);
            }}
            className="w-full focus:outline-none cursor-pointer"
          >
            <option>Petrol</option>
            <option>Diesel</option>
            <option>Unknown</option>
          </select>
        </div>
      </div>
      <button
        onClick={() => {
          handleAdd();
        }}
        className="w-full bg-teal-500 mt-4 p-2 font-semibold text-white rounded-lg hover:bg-teal-600 duration-500"
      >
        Add
      </button>
    </div>
  );
}

export default RoadForm;
