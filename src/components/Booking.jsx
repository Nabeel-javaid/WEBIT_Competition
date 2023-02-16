import React, { useState } from "react";
import CitiesDD from "./CitiesDD";
import { TbPlaneDeparture } from "react-icons/tb";
import { TbPlaneArrival } from "react-icons/tb";
import { HiSelector } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";

const Booking = () => {
  //make a state for the departure city
  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");
  const [date, setDate] = useState("");

  const router = useRouter();

  const dateHandler = (e) => {
    setDate(e.target.value);
    //print the e.target.value
    console.log("DATEEEE: ", date);
    console.log(e.target.value);
  };

  const bookingHandler = () => {
    console.log("Departure City: ", departureCity);
    console.log("Arrival City: ", arrivalCity);
    console.log("Date: ", date);
    //use nextjs function to go to /app/booking
    router.push("/booking?departureCity=" + departureCity + "&arrivalCity=" + arrivalCity + "&date=" + date);
  };

  return (
    <>
      <div
        id="main heading"
        className="flex items-center justify-center w-full h-[70vh]  flex-col -mt-44  "
      >
        <div className="w-[80%]  bg-white shadow-lg rounded-lg border solid  h-60 p-4 ">
          <div
            className="flex h-[30%] items-start flex-col pl-6 "
            id="booking-nav"
          >
            <div
              id="title"
              className="font-medium text-xl mt-3 text-orange-600"
            >
              Search Flights
            </div>
            <div id="description" className=" text-slate-400 ">
              Get the details of the latest flights.
            </div>
          </div>
          <div
            className="flex h-[70%] items-center justify-start flex-row  solid p-5 cursor-pointer"
            id="booking-form"
          >
            <div
              id="arrival-destination"
              className="w-[60%] h-full rounded-xl border flex flex-row "
            >
              <div className="  w-[50%] flex flex-row  items-center justify-center border-r-2 pr-4 ">
                <div id="icon" className="w-[30%] pl-5">
                  <TbPlaneDeparture
                    size={30}
                    className="text-orange-600"
                  ></TbPlaneDeparture>
                </div>
                <CitiesDD
                  status={"departure"}
                  setDepartureCity={setDepartureCity}
                  departureCity={departureCity}
                ></CitiesDD>
                <HiSelector size={30} className="text-orange-600"></HiSelector>
              </div>
              <div className="  w-[50%] flex flex-row  items-center justify-center border-r-2 pr-4 ">
                <div id="icon" className="w-[30%] pl-5">
                  <TbPlaneArrival
                    size={30}
                    className="text-orange-600"
                  ></TbPlaneArrival>
                </div>
                <CitiesDD
                  status={"arrival"}
                  setArrivalCity={setArrivalCity}
                  arrivalCity={arrivalCity}
                  departureCity={departureCity}
                ></CitiesDD>
                <HiSelector size={30} className="text-orange-600"></HiSelector>
              </div>
            </div>
            <div
              id="date"
              className="w-[20%] border h-full rounded-lg ml-7 flex flex-col text-base font-bold text-slate-600"
            >
              {/* <label for="birthday"></label> */}
              <input
                type="date"
                id="birthday"
                name="birthday"
                value={"Pick The Date"}
                className="w-full h-full px-5"
                onChange={dateHandler}
              />
            </div>
            <div
              id="searchButton"
              className="w-[10%] h-full rounded-xl border ml-auto flex flex-col items-center justify-center bg-orange-400 "
              onClick={bookingHandler}
            >
              <FaSearch size={30} className="text-white"></FaSearch>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
