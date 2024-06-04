"use client";
import { Context } from "@/Context/Context";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import trident from "../assets/tirdent.png"
const Mobile = ({ setIsOpen, categories }) => {
  const { user, handleLogout } = useContext(Context);
  const name = user?.data?.name.replace(/ .*/, "");
  return (
    <div>
      <div className="flex h-screen flex-col justify-between border-e bg-white">
        <div className="px-4 py-6">
          <Link onClick={() => setIsOpen(false)} href="/">
        
       <Image
       width={50}
       height={50}
       src={trident}
  alt="not found"
       />
            
          </Link>

          <ul className="mt-6 space-y-1">
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
              >
                Home
              </Link>
            </li>
            {user?.data?.isAdmin && (
              <li>
                <Link
                  href="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Admin
                </Link>
              </li>
            )}
            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm font-medium"> Categories </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  {categories?.map((category) => {
                    return (
                      <li key={category}>
                        <Link
                          href={`/category/${category}`}
                          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          {category}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </details>
            </li>

            <li>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/products"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/production"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Production
              </Link>
            </li>
            {/* <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm font-medium"> Account </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  {user?.data ? (
                    <>
                      <button
                        type="submit"
                        onClick={() => {
                          handleLogout();
                          setIsOpen(false);
                        }}
                        className="w-full cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href={"/loginpage"}
                        onClick={() => setIsOpen(false)}
                      >
                        <button
                          type="submit"
                          className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                        >
                          Login
                        </button>
                      </Link>
                      <Link
                        href={"/signupPage"}
                        onClick={() => setIsOpen(false)}
                      >
                        <button
                          type="submit"
                          className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                        >
                          Register
                        </button>
                      </Link>
                    </>
                  )}
                </ul>
              </details>
            </li> */}
          </ul>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <span className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
            <div>
              {user?.data ? (
                <p className="text-xs">
                  <strong className="block font-medium">{name}</strong>

                  <span> {user?.data?.email} </span>
                </p>
              ) : (
                <p className="text-xs">
                  <strong className="block font-medium">
                    Welcome to our Trident store
                  </strong>
                </p>
              )}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
