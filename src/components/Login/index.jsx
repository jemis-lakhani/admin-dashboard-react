import { TextField } from "@mui/material";
import React from "react";
import ReactCountryFlag from "react-country-flag";

function Login() {
  return (
    <div>
      <div className="h-[400px] w-full absolute inset-0 bg-gradient-to-tr from-fuchsia-300 to-sky-500"></div>
      <section
        id="login"
        className="relative p-4 flex flex-col justify-center min-h-screen max-w-md mx-auto z-10"
      >
        <div className="p-6 bg-white rounded">
          <div className="flex items-center justify-center font-black m-3 mb-12">
            <h1 className="tracking-wide text-3xl text-gray-900">Logo</h1>
          </div>
          <form
            id="login_form"
            action="api_login"
            method="POST"
            className="flex gap-2 flex-col justify-center"
          >
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              size="small"
              inputProps={{
                style: {
                  boxShadow:
                    "var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
                },
              }}
              className="bg-gray-100 ring-0"
            />
            <TextField
              id="outlined-basic1"
              label="Password"
              variant="outlined"
              type="password"
              size="small"
              className="bg-gray-100"
            />
            <button
              className="mt-2 px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-gray-400 to-gray-600 font-medium text-gray-100 block transition duration-300"
              type="submit"
            >
              <span id="login_default_state">
                Login<span id="subtotal"></span>
              </span>
            </button>
            <div className="flex gap-2 justify-center">
              <span className="drop-shadow-md">
                <ReactCountryFlag
                  countryCode="KR"
                  style={{ height: "2em", width: "2em" }}
                  svg
                ></ReactCountryFlag>
              </span>
              <span className="drop-shadow-md">
                <ReactCountryFlag
                  countryCode="US"
                  style={{ height: "2em", width: "2em" }}
                  svg
                ></ReactCountryFlag>
              </span>
              <span className="drop-shadow-md">
                <ReactCountryFlag
                  countryCode="CN"
                  style={{ height: "2em", width: "2em" }}
                  svg
                ></ReactCountryFlag>
              </span>
              <span className="drop-shadow-md">
                <ReactCountryFlag
                  countryCode="JP"
                  style={{ height: "2em", width: "2em" }}
                  svg
                ></ReactCountryFlag>
              </span>
            </div>
            <div className="text-center text-gray-500 text-xs mt-2">
              Vincent @2024
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
