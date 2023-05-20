import React from "react";
import FieldValue from "./FieldValue";

function RoadCard({ co2e, type, fuel, distance, unit }) {
  return (
    <div className="bg-white h-fit  min-w-1/3 p-4 rounded-lg flex flex-col border-2">
      <div className="w-fit h-fit mx-auto font-semibold text-xl">{type}</div>
      <FieldValue field="Fuel" value={fuel}></FieldValue>
      <FieldValue field="Distance" value={distance + " " + unit}></FieldValue>
      <FieldValue field="CO2 Emission (in kgs)" value={co2e}></FieldValue>
    </div>
  );
}

export default RoadCard;
