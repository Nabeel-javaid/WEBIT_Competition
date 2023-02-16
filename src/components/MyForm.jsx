import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form, useFormik } from "formik";
import Lottie from "react-lottie";
import { useRouter } from "next/router";
import * as Yup from 'yup'
import {supabase} from 'utils/supabase';
// import "./styles.css";

function MyForm({departure_airport, arrival_airport, departure_time}) {
  const router = useRouter();

  //const formik = useFormik()
  return (
    <div
      className={`flex w-full h-[100vh]  items-center justify-center  flex-col ${
        router.asPath == "/"  ? "bg-white" : "bg-white"
      }   `}
      style={{ "clip-path": " polygon(0 10%, 100% 0, 100% 90%, 0% 100%)" }}
    >
     
      <div className="shadow-lg rounded-2xl h-[60%] w-[70%] p-5 flex-row flex mt-7 bg-white">
       
        <div className="w-[100%] p-5">
          <Formik
            initialValues={{ name: "", email: "", cnic: "", phoneNo: "", passportNo:"", nationality:"" }}
            onSubmit={async (values,actions) => {
              //go to a link
              router.push("https://buy.stripe.com/test_3cs6si10q7gIfHG5kk")
              console.log("Hello World")
              actions.resetForm({values:initialValues})

              try
              {
                console.log("Here")
              let request = await fetch("/api/mail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  departure_airport: departure_airport,
                  arrival_airport: arrival_airport,
                  departure_time: departure_time,

                }),
              });
            }
            catch(err)
            {
              console.log(err)
            }

            try{
              const response = await supabase.from("passengers").insert([
                {
                  name: values.name,
                  email: values.email,
                  cnic: values.cnic,
                  phoneNo: values.phoneNo,
                  passportNo: values.passportNo,
                  nationality:values.nationality,
                  Flight_no: 2,
                },
              ]);
            }
            catch(err)
            {
              console.log(err)
            }

              console.log("RESPONSE: ",response);



              
            }}
          >
            <Form>
              <div className="flex flex-col gap-3">
                <div className="text-2xl font-semibold">User Details</div>
                <div className=" w-[100%]">
                  <Field
                    name="name"
                    type="text"
                    className="focus:border-b-violet-500 border-t-0 border-l-0 border-r-0 border-b-gray border-b-2 focus:outline-none w-full p-2 text-lg text-slate-700 hover:border-b-slate-800  "
                    placeholder=" Name"
                  />
                </div>
                <div className=" w-[100%]">
                  <Field
                    name="email"
                    type="email"
                    className="focus:border-b-violet-500 border-t-0 border-l-0 border-r-0 border-b-gray border-b-2 focus:outline-none w-full p-2 text-lg text-slate-700 hover:border-b-slate-800  "
                    placeholder="Email"
                  />
                </div>
                <div className=" w-[100%]">
                  <Field
                    name="cnic"
                    type="text"
                    className="focus:border-b-violet-500 border-t-0 border-l-0 border-r-0 border-b-gray border-b-2 focus:outline-none w-full p-2 text-lg text-slate-700 hover:border-b-slate-800  "
                    placeholder="CNIC"
                  />
                </div>
                <div className=" w-[99%]">
                  <Field
                    name="phoneNo"
                    type="text"
                    className="focus:border-b-violet-500 border-t-0 border-l-0 border-r-0 border-b-gray border-b-2 focus:outline-none w-full p-2 text-lg text-slate-700 hover:border-b-slate-800  "
                    placeholder="Number"
                  />
                </div>
                <div className=" w-[99%]">
                  <Field
                    name="passportNo"
                    type="text"
                    className="focus:border-b-violet-500 border-t-0 border-l-0 border-r-0 border-b-gray border-b-2 focus:outline-none w-full p-2 text-lg text-slate-700 hover:border-b-slate-800  "
                    placeholder="Passport Number"
                  />
                </div>
                
                <div className=" w-[99%]">
                  <Field
                    name="nationality"
                    type="text"
                    className="focus:border-b-violet-500 border-t-0 border-l-0 border-r-0 border-b-gray border-b-2 focus:outline-none w-full p-2 text-lg text-slate-700 hover:border-b-slate-800  "
                    placeholder="Nationality"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="flex p-3 bg-orange-500 text-lg text-white font-semibold rounded-md w-[40%] items-center justify-center mt-10 hover:bg-orange-600 "
              >
                Confirm Booking
              </button>
              
              
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default MyForm;