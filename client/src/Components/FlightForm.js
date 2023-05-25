import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/summaryRedux";
import axios from "axios";
import classNames from "classnames";
import { MdOutlineClear } from "react-icons/md";

function FlightForm() {
  const [fromAirport, setFromAirport] = useState("");
  const [toAirport, setToAirport] = useState("");
  const [passengers, setPassengers] = useState(0);
  const [flightClass, setFlightClass] = useState("Economy");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);
  const [fromAirportName, setFromAirportName] = useState("");
  const [toAirportName, setToAirportName] = useState("");
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");

  const fromAirportClasses = classNames({
    "border-2": true,
    "focus:outline-none": true,
    "text-gray-500": true,
    "p-2": true,
    "ml-2": true,
    "bg-gray-100": fromAirportName && true,
  });

  const toAirportClasses = classNames({
    "border-2": true,
    "focus:outline-none": true,
    "text-gray-500": true,
    "p-2": true,
    "ml-2": true,
    "bg-gray-100": toAirportName && true,
  });

  async function getFromAirport() {
    const options = {
      method: "GET",
      url: "https://carbonsutra1.p.rapidapi.com/airports-by-keyword",
      params: {
        keyword: fromAirport,
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "carbonsutra1.p.rapidapi.com",
      },
    };

    try {
      const res = await axios.request(options);
      setFromAirportName(res.data.data[0].airport_name);
      setFromCity(res.data.data[0].iata_code);
    } catch (err) {
      console.log(err);
    }
  }

  async function getToAirport() {
    const options = {
      method: "GET",
      url: "https://carbonsutra1.p.rapidapi.com/airports-by-keyword",
      params: {
        keyword: toAirport,
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "carbonsutra1.p.rapidapi.com",
      },
    };

    try {
      const res = await axios.request(options);
      setToAirportName(res.data.data[0].airport_name);
      setToCity(res.data.data[0].iata_code);
    } catch (err) {}
  }

  const handleAddFlight = () => {
    if (fromAirportName && toAirportName) {
      const toAdd = {
        type: "flight",
        iata_airport_from: fromCity,
        iata_airport_to: toCity,
        From: fromAirportName,
        To: toAirportName,
        Passengers: passengers,
        Class: flightClass,
      };
      dispatch(addItem(toAdd));
      setFromAirport("");
      setToAirport("");
      setFromAirportName("");
      setToAirportName("");
      setFromCity("");
      setToCity("");
    }
  };

  let fromAirportFormValue, toAirportFormValue;

  if (fromAirportName) {
    fromAirportFormValue = fromCity + "-" + fromAirportName;
  } else {
    fromAirportFormValue = fromAirport;
  }

  if (toAirportName) {
    toAirportFormValue = toCity + "-" + toAirportName;
  } else {
    toAirportFormValue = toAirport;
  }

  let fromClear, toClear;

  if (fromAirportName) {
    fromClear = (
      <MdOutlineClear
        className="my-auto text-gray-600 mx-2 text-2xl cursor-pointer hover:text-black"
        onClick={() => {
          setFromAirport("");
          setFromCity("");
          setFromAirportName("");
        }}
      ></MdOutlineClear>
    );
  }
  if (toAirportName) {
    toClear = (
      <MdOutlineClear
        className="my-auto text-gray-600 mx-2 text-2xl cursor-pointer hover:text-black"
        onClick={() => {
          setToAirport("");
          setToAirportName("");
          setToCity("");
        }}
      ></MdOutlineClear>
    );
  }

  return (
    <div className="mx-6 my-4">
      <div className="flex mt-4">
        <div className="text-gray-500 font-semibold my-auto">From Airport</div>
        <input
          className={fromAirportClasses}
          type="text"
          value={fromAirportFormValue}
          disabled={fromAirportName && true}
          onChange={(e) => {
            setFromAirport(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            getFromAirport();
          }}
          className="my-auto ml-3 font-semibold text-white rounded-lg bg-teal-500 shadow-lg p-2 hover:bg-teal-400 cursor-pointer duration-500"
        >
          Search
        </button>
        {fromClear}
      </div>
      <div className="flex mt-4">
        <div className="text-gray-500 font-semibold my-auto">To Airport</div>
        <input
          className={toAirportClasses}
          disabled={toAirportName && true}
          type="text"
          value={toAirportFormValue}
          onChange={(e) => {
            setToAirport(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            getToAirport();
          }}
          className="my-auto ml-3 font-semibold text-white rounded-lg bg-teal-500 shadow-lg p-2 hover:bg-teal-400 cursor-pointer duration-500"
        >
          Search
        </button>
        {toClear}
      </div>
      <div className="flex mt-4">
        <div className="text-gray-500 font-semibold my-auto">
          Number of Passengers
        </div>
        <input
          className="border-2 focus:outline-none text-gray-500 p-2 ml-2"
          type="number"
          value={passengers}
          onChange={(e) => {
            setPassengers(e.target.value);
          }}
        ></input>
      </div>
      <div className="flex mt-4">
        <div className="text-gray-500 font-semibold mb-2 my-auto">
          Flight Class
        </div>
        <div className="flex ml-2 w-fit border-2 p-2 text-gray-600 bg-white">
          <select
            className="w-full focus:outline-none cursor-pointer"
            onChange={(e) => {
              setFlightClass(e.target.value);
            }}
          >
            <option>economy</option>
            <option>premium</option>
            <option>business</option>
            <option>first</option>
          </select>
        </div>
      </div>
      <button
        className="w-full bg-teal-500 mt-4 p-2 font-semibold text-white rounded-lg hover:bg-teal-600 duration-500"
        onClick={() => {
          handleAddFlight();
        }}
      >
        Add
      </button>
    </div>
  );
}

export default FlightForm;
