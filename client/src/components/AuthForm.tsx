import { useState } from "react";

type Variant = "login" | "register";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("login");
  return (
    <div className="w-1/4 font-pops bg-sky-200 rounded-xl flex flex-col py-10 justify-center items-center">
      <div className="text-3xl text-sky-800 font-bold tracking-wide">
        {variant === "login" ? "Login" : "Register"}
      </div>
      <div>
        <form className="flex flex-col gap-3 justify-center items-center h-64">
          {variant === "register" && (
            <input
              type="text"
              placeholder="Enter username :"
              className="bg-white  px-2 py-1 rounded-md"
            />
          )}
          <input
            type="email"
            placeholder="Enter email :"
            className="bg-white  px-2 py-1 rounded-md"
          />
          <input
            type="password"
            placeholder="Enter password :"
            className="bg-white  px-2 py-1 rounded-md"
          />
          <button
            type="submit"
            className="mt-5 bg-sky-700 text-white w-full rounded-lg font-semibold py-2"
          >
            {variant === "login" ? "Login" : "Register"}
          </button>
        </form>
        <span className="text-sm flex mt-5 items-center gap-2">
          <div className="text-gray-600 tracking-tight">
            {variant === "login"
              ? `Don${"'"}t have an account?`
              : "Already have an account?"}
          </div>
          <div
            onClick={() =>
              variant === "login" ? setVariant("register") : setVariant("login")
            }
            className="text-sky-800 rounded-md font-semibold cursor-pointer"
          >
            {variant === "login" ? "Register" : "Login"}
          </div>
        </span>
      </div>
    </div>
  );
};

export default AuthForm;
