import React from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="mt-4 grow flex items-center justify-around ">
      <div className="mb-60">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-lg mx-auto p-2 m-2">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="username@mail.com" />
          <input type="password" placeholder="password" />
          <button className="primary">Sign Up</button>
          <div className="text-center p-2 text-gray-600">
            Already have an account with us?{" "}
            <Link to={"/login"} className="text-black underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
