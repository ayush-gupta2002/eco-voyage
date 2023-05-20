import React from "react";
import FieldValue from "./FieldValue";

function FlightResult({
  co2e,
  iata_airport_from,
  airport_from,
  iata_airport_to,
  airport_to,
  number_of_passengers,
  flight_class,
  type,
}) {
  return (
    <div className="bg-white h-fit min-w-1/3 p-4 rounded-lg flex flex-col border-2 overflow-scroll">
      <div className="w-fit h-fit mx-auto font-semibold text-xl">{type}</div>
      <FieldValue field="iata From" value={iata_airport_from}></FieldValue>
      <FieldValue field="iata To" value={iata_airport_to}></FieldValue>
      <FieldValue field="From" value={airport_from}></FieldValue>
      <FieldValue field="To" value={airport_to}></FieldValue>
      <FieldValue
        field="Number of passengers"
        value={number_of_passengers}
      ></FieldValue>
      <FieldValue field="Class" value={flight_class}></FieldValue>
      <FieldValue field="CO2 Emission (in kgs)" value={co2e}></FieldValue>
    </div>
  );
}

export default FlightResult;
