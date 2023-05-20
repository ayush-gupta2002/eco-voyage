import React from "react";
import FieldValue from "../Components/FieldValue";
import { ImCross } from "react-icons/im";
import { FaHotel } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/summaryRedux";

function HotelCard({ hotel, index }) {
  const dispatch = useDispatch();
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg min-w-[400px] overflow-x-scroll bg-white">
      <div className="flex w-full justify-between">
        <FaHotel className="text-sm text-gray-400"></FaHotel>
        <ImCross
          className="text-sm cursor-pointer text-gray-400 hover:text-gray-700 duration-500"
          onClick={() => {
            dispatch(removeItem(index));
          }}
        ></ImCross>
      </div>
      <FieldValue field="Country" value={hotel.country}></FieldValue>
      <FieldValue field="Nights" value={hotel.nights}></FieldValue>
      <FieldValue field="Rooms" value={hotel.rooms}></FieldValue>
      <FieldValue field="City" value={hotel.city}></FieldValue>
    </div>
  );
}

export default HotelCard;
