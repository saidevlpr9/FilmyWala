import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  function handleToggle() {
    setSignInForm(!isSignInForm);
  }
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-[rgba(0,0,0,0.7)]  rounded-md w-3/12 p-10">
          <form className="flex flex-col rounded-md ">
            <h1 className="text-white text-3xl">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {isSignInForm ? (
              <>
                <input
                  type="text"
                  placeholder="Email or Mobile number"
                  className="p-3 m-2 rounded-sm mt-6"
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="p-3 m-2 rounded-sm mt-4"
                />
                <button className="bg-red-600 text-white text-lg rounded-md mt-8 p-3">
                  SignIn
                </button>
                <div className="text-white flex justify-between mt-3">
                  <label>
                    <input type="checkbox" /> Remember me
                  </label>

                  <p>Need help?</p>
                </div>
                <p className="mt-5 text-white">New to Netfilx? Signup</p>
              </>
            ) : (
              <h1>Signup</h1>
            )}
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
