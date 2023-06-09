import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="mt-4 grow flex items-center justify-around ">
      <div className="mb-60">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-lg mx-auto p-2 m-2">
          <input type="email" placeholder="username@mail.com" />
          <input type="password" placeholder="password" />
          <button className="primary">Login</button>
          <div className="text-center p-2 text-gray-600">
            Don't have an account yet? <Link to={'/register'} className="text-black underline">Register now</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
