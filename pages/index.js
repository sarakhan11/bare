import React, { useState } from "react";
import Image from "next/image";
const index = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="justify-center">
        <div className="  ">
          <div className="flex flex-wrap justify-between items-center px-20">
            <Image
              src="/Group.png"
              width={56}
              height={72}
              className="my-auto"
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
            <ul className="xl:flex hidden">
              <li className="pr-8 cursor-pointer ">
                <a className="font-normal text-base leading-4 font-['Poppins'] pr-2 ">
                  Bedroom
                </a>
                <Image src="/Vector.png" width={8} height={4} />
              </li>
              <li className="pr-8  cursor-pointer  ">
                <a className="font-normal text-base leading-4 font-['Poppins'] pr-2">
                  Living Room
                </a>
                <Image src="/Vector.png" width={8} height={4} />
              </li>
              <li className="pr-8  cursor-pointer ">
                <a className="font-normal text-base leading-4 font-['Poppins'] pr-2">
                  Dining & Kitchen
                </a>
                <Image src="/Vector.png" width={8} height={4} />
              </li>
              <li className="pr-8  cursor-pointer ">
                <a className="font-normal text-base leading-4 font-['Poppins'] pr-2">
                  Office
                </a>
                <Image src="/Vector.png" width={8} height={4} />
              </li>
            </ul>
            <ul
              className={`${
                showMenu ? " xl:hidden flex " : "hidden"
              } flex-col w-full `}
            >
              <li className="pr-8 cursor-pointer mt-8">
                <a className="font-normal text-base leading-4 font-['Poppins'] pr-2 ">
                  Bedroom
                </a>
                <Image src="/Vector.png" width={8} height={4} />
              </li>
              <li className="pr-8  cursor-pointer my-8  ">
                <a className="font-normal text-base leading-4 font-['Poppins'] pr-2 ">
                  Living Room
                </a>
                <Image src="/Vector.png" width={8} height={4} />
              </li>
              <li className="pr-8  cursor-pointer ">
                <a className="font-normal text-base leading-4 font-['Poppins'] pr-2">
                  Dining & Kitchen
                </a>
                <Image src="/Vector.png" width={8} height={4} />
              </li>
              <li className="pr-8  cursor-pointer  my-8">
                <a className="font-normal text-base leading-4 font-['Poppins'] pr-2 ">
                  Office
                </a>
                <Image src="/Vector.png" width={8} height={4} />
              </li>
            </ul>
            <div className="xl:block hidden">
              <Image src="/Group 6.png" width={20} height={20} />
              <Image src="/Group 260.png" width={20} height={20} />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap pt-20 bg-rose-50 sm:px-20 px-5 sm:py-20 py-2  justify-center">
          <div className="sm:pt-20 pt-5 xl:w-6/12 2xl:w-full pr-8 mx-auto">
            <h1 className="lg:text-6xl text-5xl  leading-15  font-semibold text-gray-800">
              The Glory Cambalk furniture
            </h1>
            <p className="pt-4  text-base font-normal leading-6 pt-4 pb-10 text-gray-600">
              Avoid the hassle of physically visiting a store and order your
              favorite product with a few clicks online for the best wood
              furniture design. Free delivery is available.
            </p>
            <button className="sm:text-2xl text-xl font-medium cursor-pointer bg-gray-800 text-white sm:py-7 py-4 sm:px-10 px-6 rounded-xl hover:bg-gray-700">
              Shop Now
            </button>
          </div>
          <div>
            <Image
              src="/image 5.png"
              width={549}
              height={491}
              className="pb-20  xl:w-6/12 2xl:w-full mx-auto"
            />
          </div>
        </div>
        <div className="px-20 flex flex-wrap items-center justify-center pt-20 pb-28">
          <h2 className="text-gray-800 text-4xl font-semibold xl:w-6/12 2xl:w-full  sm:pb-0 pb-10 ">
            Why Choose Us?
          </h2>
          <div className="justify-center flex flex-col items-center xl:w-6/12 2xl:w-full">
            <div className="bg-teal-100  justify-center text-center w-52 py-14 px-6  mb-4  rounded-full outline-offset-4 outline-2 outline-dashed outline-teal-200">
              <Image src="/Group 297.png" width={22} height={18} />
              <p className="font-medium "> SAFE SHIPPING</p>
              <p className="text-gray-600 ">
                In all major cities across the country
              </p>
            </div>
            <div className="sm:flex  justify-center">
              <div className="sm:mr-20 sm:mb-0 mb-4 mr-0 bg-rose-50 justify-center text-center  py-14 px-6  rounded-full outline-offset-4 outline-2 outline-dashed outline-rose-400">
                <Image src="/Group dollar.png" width={10} height={18} />
                <p className="font-medium "> COMPETITIVE PRICES</p>
                <p className="text-gray-600 w-40">
                  Quality with affordability ensured
                </p>
              </div>
              <div className="bg-rose-50 justify-center text-center  py-14 px-6  rounded-full outline-offset-4 outline-2 outline-dashed outline-rose-400">
                <Image src="/Group clock.png" width={18} height={18} />
                <p className="font-medium "> CUSTOMER SUPPORT</p>
                <p className="text-gray-600 w-28 mx-auto">
                  Call us anytime: 111-111-1111
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" px-20 justify-center">
          <h3 className="text-gray-800 font-semibold text-4xl mx-auto ">
            New Arrivals
          </h3>
          <div className="sm:flex pt-16 pb-8 mx-auto">
            <div className="flex">
              <div className="pr-8">
                <Image
                  src="/Rectangle 7.png"
                  width={296}
                  height={346}
                  className="rounded-xl"
                />
                <div className="flex justify-between">
                  <p className="font-medium text-gray-600">Sofa</p>
                  <p className="text-gray-800 font-medium md:text-xl text-md">
                    $220
                  </p>
                </div>
              </div>
              <div>
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
            </div>
            <div className="flex">
              <div className="pr-8 sm:pl-8">
                <Image
                  src="/Rectangle 9.png"
                  width={296}
                  height={346}
                  className="rounded-xl"
                />
                <div className="flex justify-between">
                  <p className="font-medium text-gray-600">Dining Table</p>
                  <p className="text-gray-800 font-medium md:text-xl text-md">
                    $250
                  </p>
                </div>
              </div>
              <div>
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
        <div className="lg:flex pb-20 justify-center ">
          <div className="mt-28 pl-28 mr-24 xl:w-6/12 2xl:w-full ">
            <p className="font-semibold text-3xl text-gray-800 pr-4  font-['Poppins']">
              Dining Chair Rocco in Bottle Green Velvet
            </p>
            <button className="py-5 mt-12 px-8 bg-gray-800 hover:bg-gray-700 cursor-pointer text-white font-medium rounded-md">
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
        <div className="px-20 mb-28">
          <p className="font-semibold  pb-16 text-3xl text-gray-800 pr-4  font-['Poppins']">
            40% off Products
          </p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-8">
            <div>
              <div className=" px-10 mb-8 bg-yellow-50 relative">
                <div className="mb-8">
                  <Image
                    src="/Rectangle 17.png"
                    width={96}
                    height={96}
                    className="rounded-xl "
                  />
                  <p className="text-xl font-medium absolute top-6 left-16">
                    Beds
                  </p>
                </div>
                <Image
                  src="/Rectangle 18.png"
                  width={325}
                  height={642}
                  className="rounded-xl"
                />
              </div>
              <div className=" px-10 bg-red-50 relative">
                <div className="mb-8">
                  <Image
                    src="/Rectangle 17.png"
                    width={96}
                    height={96}
                    className="rounded-xl "
                  />
                  <p className="text-xl font-medium absolute top-6 left-16">
                    Sofas
                  </p>
                </div>
                <Image
                  src="/Rectangle 30.png"
                  width={325}
                  height={237}
                  className="rounded-xl"
                />
              </div>
            </div>
            <div>
              <div className="mb-8 px-10 bg-blue-50 relative">
                <div className="mb-8">
                  <Image
                    src="/Rectangle 17.png"
                    width={96}
                    height={96}
                    className="rounded-xl "
                  />
                  <p className="text-xl font-medium absolute top-6 left-16">
                    Dining
                  </p>
                </div>
                <Image
                  src="/Rectangle 23.png"
                  width={326}
                  height={237}
                  className="rounded-xl"
                />
              </div>
              <div className=" px-10 bg-fuchsia-50 relative">
                <div className="mb-8">
                  <Image
                    src="/Rectangle 17.png"
                    width={96}
                    height={96}
                    className="rounded-xl "
                  />
                  <p className="text-xl font-medium absolute top-6 left-16">
                    Closet
                  </p>
                </div>
                <Image
                  src="/Rectangle 32.png"
                  width={326}
                  height={642}
                  className="rounded-xl"
                />
              </div>
            </div>
            <div>
              <div className=" px-10  mb-8 bg-red-50 relative">
                <div className="mb-8">
                  <Image
                    src="/Rectangle 17.png"
                    width={96}
                    height={96}
                    className="rounded-xl "
                  />
                  <p className="text-xl font-medium absolute top-6 left-16">
                    Chairs
                  </p>
                </div>
                <Image
                  src="/Rectangle 31.png"
                  width={325}
                  height={642}
                  className="rounded-xl"
                />
              </div>
              <div className=" px-10 bg-red-50 relative">
                <div className="mb-8">
                  <Image
                    src="/Rectangle 17.png"
                    width={96}
                    height={96}
                    className="rounded-xl "
                  />
                  <p className="text-xl font-medium absolute top-6 left-16">
                    Tables
                  </p>
                </div>
                <Image
                  src="/Rectangle 33.png"
                  width={325}
                  height={237}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-20 pb-24">
          <p className="font-semibold  text-4xl text-gray-800 pr-4  sm:mb-16 mb-8">
            Top Selling Items
          </p>
          <div className="flex flex-wrap justify-between items-center">
            <Image
              src="/Rectangle 13.png"
              width={624}
              height={400}
              className="rounded-xl  "
            />
            <div>
              <p className="font-semibold  sm:text-4xl text-3xl pb-4 mt:md-0 mt-8">
                Lorem ipsum dolor sit amet
              </p>
              <p className="text-gray-600 mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
              <button className="px-9 text-white sm:py-6 py-4 bg-gray-800 hover:bg-gray-700 cursor-pointer rounded-xl sm:text-xl  text-lg font-medium">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center px-20 pb-20">
          <div className="xl:mb-0 mb-6">
            <p className="font-semibold text-4xl pb-4 ">
              Lorem ipsum dolor sit amet
            </p>
            <p className="text-gray-600 sm:mb-10 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="px-9 text-white sm:py-6 py-4 bg-gray-800 hover:bg-gray-700 cursor-pointer rounded-xl sm:text-xl  text-lg  font-medium">
              Learn more
            </button>
          </div>
          <Image
            src="/Rectangle 145.png"
            width={624}
            height={400}
            className="rounded-xl  "
          />
        </div>
        <div className="px-20 mb-16">
          <p className="font-semibold text-4xl pb-16">Certified By</p>
          <div class="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2  sm:gap-48 gap-36">
            <Image
              src="/Californiasfurnitureinstallation Logo.png"
              width={99}
              height={40}
              className="rounded-xl  "
            />
            <Image
              src="/Urban Galleria Logo.png"
              width={99}
              height={40}
              className="rounded-xl  "
            />
            <Image
              src="/Group 344.png"
              width={99}
              height={40}
              className="rounded-xl  "
            />
            <Image
              src="/Furniture Today Logo.png"
              width={99}
              height={40}
              className="rounded-xl  "
            />
            <Image
              src="/Vectorb.png"
              width={99}
              height={40}
              className="rounded-xl  "
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-4  md:grid-cols-3  grid-cols-1 gap-3 px-20 bg-slate-50 pt-16 pb-9 mb-8">
          <div>
            <p className="font-medium text-2xl text-gray-800 pb-8">
              Information
            </p>
            <ul>
              <li className="text-gray-600 font-normal leading-4 pb-4">
                About
              </li>
              <li className="text-gray-600 font-normal leading-4  pb-4">
                Store Locator
              </li>
              <li className="text-gray-600 font-normal leading-4  pb-4">
                Virtual Tour
              </li>
              <li className="text-gray-600 font-normal leading-4  pb-4">
                Blog
              </li>
              <li className="text-gray-600 font-normal leading-4  pb-4">
                Payments
              </li>
              <li className="text-gray-600 font-normal leading-4  pb-4">
                Shipping
              </li>
              <li className="text-gray-600 font-normal leading-4  pb-4">
                Authorized Dealers
              </li>
              <li className="text-gray-600 font-normal leading-4  pb-4">
                Careers
              </li>
              <li className="text-gray-600 font-normal leading-4  pb-4">
                Terms of Offers for Sale
              </li>
              <li className="text-gray-600 font-normal leading-4  pb-4">
                Terms of Use
              </li>
              <li className="text-gray-600 font-normal leading-4  pb-4">
                Privacy Policy
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-2xl text-gray-800 pb-8">
              Contact Info
            </p>
            <ul>
              <li className="text-gray-600 font-normal leading-4 pb-4">
                111-111-1111
              </li>
              <li className="text-gray-600 font-normal leading-4  pb-4">
                complaint@myfurniture.com
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-2xl text-gray-800 pb-8">Follow Us</p>
            <ul className="flex">
              <li>
                <Image
                  src="/Vectorfb.png"
                  width={17}
                  height={17}
                  className="rounded-xl  "
                />
              </li>
              <li className="mx-10">
                <Image
                  src="/logo-instagram.png"
                  width={17}
                  height={17}
                  className="rounded-xl "
                />
              </li>
              <li>
                <Image
                  src="/Vectorbird.png"
                  width={17}
                  height={17}
                  className="rounded-xl  "
                />
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-2xl text-gray-800 pb-8">
              Newsletter
            </p>
            <p className="text-gray-600 pb-10">
              Subscribe to our newsletter to get the latest news and product
              updates directly to your email. Just a second to subscribe today
            </p>
            <div className="relative">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-white rounded py-5 px-4 mb-3 leading-tight focus:outline-none rounded-xl bg-white"
                id="grid-Email"
                type="text"
                placeholder="Email"
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

export default index;
