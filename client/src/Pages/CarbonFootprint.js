import React, { useState } from "react";
import { FaHotel } from "react-icons/fa";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { MdFlight } from "react-icons/md";
import { BsFillTaxiFrontFill } from "react-icons/bs";
import FlightForm from "../Components/FlightForm";
import RoadForm from "../Components/RoadForm";
import className from "classnames";
import TravelOption from "../Components/TravelOption";
import countryCodes from "../Assets";
import HotelCard from "../Components/HotelCard";
import FlightCard from "../Components/FlightCard";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearAll } from "../redux/summaryRedux";
import RoadCard from "../Components/RoadCard";
import { Link } from "react-router-dom";

function CarbonFootprint() {
  const [travelForm, setTravelForm] = useState(<FlightForm></FlightForm>);
  const [country, setCountry] = useState("");
  const [nights, setNights] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [city, setCity] = useState("");
  const [summary, setSummary] = useState([]);
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);

  const iconClasses = className({
    "text-3xl": true,
    "w-full": true,
    "text-gray-500": true,
    "group-hover:text-gray-700": true,
    "duration-500": true,
  });

  const codes = Object.keys(countryCodes);

  const renderedCountries = codes.map((code) => {
    return (
      <option>
        {code} - {countryCodes[code]}
      </option>
    );
  });

  const handleAddHotel = () => {
    const toAdd = {
      type: "hotel",
      country: country,
      nights: nights,
      rooms: rooms,
      city: city,
    };

    dispatch(addItem(toAdd));

    setCity("");
    setNights(0);
    setRooms(0);
  };

  let renderedSummary;

  if (list.length !== 0) {
    renderedSummary = list.map((card, index) => {
      if (card.type === "hotel") {
        return <HotelCard hotel={card} index={index}></HotelCard>;
      } else if (card.type === "flight") {
        return <FlightCard index={index} flight={card}></FlightCard>;
      } else {
        return <RoadCard index={index} travel={card}></RoadCard>;
      }
    });
  }

  return (
    <div className="min-h-screen h-full bg-gradient-to-r from-rose-100 to-teal-100 flex">
      <div className="w-full h-full my-10">
        <div className="flex w-full justify-center">
          <div className="flex gap-2">
            <button
              onClick={() => {
                dispatch(clearAll());
              }}
              className="p-2 rounded-lg text-white bg-red-500 font-semibold cursor-pointer hover:scale-105 duration-500"
            >
              Reset
            </button>
            <Link to="/result">
              <button className="p-2 rounded-lg text-white bg-teal-500 font-semibold cursor-pointer hover:scale-105 duration-500">
                Continue
              </button>
            </Link>
          </div>
        </div>
        <div className="flex w-full">
          <div className="block md:flex m-auto gap-8 w-full md:w-2/3 py-4 sm:px-0 px-2">
            <div className="w-full md:w-1/2 bg-gray-50 p-1 md:p-6 rounded-lg shadow-lg my-6 md:my-0 overflow-scroll">
              <div className="flex w-full">
                <div className="mx-auto">
                  <FaHotel className="text-5xl text-gray-500 w-full mb-2"></FaHotel>
                  <h3 className="text-gray-500 font-semibold text-xl">
                    Add Hotel Stay
                  </h3>
                </div>
              </div>
              <div className="mx-6 my-2">
                <div className="flex mt-4">
                  <div className="text-gray-500 font-semibold mb-2 my-auto">
                    Country Code
                  </div>
                  <div className="flex ml-2 w-fit border-2 p-2 text-gray-600 bg-white ">
                    <select
                      className="focus:outline-none cursor-pointer w-fit"
                      onChange={(e) => {
                        setCountry(e.target.value);
                      }}
                    >
                      {renderedCountries}
                    </select>
                  </div>
                </div>
                <div className="flex mt-4">
                  <div className="text-gray-500 font-semibold my-auto">
                    Number of nights
                  </div>
                  <input
                    type="number"
                    min={0}
                    max={999}
                    value={nights}
                    className="border-2 focus:outline-none text-gray-500 p-2 ml-2"
                    onChange={(e) => {
                      setNights(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="flex mt-4">
                  <div className="text-gray-500 font-semibold my-auto">
                    Number of rooms
                  </div>
                  <input
                    className="border-2 focus:outline-none text-gray-500 p-2 ml-2"
                    type="number"
                    min={0}
                    max={999}
                    value={rooms}
                    onChange={(e) => {
                      setRooms(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="flex mt-4">
                  <div className="text-gray-500 font-semibold my-auto">
                    City
                  </div>
                  <input
                    className="border-2 focus:outline-none text-gray-500 p-2 ml-2"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  ></input>
                </div>
                <button
                  onClick={() => {
                    handleAddHotel();
                  }}
                  className="w-full bg-teal-500 mt-4 p-2 font-semibold text-white rounded-lg hover:bg-teal-600 duration-500"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-gray-50 p-1 md:p-6 rounded-lg shadow-lg my-6 md:my-0 overflow-scroll">
              <div className="flex w-full">
                <div className="mx-auto">
                  <RiFlightTakeoffFill className="text-5xl text-gray-500 w-full mb-2"></RiFlightTakeoffFill>
                  <h3 className="text-gray-500 font-semibold text-xl text-center">
                    Add Travel
                  </h3>
                  <div className="flex justify-center gap-2 my-2">
                    <TravelOption
                      icon={<MdFlight className={iconClasses}></MdFlight>}
                      value="Flight"
                      setTravelForm={setTravelForm}
                      travelForm={travelForm}
                      element={
                        <FlightForm
                          summary={summary}
                          setSummary={setSummary}
                        ></FlightForm>
                      }
                    ></TravelOption>
                    <TravelOption
                      icon={
                        <BsFillTaxiFrontFill
                          className={iconClasses}
                        ></BsFillTaxiFrontFill>
                      }
                      value="Road"
                      setTravelForm={setTravelForm}
                      element={<RoadForm></RoadForm>}
                      travelForm={travelForm}
                    ></TravelOption>
                  </div>
                </div>
              </div>
              {travelForm}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-xl text-gray-500 mx-auto">
            Summary (Scroll left)
          </h3>
        </div>
        <div className="min-w-screen w-full flex gap-2 overflow-x-scroll p-4">
          {renderedSummary}
        </div>
      </div>
    </div>
  );
}

export default CarbonFootprint;
