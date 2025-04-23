import React from "react";
import { FaBook, FaCertificate,FaUserPlus } from "react-icons/fa";
import Image from "next/image";

const ProfileSummary = () => {
  return (
    <section className="flex flex-wrap gap-5 justify-between mr-10 ml-6 max-md:mr-2.5 max-md:max-w-full">
      <div className="flex flex-wrap gap-8 items-center text-neutral-900">
        <div className="flex justify-center items-center shrink-0 self-stretch my-auto overflow-hidden rounded-xl aspect-square w-[100px] bg-gray-200">
          {/* <FaUser className="w-10 h-10 text-gray-500" />
           */}
           <Image
                         src="/assets/profile.jpg"
                         width={100}
                         height={100}
                         alt="Company Logo"
                         className=" aspect-square overflow-hidden w-full text-gray-500"
                       />
        </div>
        <div className="self-stretch my-auto min-w-60 w-[385px]">
          <h1 className="text-3xl font-bold">Charlotte Anderson</h1>
          <div className="flex gap-2.5 items-center mt-2.5 text-lg">
            <div className="flex gap-1 items-center self-stretch my-auto">
              <FaBook className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square text-neutral-900" />
              <p className="self-stretch my-auto">
                <span className="text-[rgba(36,144,224,1)]">(5)</span> Courses
                Enrolled
              </p>
            </div>
            <div className="shrink-0 self-stretch my-auto w-0 bg-white border border-solid border-slate-300 h-[18px]" />
            <div className="flex gap-1 items-center self-stretch my-auto">
              <FaCertificate className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square text-neutral-900" />
              <p className="self-stretch my-auto">
                <span className="text-[rgba(36,144,224,1)]">(4)</span>{" "}
                Certificates
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="flex overflow-hidden gap-1.5 justify-center items-center px-6 py-3.5 my-auto text-lg font-semibold text-orange-500 border border-orange-500 border-solid min-h-[52px] rounded-[58px] max-md:px-5">
        <FaUserPlus className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square text-orange-500" />
        <span className="self-stretch my-auto">Add New User</span>
      </button>
    </section>
  );
};

export default ProfileSummary;