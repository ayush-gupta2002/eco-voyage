import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import RoadResult from "../Components/RoadResult";
import FlightResult from "../Components/FlightResult";
import HotelResult from "../Components/HotelResult";
import { Link } from "react-router-dom";
import Error from "../Components/Error";

function Result() {
  const list = useSelector((state) => state.list);
  const [resultList, setResultList] = useState([]);
  const [co, setCo] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getFootprint = async () => {
      for (let i = 0; i < list.length; i++) {
        if (list[i].type == "road") {
          const encodedParams = new URLSearchParams();
          encodedParams.set("vehicle_type", list[i].vehicle_type);
          encodedParams.set("distance_value", list[i].distance);
          encodedParams.set("distance_unit", list[i].distance_unit);

          const options = {
            method: "POST",
            url: "https://carbonsutra1.p.rapidapi.com/vehicle_estimate_by_type",
            headers: {
              "content-type": "application/x-www-form-urlencoded",
              Authorization: process.env.REACT_APP_AUTH,
              "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
              "X-RapidAPI-Host": "carbonsutra1.p.rapidapi.com",
            },
            data: encodedParams,
          };

          try {
            const response = await axios.request(options);
            console.log(response.data);
            let newResult = resultList;
            newResult.push(response.data.data);
            if (resultList.length === list.length) {
              let emissions = 0;

              for (let i = 0; i < resultList.length; i++) {
                emissions += resultList[i].co2e_kg;
                console.log("in loop", resultList[i].co2e_kg);
              }
              setCo(emissions);
              setIsLoading(false);
            }
            setResultList(newResult);
          } catch (error) {
            console.error(error);
            setIsError(true);
          }
        } else if (list[i].type == "flight") {
          const encodedParams = new URLSearchParams();
          encodedParams.set("iata_airport_from", list[i].iata_airport_from);
          encodedParams.set("iata_airport_to", list[i].iata_airport_to);
          encodedParams.set("number_of_passengers", list[i].Passengers);

          const options = {
            method: "POST",
            url: "https://carbonsutra1.p.rapidapi.com/flight_estimate",
            headers: {
              "content-type": "application/x-www-form-urlencoded",
              Authorization: process.env.REACT_APP_AUTH,
              "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
              "X-RapidAPI-Host": "carbonsutra1.p.rapidapi.com",
            },
            data: encodedParams,
          };

          try {
            const response = await axios.request(options);
            console.log(response.data);
            let newResult = resultList;
            newResult.push(response.data.data);
            if (resultList.length === list.length) {
              let emissions = 0;

              for (let i = 0; i < resultList.length; i++) {
                emissions += resultList[i].co2e_kg;
                console.log("in loop", resultList[i].co2e_kg);
              }
              setCo(emissions);
              setIsLoading(false);
            }
            setResultList(newResult);
          } catch (error) {
            console.error(error);
            setIsError(true);
          }
        } else {
          const encodedParams = new URLSearchParams();
          encodedParams.set("country_code", list[i].country.slice(0, 2));
          encodedParams.set("number_of_nights", list[i].nights);
          encodedParams.set("number_of_rooms", list[i].rooms);
          encodedParams.set("city_name", list[i].city);

          const options = {
            method: "POST",
            url: "https://carbonsutra1.p.rapidapi.com/hotel_estimate",
            headers: {
              "content-type": "application/x-www-form-urlencoded",
              Authorization: process.env.REACT_APP_AUTH,
              "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
              "X-RapidAPI-Host": "carbonsutra1.p.rapidapi.com",
            },
            data: encodedParams,
          };

          try {
            const response = await axios.request(options);
            console.log(response);
            console.log(response.data);
            let newResult = resultList;
            newResult.push(response.data.data);
            if (newResult.length === list.length) {
              setIsLoading(false);
              if (resultList.length === list.length) {
                let emissions = 0;

                for (let i = 0; i < resultList.length; i++) {
                  emissions += resultList[i].co2e_kg;
                }
                setCo(emissions);
              }
            }
            setResultList(newResult);
          } catch (error) {
            console.error(error);
            console.log("hello");
            setIsError(true);
          }
        }
      }
    };
    getFootprint();
  }, []);

  const renderedCards = resultList.map((r) => {
    if (r.type === "estimate-vehicle-usage") {
      return (
        <RoadResult
          co2e={r.co2e_kg}
          type={r.type}
          fuel={r.fuel_type}
          distance={r.distance_value}
          unit={r.distance_unit}
        ></RoadResult>
      );
    } else if (r.type === "estimate-travel-flight") {
      return (
        <FlightResult
          co2e={r.co2e_kg}
          iata_airport_from={r.iata_airport_from}
          airport_from={r.airport_from}
          iata_airport_to={r.iata_airport_to}
          airport_to={r.airport_to}
          flight_class={r.flight_class}
          number_of_passengers={r.number_of_passengers}
          type={r.type}
        ></FlightResult>
      );
    } else {
      return (
        <HotelResult
          co2e={r.co2e_kg}
          type={r.type}
          country={r.country}
          city_name={r.city_name}
          number_of_nights={r.number_of_nights}
          number_of_rooms={r.number_of_rooms}
        ></HotelResult>
      );
    }
  });

  let content;
  if (isLoading && !isError) {
    content = (
      <div className="min-h-screen h-full w-full flex">
        <div className="m-auto spinner"></div>
      </div>
    );
  } else if (!isLoading && !isError) {
    content = (
      <div className="flex flex-col mx-auto">
        <div className="flex gap-2 mx-auto my-4">
          <h3 className="text-2xl font-semibold text-gray-500">
            Total CO2 Emissions
          </h3>
          <h3 className="text-2xl font-semibold">{Math.ceil(co)} KG</h3>
        </div>
        <div className="flex gap-2 mx-auto my-4">
          <h3 className="text-2xl font-semibold text-gray-500">
            Tree Equivalent
          </h3>
          <h3 className="text-2xl font-semibold">{Math.floor(co / 22)}</h3>
        </div>
        <Link to="/" className="w-fit mx-auto">
          <button className="flex gap-2 mx-auto teal-500 font-semibold p-2 text-white bg-teal-500 rounded-lg hover:scale-105 duration-500">
            Go Back
          </button>
        </Link>

        <div className="w-full h-screen md:grid md:grid-cols-3 overflow-scroll p-4 gap-2">
          {renderedCards}
        </div>
      </div>
    );
  } else if (isError) {
    content = <Error></Error>;
  }

  console.log("isError", isError);

  return (
    <div className="min-h-screen h-full bg-gradient-to-r from-rose-100 to-teal-100 flex flex-col">
      <h1 className="font-bold text-gray-600 text-4xl mx-auto">Result</h1>
      {content}
    </div>
  );
}

export default Result;
