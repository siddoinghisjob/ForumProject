import React from "react";
import { useEffect } from "react";
import Header from "../header/index";
import Footer from "../footer/index";
import {FiMail} from "react-icons/fi";
import {GiCarKey} from "react-icons/gi";
import {GiRamProfile} from "react-icons/gi";
import {BsPerson} from "react-icons/bs";

export default function Register() {
  function handleCallback(res, err) {
    console.log("first");
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "85061424580-hmcb7t27obn2fn73ck12nii5mdtm0t3j.apps.googleusercontent.com",
      callback: handleCallback,
    });

    google.accounts.id.renderButton(document.getElementById("GLogin"), {
      theme: "",
      size: "extra large",
    });
  });
  return (
    <div className="body flex flex-col justify-between min-h-screen">
      <Header />
      <form className="flex justify-center items-center">
        <div className="flex flex-col gap-3 justify-center items-center p-2 md:p-10 border-2 backdrop-blur-md">
          <div className="flex flex-col text-2xl md:text-3xl gap-3">
            <span className="flex flex-col md:flex-row justify-center relative items-center">
                <GiRamProfile className="text-white hidden md:block"/>
                <input
                className="placeholder:p-2 border-0 border-b-2 bg-transparent focus:outline-none focus:border-teal-500"
                placeholder="First name"
                type="text"
                />
                <input
                className="text-white placeholder:p-2 border-0 border-b-2 bg-transparent focus:outline-none focus:border-teal-500"
                placeholder="Last name"
                type="text"
                />
            </span>
            <span className="flex flex-row justify-center items-center">
                <FiMail className="text-white"/>
                <input
                className="md:text-white w-full text-black placeholder:p-2 border-0 border-b-2 bg-transparent focus:outline-none focus:border-teal-500"
                placeholder="Email"
                type="email"
                />
            </span>
            <span className="flex flex-row justify-center items-center">
                <BsPerson className="text-white"/>
                <input
                className="text-white w-full placeholder:p-2 border-0 border-b-2 bg-transparent focus:outline-none focus:border-teal-500"
                placeholder="Username"
                type="password"
                />
            </span>
            <span className="flex flex-row justify-center items-center">
                <GiCarKey className="text-white"/>
                <input
                className="text-white w-full placeholder:p-2 border-0 border-b-2 bg-transparent focus:outline-none focus:border-teal-500"
                placeholder="Password"
                type="password"
                />
            </span>
          </div>
          <input
            type="submit"
            className="border-2 text-xl w-full p-2 bg-slate-900 text-white rounded-md"
            value="Register"
          />
          <div className=" mt-5" id="GLogin"></div>
        </div>
      </form>
      <Footer />
    </div>
  );
}
