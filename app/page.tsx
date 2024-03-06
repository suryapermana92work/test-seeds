"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = form ?? {};

  const [validation, setValidation] = useState({
    email: false,
    password: false,
  });

  const onLogin = () => {
    setValidation({
      ...validation,
      email: email?.length < 1 ? true : false,
      password: password?.length < 1 ? true : false,
    });

    if (email.length > 0 && password.length > 0) {
      router.push("/home");
    }
  };

  const onChange = (
    state: "email" | "password",
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setValidation({
      ...validation,
      [state]: e.target.value?.length < 1 ? true : false,
    });

    setForm({
      ...form,
      [state]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full dark:bg-gray-950">
      <Image
        src="/seeds-logo.svg"
        alt="Seeds Logo"
        className="dark:invert pb-6"
        width={100}
        height={24}
        priority
      />
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
          Welcome Back!
        </h1>
        <form action={onLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className={`text-black shadow-sm rounded-md w-full px-3 py-2 border-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${
                validation?.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="your@email.com"
              defaultValue={""}
              value={email}
              onChange={(e) => onChange("email", e)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`text-black shadow-sm rounded-md w-full px-3 py-2 border-2  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${
                validation?.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your password"
              defaultValue={""}
              value={password}
              onChange={(e) => onChange("password", e)}
            />
            <a
              href="#"
              className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Forgot Password?
            </a>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none"
                checked
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
