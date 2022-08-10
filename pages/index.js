import PageTwo from "../components/addtocart/index";
import React, { useState } from "react";
import Image from "next/image";

import OutsideClick from "@alphasquad/outside-click";

const Index = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isList, setIsList] = useState(false);
  const [isList2, setIsList2] = useState(false);
  const [isList3, setIsList3] = useState(false);
  const [isList4, setIsList4] = useState(false);
  const [hide, setHide] = useState(false);
  const [hide1, setHide1] = useState(false);
  const [count1, setCount1] = useState(1);

  const [count12, setCount12] = useState(0);
  const [hide2, setHide2] = useState(false);
  const [hide3, setHide3] = useState(false);
  const [hide4, setHide4] = useState(false);
  const [hide5, setHide5] = useState(false);
  const [hide6, setHide6] = useState(false);

  return (
    <>
      <div className="justify-center  mx-auto">
        <div className="  relative">
          <div className="flex flex-wrap justify-between items-center sm:px-20 space-x-74 px-4 py-4 ">
            <Image
              src="/Group.png"
              width={56}
              height={72}
              className="my-auto cursor-pointer"
            />
            <button
              className="ml-auto block xl:hidden"
              onClick={() => setShowMenu(!showMenu)}
            >
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="30px"
                height="30px"
              >
                <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
              </svg>
            </button>
            <ul className="xl:flex hidden  space-x-32  ">
              <li
                className="  cursor-pointer relative flex-none max-w-28"
                onClick={() => setIsList4(!isList4)}
              >
                <div className="flex items-center ">
                  <a className="font-normal text-base leading-4 font-['Poppins'] pr-2 ">
                    Bedroom
                  </a>
                  <div className="pb-2">
                    <Image
                      src="/Vector.png"
                      width={8}
                      height={4}
                      className="my-auto"
                    />
                  </div>
                </div>

                <ul
                  className={`${
                    isList4 ? "  flex-col " : "hidden"
                  } absolute left-0 right-0 z-20 bg-white p-6  w-64 shadow-4xl `}
                >
                  <il className="pt-4 text-gray-600 hover:text-gray-400">
                    Beds
                  </il>
                  <li className=" text-gray-600 pt-4 hover:text-gray-400">
                    Bed Sets
                  </li>
                  <li className="pt-4 text-gray-600 hover:text-gray-400">
                    Bridal
                  </li>
                  <li className="text-gray-600 hover:text-gray-400 pt-4">
                    Chesters
                  </li>
                  <li className="pt-4 text-gray-600 hover:text-gray-400">
                    Dresser
                  </li>
                  <li className="text-gray-600 hover:text-gray-400 pt-4">
                    Shelves
                  </li>
                  <li className="pt-4 text-gray-600 hover:text-gray-400">
                    Side Tables
                  </li>
                  <li className="text-gray-600 hover:text-gray-400 pt-4">
                    {" "}
                    Closets
                  </li>
                </ul>
              </li>
              <li
                className=" cursor-pointer relative flex-none max-w-28"
                onClick={() => setIsList(!isList)}
              >
                <div className="flex items-center ">
                  <a className="font-normal text-base leading-4 font-['Poppins'] pr-2 ">
                    Living Room
                  </a>
                  <div className="pb-2">
                    <Image
                      src="/Vector.png"
                      width={8}
                      height={4}
                      className="my-auto"
                    />
                  </div>
                </div>

                <ul
                  className={`${
                    isList ? "  flex-col " : "hidden"
                  } absolute left-0 right-0 z-20 bg-white p-6  w-64 shadow-4xl `}
                >
                  <il className="pt-4 text-gray-600 hover:text-gray-400">
                    Beds
                  </il>
                  <li className="text-gray-600 hover:text-gray-400 pt-4">
                    Bed Sets
                  </li>
                  <li className="pt-4 text-gray-600 hover:text-gray-400">
                    Bridal
                  </li>
                  <li className="pt-4 text-gray-600 hover:text-gray-400">
                    Chesters
                  </li>
                  <li className="pt-4 text-gray-600 hover:text-gray-400">
                    Dresser
                  </li>
                  <li className="text-gray-600 hover:text-gray-400 pt-4">
                    Shelves
                  </li>
                  <li className="pt-4 text-gray-600 hover:text-gray-400">
                    Side Tables
                  </li>
                  <li className=" pt-4 text-gray-600 hover:text-gray-400">
                    {" "}
                    Closets
                  </li>
                </ul>
              </li>
              <li
                className="cursor-pointer relative  flex-none max-w-28"
                onClick={() => setIsList2(!isList2)}
              >
                <div className="flex items-center ">
                  <a className="font-normal text-base leading-4 font-['Poppins'] text-gray-800">
                    Dining & Kitchen{" "}
                  </a>
                  <div className="pb-2">
                    <Image
                      src="/Vector.png"
                      width={8}
                      height={4}
                      className="my-auto"
                    />
                  </div>
                </div>

                <ul
                  className={`${
                    isList2 ? "  flex-col " : "hidden"
                  } absolute left-0 right-0 z-20 bg-white p-6 w-36  shadow-4xl`}
                >
                  <il className="pt-4 text-gray-600 hover:text-gray-400">
                    Beds
                  </il>
                  <li className=" pt-4 text-gray-600 hover:text-gray-400">
                    Bed Sets
                  </li>
                  <li className="pt-4 text-gray-600 hover:text-gray-400">
                    Bridal
                  </li>
                  <li className="text-gray-600 pt-4 hover:text-gray-400">
                    Chesters
                  </li>
                  <li className="pt-4 text-gray-600 hover:text-gray-400">
                    Dresser
                  </li>
                  <li className=" pt-4 text-gray-600 hover:text-gray-400">
                    Shelves
                  </li>
                  <li className="pt-4 text-gray-600 hover:text-gray-400">
                    Side Tables
                  </li>
                  <li className="text-gray-600 hover:text-gray-400 pt-4">
                    {" "}
                    Closets
                  </li>
                </ul>
              </li>

              <li
                className="cursor-pointer relative flex-none flex none max-w-28"
                onClick={() => setIsList3(!isList3)}
              >
                <div className="flex items-center ">
                  <a className="font-normal text-base leading-4 font-['Poppins'] pr-2 ">
                    Office
                  </a>
                  <div className="pb-2">
                    <Image
                      src="/Vector.png"
                      width={8}
                      height={4}
                      className="my-auto"
                    />
                  </div>
                </div>

                <ul
                  className={`${
                    isList3 ? "  flex-col " : "hidden"
                  }  p-6 absolute left-0 right-0 z-20 bg-white w-36  shadow-4xl`}
                >
                  <il className="pt-4 text-gray-600 hover:text-gray-400">
                    Beds
                  </il>
                  <li className=" pt-4 text-gray-600 hover:text-gray-400">
                    Bed Sets
                  </li>
                  <li className="pt-4 text-gray-600 hover:text-gray-400">
                    Bridal
                  </li>
                  <li className="pt-4 text-gray-600 hover:text-gray-400">
                    Chesters
                  </li>
                  <li className="pt-4 text-gray-600 hover:text-gray-400">
                    Dresser
                  </li>
                  <li className="text-gray-600 hover:text-gray-400 pt-4">
                    Shelves
                  </li>
                  <li className="pt-4 text-gray-600 hover:text-gray-400">
                    Side Tables
                  </li>
                  <li className="text-gray-600 hover:text-gray-400 pt-4">
                    {" "}
                    Closets
                  </li>
                </ul>
              </li>
            </ul>
            <ul
              className={`${
                showMenu ? " xl:hidden flex " : "hidden"
              } flex-col w-full px-8 bg-blue-50 rounded-xl my-6  `}
            >
              <li
                className="pr-8  cursor-pointer relative pb-4 pt-8"
                onClick={() => setIsList4(!isList4)}
              >
                <div className="flex items-center ">
                  <a className="font-normal text-base leading-4 font-['Poppins'] pr-2 ">
                    Bed Room
                  </a>
                  <div className="pb-2">
                    <Image
                      src="/Vector.png"
                      width={8}
                      height={4}
                      className="my-auto"
                    />
                  </div>
                </div>

                <ul
                  className={`${
                    isList4 ? "  flex-col " : "hidden"
                  }  z-20 bg-white p-6  shadow-4xl`}
                >
                  <il className="py-4 text-gray-600  hover:text-gray-400 ">
                    Beds
                  </il>
                  <li className=" text-gray-600  hover:text-gray-400">
                    Bed Sets
                  </li>
                  <li className="py-4 text-gray-600  hover:text-gray-400">
                    Bridal
                  </li>
                  <l className="text-gray-600">Chesters</l>
                  <li className="py-4 text-gray-600  hover:text-gray-400">
                    Dresser
                  </li>
                  <li className="text-gray-600  hover:text-gray-400">
                    Shelves
                  </li>
                  <li className="py-4 text-gray-600  hover:text-gray-400">
                    Side Tables
                  </li>
                  <li className="text-gray-600  hover:text-gray-400">
                    {" "}
                    Closets
                  </li>
                </ul>
              </li>
              <li
                className="pr-8  cursor-pointer relative "
                onClick={() => setIsList(!isList)}
              >
                <div className="flex items-center ">
                  <a className="font-normal text-base leading-4 font-['Poppins'] pr-2 ">
                    Living Room
                  </a>
                  <div className="pb-2">
                    <Image
                      src="/Vector.png"
                      width={8}
                      height={4}
                      className="my-auto"
                    />
                  </div>
                </div>

                <ul
                  className={`${
                    isList ? "  flex-col " : "hidden"
                  } z-20 bg-white p-6  shadow-4xl`}
                >
                  <il className="py-4 text-gray-600  hover:text-gray-400 ">
                    Beds
                  </il>
                  <li className="text-gray-600  hover:text-gray-400">
                    Bed Sets
                  </li>
                  <li className="py-4 text-gray-600  hover:text-gray-400">
                    Bridal
                  </li>
                  <l className="text-gray-600  hover:text-gray-400">Chesters</l>
                  <li className="py-4 text-gray-600  hover:text-gray-400">
                    Dresser
                  </li>
                  <li className="text-gray-600  hover:text-gray-400">
                    Shelves
                  </li>
                  <li className="py-4 text-gray-600  hover:text-gray-400">
                    Side Tables
                  </li>
                  <li className="text-gray-600  hover:text-gray-400">
                    {" "}
                    Closets
                  </li>
                </ul>
              </li>
              <li
                className="pr-8  cursor-pointer relative py-4"
                onClick={() => setIsList2(!isList2)}
              >
                <div className="flex items-center ">
                  <a className="font-normal text-base leading-4 font-['Poppins'] pr-2 ">
                    Dining & Kitchen{" "}
                  </a>
                  <div className="pb-2">
                    <Image
                      src="/Vector.png"
                      width={8}
                      height={4}
                      className="my-auto"
                    />
                  </div>
                </div>

                <ul
                  className={`${
                    isList2 ? "  flex-col " : "hidden"
                  } z-20 bg-white p-6  shadow-4xl`}
                >
                  <il className="py-4 text-gray-600  hover:text-gray-400 ">
                    Beds
                  </il>
                  <li className="text-gray-600  hover:text-gray-400">
                    Bed Sets
                  </li>
                  <li className="py-4 text-gray-600  hover:text-gray-400">
                    Bridal
                  </li>
                  <l className="text-gray-600  hover:text-gray-400">Chesters</l>
                  <li className="py-4 text-gray-600  hover:text-gray-400">
                    Dresser
                  </li>
                  <li className="text-gray-600  hover:text-gray-400">
                    Shelves
                  </li>
                  <li className="py-4 text-gray-600  hover:text-gray-400">
                    Side Tables
                  </li>
                  <li className="text-gray-600  hover:text-gray-400">
                    {" "}
                    Closets
                  </li>
                </ul>
              </li>

              <li
                className="pr-8  cursor-pointer relative pb-8"
                onClick={() => setIsList3(!isList3)}
              >
                <div className="flex items-center ">
                  <a className="font-normal text-base leading-4 font-['Poppins'] pr-2 ">
                    Office
                  </a>
                  <div className="pb-2">
                    <Image
                      src="/Vector.png"
                      width={8}
                      height={4}
                      className="my-auto"
                    />
                  </div>
                </div>

                <ul
                  className={`${
                    isList3 ? "  flex-col " : "hidden"
                  }  p-6  z-20 bg-white  shadow-4xl`}
                >
                  <il className="py-4 text-gray-600  hover:text-gray-400">
                    Beds
                  </il>
                  <li className=" text-gray-600  hover:text-gray-400">
                    Bed Sets
                  </li>
                  <li className="py-4 text-gray-600  hover:text-gray-400">
                    Bridal
                  </li>
                  <l className="text-gray-600  hover:text-gray-400">Chesters</l>
                  <li className="py-4 text-gray-600  hover:text-gray-400">
                    Dresser
                  </li>
                  <li className="text-gray-600  hover:text-gray-400">
                    Shelves
                  </li>
                  <li className="py-4 text-gray-600  hover:text-gray-400">
                    Side Tables
                  </li>
                  <li className="text-gray-600  hover:text-gray-400">
                    {" "}
                    Closets
                  </li>
                </ul>
              </li>
            </ul>
            <div className="xl:flex hidden">
              <div className="flex gap-4 items-center justify-center cursor-pointer group">
                <input
                  type="text"
                  id="furniture"
                  name="furniture"
                  className=" px-1 rounded-lg py-0.5 border border-gray-300 group-hover:border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Furniture...."
                  required
                />
                <div>
                  <Image src="/Group 6.png" width={20} height={20} />
                </div>
              </div>
              <div className="flex pl-8">
                <div>
                  <Image
                    src="/Group 260.png"
                    width={20}
                    height={20}
                    onClick={() => setHide1(true)}
                    className="cursor-pointer"
                  />
                </div>
                <div>
                  <p
                    id="count"
                    className="text-gray-800 cursor-pointer  leading-none -mt-2 ml-1"
                  >
                    {count12}
                  </p>
                </div>
              </div>
            </div>
            {hide1 && (
              <div className="w-full mx-auto px-20 bg-white py-56  fixed top-0 left-0 right-0 z-20">
                <div className="flex justify-between">
                  <div className="">
                    <div>
                      <p className="text-4xl  font-semibold text-gray-800  w-128">
                        Dining Chair Rocco in Bottle Green Velvet
                      </p>
                      <div className="items-center flex my-5 text-center gap-x-6">
                        <div className="flex gap-x-4  items-center my-auto text-center">
                          <div className="mt-2 cursor-pointer">
                            <Image
                              src="/Vectorstar.png"
                              width={22}
                              height={21}
                            />
                          </div>
                          <div className="mt-2 cursor-pointer">
                            <Image
                              src="/Vectorstar.png"
                              width={22}
                              height={21}
                            />
                          </div>
                          <div className="mt-2 cursor-pointer">
                            <Image
                              src="/Vectorstar.png"
                              width={22}
                              height={21}
                            />
                          </div>
                          <div className="mt-2 cursor-pointer">
                            <Image
                              src="/Vectorstar.png"
                              width={22}
                              height={21}
                            />
                          </div>
                          <div className="mt-2 cursor-pointer">
                            <Image
                              src="/Vectorstar.png"
                              width={22}
                              height={21}
                            />
                          </div>
                        </div>
                        <p className="font-medium text-2xl my-auto text-center">
                          (0)
                        </p>
                      </div>
                      <p className="text-4xl  font-semibold text-gray-800 pb-12">
                        $259
                      </p>
                    </div>
                    <ul>
                      <li>
                        <div className="flex items-center">
                          <p className="font-medium text-xl pr-4 my-auto text-gray-600">
                            Vendor:
                          </p>
                          <p className="text-2xl font-medium my-auto text-gray-800">
                            Luxe
                          </p>
                        </div>
                      </li>
                      <li className="py-6">
                        <div className="flex items-center">
                          <p className="font-medium text-xl pr-10 text-gray-600 my-auto">
                            Type:
                          </p>
                          <p className="text-2xl font-medium text-gray-800 my-auto">
                            Wooden
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="flex pb-6 items-center">
                          <p className="font-medium text-xl pr-7 my-auto text-gray-600">
                            Model:
                          </p>
                          <p className="text-2xl font-medium my-auto text-gray-800">
                            WD1234
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="flex pb-6 items-center">
                          <p className="font-medium text-xl  my-auto pr-6 text-gray-600">
                            Status:
                          </p>
                          <p className="text-2xl font-medium text-gray-800 my-auto">
                            Availabe
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className="flex gap-6 mt-12">
                      <div className=" border border-gray-300 flex justify-center flex-row justify-between py-5 px-6   items-center w-28 bg-yellow-50 rounded-xl">
                        <p
                          id="count"
                          className="text-gray-800 cursor-pointer  leading-none font-medium text-2xl"
                        >
                          {count1}
                        </p>
                        <div className="flex flex-col gap-y-4 }">
                          <Image
                            src="/Vectorup.png"
                            width={12}
                            height={7}
                            className="rounded-xl"
                            onClick={() => setCount1(count1 + 1)}
                          />
                          <Image
                            src="/Vectordown.png"
                            width={12}
                            height={7}
                            className="rounded-xl mt-4"
                            onClick={() =>
                              setCount1(count1 - 1 < 0 ? 0 : count1 - 1)
                            }
                          />
                        </div>
                      </div>
                      <button className=" py-5 px-6 text-white bg-gray-800 rounded-xl hover:bg-gray-600 text-2xl font-medium">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  <div>
                    <Image
                      src="/Group 347.png"
                      width={548}
                      height={546}
                      className="rounded-xl mx-auto sm:mt-0 "
                    />
                  </div>
                </div>

                <button
                  className="text-gray-800 absolute right-5 top-10 "
                  onClick={() => setHide1(false)}
                >
                  <Image
                    src="/Vectorcross.png"
                    width={24}
                    height={24}
                    className="rounded-xl group-hover:opacity-40 mx-auto"
                  />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="pt-20 bg-rose-50 sm:px-20 px-5 sm:py-20 py-2  justify-center">
          <div className="container lg:flex justify-between mx-auto">
            <div className="sm:pt-20 pt-5  pr-8 ">
              <h1 className="lg:text-6xl text-5xl  xl:w-128 w-full leading-15  font-semibold text-gray-800">
                The Glory Cambalk furniture
              </h1>
              <div className="xl:w-128">
                <p className="pt-4  text-base font-normal leading-6 pt-4 pb-10 text-gray-600 ">
                  Avoid the hassle of physically visiting a store and order your
                  favorite product with a few clicks online for the best wood
                  furniture design. Free delivery is available.
                </p>
              </div>
              <button className="sm:text-2xl text-xl font-medium cursor-pointer bg-gray-800 text-white sm:py-7 py-4 sm:px-10 px-6 rounded-xl hover:bg-gray-700">
                Shop Now
              </button>
            </div>
            <div>
              <Image
                src="/image 5n.png"
                width={549}
                height={491}
                className="pb-20   mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="px-20 lg:flex items-center justify-center pt-20 container mx-auto pb-28">
          <h2 className="text-gray-800 text-4xl font-semibold lg:w-6/12 2xl:w-full  sm:pb-0 pb-10 ">
            Why Choose Us?
          </h2>
          <div className="justify-center flex flex-col items-center lg:w-6/12 2xl:w-full">
            <div className="bg-teal-100  justify-center text-center w-52 h-52 items-center my-auto  mb-4 py-14 px-8  rounded-full outline-offset-4 outline-2 outline-dashed outline-teal-200">
              <Image src="/Group 297.png" width={22} height={18} />
              <p className="font-medium "> SAFE SHIPPING</p>
              <p className="text-gray-600 ">
                In all major cities across the country
              </p>
            </div>
            <div className="sm:flex gap-x-24 justify-center">
              <div className=" sm:mb-0 mb-4 mr-0 bg-rose-50 justify-center text-center  py-14 px-18 h-52 w-52 rounded-full outline-offset-4 outline-2 outline-dashed outline-rose-400">
                <Image src="/Group dollar.png" width={10} height={18} />
                <p className="font-medium "> COMPETITIVE PRICES</p>
                <p className="text-gray-600 px-6">
                  Quality with affordability ensured
                </p>
              </div>
              <div className="bg-rose-50 justify-center text-center  py-14 px-18 h-52 w-52   rounded-full outline-offset-4 outline-2 outline-dashed outline-rose-400">
                <Image src="/Group clock.png" width={18} height={18} />
                <p className="font-medium "> CUSTOMER SUPPORT</p>
                <p className="text-gray-600 px-8">
                  Call us anytime: 111-111-1111
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" px-20">
          <div className=" justify-center container mx-auto">
            <h3 className="text-gray-800 font-semibold text-4xl mx-auto ">
              New Arrivals
            </h3>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-16 pb-8 mx-auto gap-8">
              <div className=" flex flex-col">
                <Image
                  src="/Rectangle 7n.png"
                  width={296}
                  height={346}
                  className="rounded-xl"
                />
                <div className="flex ">
                  <p className="font-medium text-gray-600">Sofa</p>
                  <p className="text-gray-800 font-medium md:text-xl text-md ml-auto">
                    $220
                  </p>
                </div>
              </div>
              <div className=" flex flex-col">
                <Image
                  src="/Rectangle 8.png"
                  width={296}
                  height={346}
                  className="rounded-xl"
                />

                <div className="flex justify-between">
                  <p className="font-medium text-gray-600">Lamp</p>
                  <p className="text-gray-800 font-medium md:text-xl text-md">
                    $90
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <Image
                  src="/Rectangle 9.png"
                  width={296}
                  height={346}
                  className="rounded-xl"
                />
                <div className="flex ">
                  <p className="font-medium text-gray-600">Dining Table</p>
                  <p className="text-gray-800 font-medium md:text-xl text-md ml-auto">
                    $250
                  </p>
                </div>
              </div>
              <div className=" flex flex-col">
                <Image
                  src="/Rectangle 15.png"
                  width={296}
                  height={346}
                  className="rounded-xl"
                />
                <div className="flex justify-between">
                  <p className="font-medium text-gray-600">Office Chair</p>
                  <p className="text-gray-800 font-medium md:text-xl text-md">
                    $320
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex py-20 justify-center ">
          <div className="lg:flex container justify-center mx-auto">
            <div className="mt-28 pl-28 mr-24 xl:w-6/12 2xl:w-full ">
              <p className="font-semibold text-4xl text-gray-800 pr-4  font-['Poppins']">
                Dining Chair Rocco in Bottle Green Velvet
              </p>
              <button className="py-5 mt-12 px-8 bg-gray-800 text-2xl hover:bg-gray-700 cursor-pointer text-white font-medium rounded-md">
                Explore
              </button>
            </div>
            <div className="xl:w-6/12 2xl:w-full  mx-auto sm:mt-0 mt-8">
              <Image
                src="/Group 307.png"
                width={448}
                height={446}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="mb-28 relative container justify-center mx-auto justify-center">
          <p className="font-semibold  pb-16 text-4xl text-gray-800 pr-4  font-['Poppins'] ">
            40% off Products
          </p>
          {hide && (
            <div
              className="py-12 dark:bg-black bg-gray-300 bg-opacity-70 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center"
              id="modal"
            >
              <div className="flex  mx-auto">
                <Image
                  src="/Rectangle 31n.png"
                  width={1000}
                  height={1000}
                  className="rounded-xl group-hover:opacity-40 mx-auto"
                />
                <button
                  className="text-gray-800 absolute right-5 top-5"
                  onClick={() => setHide(false)}
                >
                  <Image
                    src="/Vectorcross.png"
                    width={24}
                    height={24}
                    className="rounded-xl group-hover:opacity-40 mx-auto"
                  />
                </button>
              </div>
            </div>
          )}
          {hide2 && (
            <div
              className="py-12 dark:bg-black bg-gray-300 bg-opacity-70 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center"
              id="modal"
            >
              <div className="flex  mx-auto">
                <Image
                  src="/Rectangle 32n.png"
                  width={1000}
                  height={1000}
                  className="rounded-xl group-hover:opacity-40 mx-auto"
                />
                <button
                  className="text-gray-800 absolute right-5 top-5"
                  onClick={() => setHide2(false)}
                >
                  <Image
                    src="/Vectorcross.png"
                    width={24}
                    height={24}
                    className="rounded-xl group-hover:opacity-40 mx-auto"
                  />
                </button>
              </div>
            </div>
          )}
          {hide3 && (
            <div
              className="py-12 dark:bg-black bg-gray-300 bg-opacity-70 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center"
              id="modal"
            >
              <div className="flex  mx-auto">
                <Image
                  src="/Rectangle 33n.png"
                  width={1000}
                  height={1000}
                  className="rounded-xl group-hover:opacity-40 mx-auto"
                />
                <button
                  className="text-gray-800 absolute right-5 top-5"
                  onClick={() => setHide3(false)}
                >
                  <Image
                    src="/Vectorcross.png"
                    width={24}
                    height={24}
                    className="rounded-xl group-hover:opacity-40 mx-auto"
                  />
                </button>
              </div>
            </div>
          )}
          {hide4 && (
            <div
              className="py-12 dark:bg-black bg-gray-300 bg-opacity-70 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center"
              id="modal"
            >
              <div className="flex  mx-auto">
                <Image
                  src="/Rectangle 23n.png"
                  width={1000}
                  height={1000}
                  className="rounded-xl group-hover:opacity-40 mx-auto"
                />
                <button
                  className="text-gray-800 absolute right-5 top-5"
                  onClick={() => setHide4(false)}
                >
                  <Image
                    src="/Vectorcross.png"
                    width={24}
                    height={24}
                    className="rounded-xl group-hover:opacity-40 mx-auto"
                  />
                </button>
              </div>
            </div>
          )}
          {hide5 && (
            <div
              className="py-12 dark:bg-black bg-gray-300 bg-opacity-70 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center"
              id="modal"
            >
              <div className="flex  mx-auto">
                <Image
                  src="/Rectangle 18n.png"
                  width={1000}
                  height={1000}
                  className="rounded-xl group-hover:opacity-40 mx-auto"
                />
                <button
                  className="text-gray-800 absolute right-5 top-5"
                  onClick={() => setHide5(false)}
                >
                  <Image
                    src="/Vectorcross.png"
                    width={24}
                    height={24}
                    className="rounded-xl group-hover:opacity-40 mx-auto"
                  />
                </button>
              </div>
            </div>
          )}
          {hide6 && (
            <div
              className="py-12 dark:bg-black bg-gray-300 bg-opacity-70 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center"
              id="modal"
            >
              <div className="flex  mx-auto">
                <Image
                  src="/Rectangle 30n.png"
                  width={1000}
                  height={1000}
                  className="rounded-xl group-hover:opacity-40 mx-auto"
                />
                <button
                  className="text-gray-800 absolute right-5 top-5"
                  onClick={() => setHide6(false)}
                >
                  <Image
                    src="/Vectorcross.png"
                    width={24}
                    height={24}
                    className="rounded-xl group-hover:opacity-40 mx-auto"
                  />
                </button>
              </div>
            </div>
          )}
          <div className="grid lg:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-8 mx-auto justify-center">
            <div>
              <div className=" px-10 flex flex-col pb-10 mb-8 bg-red-50 pt-32 relative rounded-xl">
                <div className="mb-8 absolute z-6 top-0 2xl:left-20  -mt-1">
                  <Image
                    src="/Rectangle 21.svg"
                    width={96}
                    height={96}
                    className="rounded-xl  "
                  />

                  <p className="text-xl font-medium absolute   text-gray-800 absolute top-6 left-1/2 transform -translate-x-1/2 ">
                    Beds
                  </p>
                </div>
                <div className=" group  mx-auto flex  justify-center items-center relative 2xl:w-325">
                  <Image
                    src="/Rectangle 18.png"
                    width={325}
                    height={642}
                    objectFit="contain"
                    className="rounded-xl absolute "
                  />

                  <div className=" rounded-xl flex justify-center items-center opacity-0 ease-in-out transition duration-500 group-hover:opacity-60 bg-gray-800 h-full w-full absolute top-0"></div>
                  <div className="flex flex-col absolute opacity-0 group-hover:opacity-100  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button
                      className="lg:py-4 py-3 px-4 lg:px-6  bg-white text-gray-800 rounded-md  hover:bg-gray-300"
                      onClick={() => setHide5(true)}
                    >
                      Preview
                    </button>
                    <button
                      className="md:py-4 py-3 px-3 lg:px-4 xl:px-6   bg-white text-gray-800 xl:mt-6 mt-4 rounded-md hover:bg-gray-300"
                      onClick={() => setCount12(count12 + 1)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className=" px-10 flex flex-col pb-10 bg-red-50 pt-32 relative rounded-xl">
                <div className="mb-8 absolute z-6 top-0 2xl:left-20  -mt-1">
                  <Image
                    src="/Rectangle 21.svg"
                    width={96}
                    height={96}
                    className="rounded-xl  "
                  />

                  <p className="text-xl font-medium  absolute top-6 left-1/2 transform -translate-x-1/2">
                    Sofas
                  </p>
                </div>
                <div
                  className=" group 
                    flex w-full items-center w-full mx-auto rounded-xl  justify-center relative  2xl:w-325"
                >
                  <Image
                    src="/Rectangle 30.png"
                    width={325}
                    height={237}
                    objectFit="contain"
                    className="rounded-xl absolute "
                  />
                  <div className=" rounded-xl flex justify-center items-center opacity-0 ease-in-out transition duration-500 group-hover:opacity-60 bg-gray-800 h-full w-full absolute top-0"></div>

                  <div className="flex flex-col absolute opacity-0 group-hover:opacity-100  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button
                      className="lg:py-4 py-3 px-4 lg:px-6  bg-white text-gray-800 rounded-md  hover:bg-gray-300"
                      onClick={() => setHide6(true)}
                    >
                      Preview
                    </button>
                    <button
                      className="md:py-4 py-3 px-3 lg:px-4 xl:px-6   bg-white text-gray-800 xl:mt-6 lg:mt-0.5 mt-6 rounded-md hover:bg-gray-300"
                      onClick={() => setCount12(count12 + 1)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=" px-10 flex flex-col pb-10 bg-red-50 pt-32 mb-8 relative rounded-xl">
                <div className="mb-8 absolute z-6 top-0 2xl:left-20  -mt-1">
                  <Image
                    src="/Rectangle 21.svg"
                    width={96}
                    height={96}
                    className="rounded-xl  "
                  />

                  <p className="text-xl font-medium  absolute top-6 left-1/2 transform -translate-x-1/2">
                    Dining
                  </p>
                </div>
                <div
                  className=" group mx-auto
                  2xl:w-325  justify-center relative flex"
                >
                  <Image
                    src="/Rectangle 23.png"
                    width={326}
                    height={237}
                    className="rounded-xl absolute"
                  />
                  <div className=" rounded-xl flex justify-center items-center opacity-0 ease-in-out transition duration-500 group-hover:opacity-60 bg-gray-800 h-full w-full absolute top-0"></div>

                  <div className="flex flex-col absolute opacity-0 group-hover:opacity-100  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button
                      className="lg:py-4 py-3 px-4 lg:px-6  bg-white text-gray-800 rounded-md  hover:bg-gray-300"
                      onClick={() => setHide4(true)}
                    >
                      Preview
                    </button>
                    <button
                      className="md:py-4 py-3 px-3 lg:px-4 xl:px-6   bg-white text-gray-800  xl:mt-6 lg:mt-0.5 mt-6 rounded-md hover:bg-gray-300"
                      onClick={() => setCount12(count12 + 1)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className=" px-10 flex flex-col pb-10 bg-red-50 pt-32 relative rounded-xl">
                <div className="mb-8 absolute z-6 top-0 2xl:left-20  -mt-1">
                  <Image
                    src="/Rectangle 21.svg"
                    width={96}
                    height={96}
                    className="rounded-xl  "
                  />

                  <p className="text-xl font-medium  absolute top-6 left-1/2 transform -translate-x-1/2">
                    Closet
                  </p>
                </div>
                <div
                  className=" group mx-auto
                    2xl:w-325 flex  justify-center relative "
                >
                  <Image
                    src="/Rectangle 32.png"
                    width={325}
                    height={642}
                    className="rounded-xl"
                  />
                  <div className=" rounded-xl flex justify-center items-center opacity-0 ease-in-out transition duration-500 group-hover:opacity-60 bg-gray-800 h-full w-full absolute top-0"></div>

                  <div className="flex flex-col absolute opacity-0 group-hover:opacity-100  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button
                      className="lg:py-4 py-3 px-4 lg:px-6  bg-white text-gray-800 rounded-md  hover:bg-gray-300"
                      onClick={() => setHide2(true)}
                    >
                      Preview
                    </button>
                    <button
                      className="md:py-4 py-3 px-3 lg:px-4 xl:px-6   bg-white text-gray-800 mt-6 rounded-md hover:bg-gray-300"
                      onClick={() => setCount12(count12 + 1)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=" px-10 flex flex-col pb-10 bg-red-50 pt-32 mb-8 relative rounded-xl">
                <div className="mb-8 absolute z-6 top-0 2xl:left-20  -mt-1">
                  <Image
                    src="/Rectangle 21.svg"
                    width={96}
                    height={96}
                    className="rounded-xl  "
                  />

                  <p className="text-xl font-medium  absolute top-6 left-1/2 transform -translate-x-1/2">
                    Chairs
                  </p>
                </div>

                <div
                  className=" group  mx-auto
                    flex  justify-center relative 2xl:w-325 "
                >
                  <Image
                    src="/Rectangle 31.png"
                    width={325}
                    height={642}
                    className="rounded-xl absolute"
                  />
                  <div className=" rounded-xl flex justify-center items-center opacity-0 ease-in-out transition duration-500 group-hover:opacity-60 bg-gray-800 h-full w-full absolute top-0"></div>

                  <div className="flex flex-col absolute opacity-0 group-hover:opacity-100  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button
                      className="lg:py-4 py-3 px-4 lg:px-6  bg-white text-gray-800 rounded-md  hover:bg-gray-300"
                      onClick={() => setHide(true)}
                    >
                      Preview
                    </button>
                    <button
                      className="md:py-4 py-3 px-3 lg:px-4 xl:px-6   bg-white text-gray-800 mt-6 rounded-md hover:bg-gray-300"
                      onClick={() => setCount12(count12 + 1)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className=" px-10 flex flex-col pb-10 bg-red-50 pt-32 relative rounded-xl">
                <div className="mb-8 absolute z-6 top-0 2xl:left-20  -mt-1">
                  <Image
                    src="/Rectangle 21.svg"
                    width={96}
                    height={96}
                    className="rounded-xl  "
                  />

                  <p className="text-xl font-medium  absolute top-6 left-1/2 transform -translate-x-1/2">
                    Tables
                  </p>
                </div>
                <div
                  className=" group mx-auto
                    flex 2xl:w-325 justify-center relative "
                >
                  <Image
                    src="/Rectangle 33.png"
                    width={325}
                    height={237}
                    className="rounded-xl absolute"
                  />
                  <div className=" rounded-xl flex justify-center items-center opacity-0 ease-in-out transition duration-500 group-hover:opacity-60 bg-gray-800 h-full w-full absolute top-0"></div>

                  <div className="flex flex-col absolute opacity-0 group-hover:opacity-100  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button
                      className="lg:py-4 py-3 px-4 lg:px-6  bg-white text-gray-800 rounded-md  hover:bg-gray-300"
                      onClick={() => setHide3(true)}
                    >
                      Preview
                    </button>
                    <button
                      className="md:py-4 py-3 px-3 lg:px-4 xl:px-6   bg-white text-gray-800  xl:mt-6 lg:mt-0.5 mt-6 rounded-md hover:bg-gray-300"
                      onClick={() => setCount12(count12 + 1)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" pb-24 container justify-center mx-auto">
          <p className="font-semibold  text-4xl text-gray-800 pr-4  sm:mb-16 mb-8">
            Top Selling Items
          </p>
          <div>
            <div className="lg:flex justify-center items-center mx-auto">
              <div className=" lg:w-8/12 ">
                <Image
                  src="/Rectangle 13.png"
                  width={624}
                  height={400}
                  className="rounded-xl"
                />
              </div>
              <div className=" lg:w-5/12 xl:ml-10 lg:ml-8 text-left">
                <p className="font-semibold  sm:text-4xl text-3xl pb-4 mt:md-0 mt-8 2xl:w-9/12 ">
                  Lorem ipsum dolor sit amet
                </p>
                <p className="text-gray-600 mb-10 w-404">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="px-9 text-white sm:py-6 py-4 bg-gray-800 hover:bg-gray-700 cursor-pointer rounded-xl sm:text-xl  text-lg font-medium">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex  justify-between items-center pb-20 container mx-auto ">
          <div className="xl:mb-0 mb-6 lg:w-4/12 lg:mr-16 xl:mr-42 ml-auto ml-32">
            <p className="font-semibold text-4xl pb-4 2xl:w-11/12">
              Lorem ipsum dolor sit amet
            </p>
            <p className="text-gray-600 sm:mb-10 mb-6  xl:w-404">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="px-9 text-white sm:py-6 py-4 bg-gray-800 hover:bg-gray-700 cursor-pointer rounded-xl sm:text-xl  text-lg  font-medium">
              Learn more
            </button>
          </div>
          <div className=" lg:w-7/12  ml-64 items-right ">
            <Image
              src="/Rectangle 145.png"
              width={624}
              height={400}
              className="rounded-xl  "
            />
          </div>
        </div>
        <div className="container justify-center mx-auto mb-16">
          <p className="font-semibold text-4xl pb-16">Certified By</p>
          <div className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2  sm:gap-48 gap-36">
            <Image
              src="/Californiasfurnitureinstallation Logo.svg"
              width={99}
              height={40}
            />
            <Image src="/Urban Galleria Logo.svg" width={99} height={40} />
            <Image src="/Group 344.svg" width={99} height={40} />{" "}
            <Image src="/Furniture Today Logo.svg" width={99} height={40} />
            <Image src="/Vectorb.svg" width={99} height={40} />
          </div>
        </div>
        <div className="grid lg:grid-cols-4  md:grid-cols-3  grid-cols-1 gap-3 px-20 bg-slate-50 pt-16 pb-9 mb-8">
          <div>
            <p className="font-medium text-2xl text-gray-800 pb-8  cursor-pointer">
              Information
            </p>
            <ul>
              <li className="text-gray-600 font-normal leading-4 pb-4  cursor-pointer">
                About
              </li>
              <li className="text-gray-600 font-normal leading-4  pb-4  cursor-pointer">
                Store Locator
              </li>
              <li className="text-gray-600 font-normal leading-4  pb-4  cursor-pointer">
                Virtual Tour
              </li>
              <li className="text-gray-600 font-normal leading-4  pb-4  cursor-pointer">
                Blog
              </li>
              <li className="text-gray-600 font-normal leading-4  pb-4  cursor-pointer">
                Payments
              </li>
              <li className="text-gray-600 font-normal leading-4  pb-4  cursor-pointer">
                Shipping
              </li>
              <li className="text-gray-600 font-normal leading-4  pb-4  cursor-pointer">
                Authorized Dealers
              </li>
              <li className="text-gray-600 font-normal leading-4  pb-4  cursor-pointer">
                Careers
              </li>
              <li className="text-gray-600 font-normal leading-4  pb-4  cursor-pointer">
                Terms of Offers for Sale
              </li>
              <li className="text-gray-600 font-normal leading-4  pb-4  cursor-pointer">
                Terms of Use
              </li>
              <li className="text-gray-600 font-normal leading-4  pb-4  cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-2xl text-gray-800 pb-8  cursor-pointer">
              Contact Info
            </p>
            <ul>
              <li className="text-gray-600 font-normal leading-4 pb-4  cursor-pointer">
                111-111-1111
              </li>
              <li className="text-gray-600 font-normal leading-4  pb-4  cursor-pointer">
                complaint@myfurniture.com
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-2xl text-gray-800 pb-8">Follow Us</p>
            <ul className="flex">
              <li>
                <Image
                  src="/Vectorfb.svg"
                  width={17}
                  height={17}
                  className="rounded-xl   cursor-pointer"
                />
              </li>
              <li className="mx-10">
                <Image
                  src="/logo-instagram.svg"
                  width={17}
                  height={17}
                  className="rounded-xl  cursor-pointer"
                />
              </li>
              <li>
                <Image
                  src="/Vectorbird.svg"
                  width={17}
                  height={17}
                  className="rounded-xl   cursor-pointer"
                />
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-2xl w-32 text-gray-800 pb-8  cursor-pointer">
              Newsletter
            </p>
            <p className="text-gray-600 pb-10">
              Subscribe to our newsletter to get the latest news and product
              updates directly to your email. Just a second to subscribe today
            </p>
            <div className="relative">
              <input
                className=" placeholder-slate-500 shadow-3xl appearance-none block w-full bg-white text-gray-700 border border-white rounded py-5 px-4 mb-3 leading-tight focus:outline-none rounded-xl"
                id="grid-Email"
                type="text"
                placeholder="Email here"
              />
              <button className="absolute cursor-pointer hover:bg-gray-700  right-0 bg-gray-800 text-white py-5 px-4 top-0 rounded-tr-xl rounded-br-xl">
                GO
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
