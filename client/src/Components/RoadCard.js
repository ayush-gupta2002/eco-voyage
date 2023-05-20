import React from "react";
import FieldValue from "./FieldValue";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/summaryRedux";
import { BsFillTaxiFrontFill } from "react-icons/bs";

function RoadCard({ travel, index }) {
  const dispatch = useDispatch();
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg min-w-[400px] overflow-x-scroll">
      <div className="flex w-full justify-between">
        <BsFillTaxiFrontFill className="text-sm text-gray-400"></BsFillTaxiFrontFill>
        <ImCross
          className="text-sm cursor-pointer text-gray-400 hover:text-gray-700 duration-500"
          onClick={() => {
            dispatch(removeItem(index));
          }}
        ></ImCross>
      </div>
      <FieldValue field="Vehicle Type" value={travel.vehicle_type}></FieldValue>
      <FieldValue field="Distance" value={travel.distance}></FieldValue>
      <FieldValue field="Unit" value={travel.distance_unit}></FieldValue>
      <FieldValue field="Fuel" value={travel.fuel_type}></FieldValue>
    </div>
  );
}

export default RoadCard;
