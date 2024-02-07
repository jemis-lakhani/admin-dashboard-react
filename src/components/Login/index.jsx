import { TextField } from "@mui/material";
import React from "react";
import ReactCountryFlag from "react-country-flag";
import { useForm } from "react-hook-form";
import logo from "../../icons/login_encrypted.svg";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log({ data });
  };

  return (
    <div>
      <div className="rounded-md mx-1 bg-login-background h-[40%] max-w-full absolute inset-0 from-fuchsia-300 to-sky-500">
        <div className="bg-login-logo-1 bg-no-repeat mx-auto w-[50px] justify-center h-[50px] mt-[5%]"></div>
        <div className="bg-login-logo-2 mt-1 bg-no-repeat mx-auto w-[150px] justify-center h-[30px]"></div>
        <div className="mx-auto mt-4 text-[10px] text-white justify-center w-fit h-fit">
          Vincent Client Login
        </div>
      </div>
      <section
        id="login"
        className="relative p-4 flex flex-col justify-center min-h-screen max-w-sm mx-auto z-10"
      >
        <div className="p-6 bg-white rounded-xl drop-shadow-lg">
          <div className="flex items-center justify-center font-black m-3 mb-12">
            <img className="h-[50px] w-[50px]" src={logo} alt="" />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex gap-2 flex-col justify-center"
          >
            <TextField
              id="username"
              name="username"
              {...register("username", { required: "Username is required." })}
              error={errors.username?.message}
              helperText={errors.username?.message}
              label="Username"
              variant="outlined"
              size="small"
              className="bg-white"
            />
            <TextField
              id="password"
              name="password"
              {...register("password", { required: "Password is required." })}
              error={errors.password?.message}
              helperText={errors.password?.message}
              label="Password"
              variant="outlined"
              type="password"
              size="small"
              className="bg-white"
            />
            <button
              className="mt-2 px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-gray-400 to-gray-600 font-medium text-gray-100 block transition duration-300"
              type="submit"
            >
              <span id="login_default_state">
                Login<span id="subtotal"></span>
              </span>
            </button>
            <div className="flex gap-3 justify-center">
              <span className="drop-shadow-md cursor-pointer">
                <ReactCountryFlag
                  countryCode="KR"
                  style={{ height: "2em", width: "2em" }}
                  svg
                ></ReactCountryFlag>
              </span>
              <span className="drop-shadow-md cursor-pointer">
                <ReactCountryFlag
                  countryCode="US"
                  style={{ height: "2em", width: "2em" }}
                  svg
                ></ReactCountryFlag>
              </span>
              <span className="drop-shadow-md cursor-pointer">
                <ReactCountryFlag
                  countryCode="CN"
                  style={{ height: "2em", width: "2em" }}
                  svg
                ></ReactCountryFlag>
              </span>
              <span className="drop-shadow-md cursor-pointer">
                <ReactCountryFlag
                  countryCode="JP"
                  style={{ height: "2em", width: "2em" }}
                  svg
                ></ReactCountryFlag>
              </span>
            </div>
            <div className="text-center text-gray-500 text-xs mt-8">
              Vincent @2024
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
