import React from "react";
import FieldValue from "./FieldValue";

function HotelCard({
  co2e,
  type,
  country,
  city_name,
  number_of_nights,
  number_of_rooms,
}) {
  return (
    <div className="bg-white h-fit min-w-1/3 overflow-scroll p-4 rounded-lg flex flex-col border-2">
      <div className="w-fit h-fit mx-auto font-semibold text-xl">{type}</div>
      <FieldValue field="Country" value={country}></FieldValue>
      <FieldValue field="City" value={city_name}></FieldValue>
      <FieldValue field="Rooms" value={number_of_rooms}></FieldValue>
      <FieldValue field="Nights" value={number_of_nights}></FieldValue>
      <FieldValue field="CO2 Emission (in kgs)" value={co2e}></FieldValue>
    </div>
  );
}

export default HotelCard;
