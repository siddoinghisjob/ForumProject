import React from "react";
import { useEffect } from "react";
import Header from "../header/index";
import Footer from "../footer/index";
import {FiMail} from "react-icons/fi";
import {GiCarKey} from "react-icons/gi";

export default function Login() {
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
      <form className="flex justify-center items-center bg-transparent mx-1">
        <div className="flex flex-col gap-3 justify-center items-center p-2 md:p-10 md:border-2 backdrop-blur-md rounded-md">
          <div className="flex flex-col text-2xl md:text-3xl gap-3">
            <span className="flex flex-row justify-center items-center">
                <FiMail className="text-white"/>
                <input
                className="md:text-white text-black placeholder:p-2 border-0 border-b-2 bg-transparent focus:outline-none focus:border-teal-500"
                placeholder="Email"
                type="email"
                />
            </span>
            <span className="flex flex-row justify-center items-center">
                <GiCarKey className="text-white"/>
                <input
                className="md:text-white text-black placeholder:p-2 border-0 border-b-2 bg-transparent focus:outline-none focus:border-teal-500"
                placeholder="Password"
                type="password"
                />
            </span>
          </div>
          <input
            type="submit"
            className="border-2 text-xl w-full p-2 bg-slate-900 text-white rounded-md"
            value="Login"
          />
          <div className=" mt-5" id="GLogin"></div>
        </div>
      </form>
      <Footer />
    </div>
  );
}
