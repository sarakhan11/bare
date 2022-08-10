import React, { useState } from "react";
import Image from "next/image";
export default function index() {
  const [count1, setCount1] = useState();
  const [hide1, setHide1] = useState(false);

  return (
    <>
      <div className="flex px-20  bg-white py-5 justify-between absolute top-0 bottom-0 left-0 right-0 z-20">
        <div className=" xl:w-5/12 2xl:w-full ">
          <div>
            <p className="text-4xl  font-semibold text-gray-800">
              Dining Chair Rocco in Bottle Green Velvet
            </p>
            <div className="items-center flex my-5 text-center gap-x-6">
              <div className="flex gap-x-4  items-center my-auto text-center">
                <div className="mt-2">
                  <Image src="/Vectorstar.png" width={22} height={21} />
                </div>
                <div className="mt-2">
                  <Image src="/Vectorstar.png" width={22} height={21} />
                </div>
                <div className="mt-2">
                  <Image src="/Vectorstar.png" width={22} height={21} />
                </div>
                <div className="mt-2">
                  <Image src="/Vectorstar.png" width={22} height={21} />
                </div>
                <div className="mt-2">
                  <Image src="/Vectorstar.png" width={22} height={21} />
                </div>
              </div>
              <p className="font-medium text-2xl my-auto text-center">(0)</p>
            </div>
            <p className="text-4xl  font-semibold text-gray-800 pb-12">$259</p>
          </div>
          <ul>
            <li>
              <div className="flex">
                <p className="font-medium text-xl pr-4 text-gray-600">
                  Vendor:
                </p>
                <p className="text-2xl font-medium text-gray-800">Luxe</p>
              </div>
            </li>
            <li className="py-6">
              <div className="flex">
                <p className="font-medium text-xl pr-4 text-gray-600">Type:</p>
                <p className="text-2xl font-medium text-gray-800">Wooden</p>
              </div>
            </li>
            <li>
              <div className="flex pb-6">
                <p className="font-medium text-xl pr-4 text-gray-600">Model:</p>
                <p className="text-2xl font-medium text-gray-800">WD1234</p>
              </div>
            </li>
            <li>
              <div className="flex pb-6">
                <p className="font-medium text-xl pr-4 text-gray-600">
                  Status:
                </p>
                <p className="text-2xl font-medium text-gray-800">Availabe</p>
              </div>
            </li>
          </ul>
          <div className="flex gap-6">
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
                  onClick={() => setCount1(count1 - 1)}
                />
              </div>
            </div>
            <button className=" py-5 px-6 text-white bg-gray-800 rounded-xl hover:bg-gray-600 text-2xl font--medium">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="xl:w-5/12 2xl:w-full  mx-auto sm:mt-0 mt-8">
          <Image
            src="/Group 307.png"
            width={448}
            height={446}
            className="rounded-xl"
          />
        </div>
        <button
          className="text-gray-800 absolute right-5 top-50 "
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
    
    </>
  );
}
