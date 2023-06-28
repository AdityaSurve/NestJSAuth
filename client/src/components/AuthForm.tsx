import { useState } from "react";

type Variant = "login" | "register";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    const res = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.error) {
      console.log(data.error);
      return;
    } else {
      //   window.location.href = "/landing";
      console.log(data);
    }
  };
  const handleSignup = async () => {
    const res = await fetch("http://localhost:5000/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="w-[80%] lg:w-1/4 font-pops bg-sky-200 rounded-xl flex flex-col py-10 justify-center items-center">
      <div className="text-3xl text-sky-800 font-bold tracking-wide">
        {variant === "login" ? "Login" : "Register"}
      </div>
      <div>
        <form
          className="flex flex-col gap-3 justify-center items-center h-64"
          onSubmit={(e) => {
            e.preventDefault();
            if (variant === "login") {
              handleLogin();
            } else {
              handleSignup();
            }
          }}
        >
          {variant === "register" && (
            <input
              type="text"
              placeholder="Enter username :"
              className="bg-white  px-2 py-1 rounded-md"
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Enter email :"
            className="bg-white  px-2 py-1 rounded-md"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password :"
            className="bg-white  px-2 py-1 rounded-md"
            onChange={(e) => setPassword(e.target.value)}
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
