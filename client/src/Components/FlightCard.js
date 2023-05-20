import React from "react";
import { RiFlightTakeoffFill } from "react-icons/ri";
import FieldValue from "./FieldValue";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/summaryRedux";

function FlightCard({ flight, index }) {
  const dispatch = useDispatch();
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg min-w-[400px] overflow-x-scroll">
      <div className="flex w-full justify-between">
        <RiFlightTakeoffFill className="text-sm text-gray-400"></RiFlightTakeoffFill>
        <ImCross
          className="text-sm cursor-pointer text-gray-400 hover:text-gray-700 duration-500"
          onClick={() => {
            dispatch(removeItem(index));
          }}
        ></ImCross>
      </div>
      <FieldValue field="From" value={flight.From}></FieldValue>
      <FieldValue field="To" value={flight.To}></FieldValue>
      <FieldValue field="Passengers" value={flight.Passengers}></FieldValue>
      <FieldValue field="Class" value={flight.Class}></FieldValue>
    </div>
  );
}

export default FlightCard;
