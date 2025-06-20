import React from "react";
import {
  FaBook,
  FaStar,
  FaClock,
  FaUser,
  FaRupeeSign,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Image from "next/image";
import BoyMic from "../assets/images/boyMic.png";
import Girl from "../assets/images/girlMoney.png";
import Boy from "../assets/images/VrBoy.png";
import { HiDocumentText } from "react-icons/hi";
import Bird from "../assets/images/birds.png";

const courseData = [
  {
    title: "Public Speaking And Spoken English",
    rating: 4.7,
    features: ["3 Levels", "6 months", "students 1k"],
    price: "1499",
    image: BoyMic,
    grade: "3rd - 12th Grade",
  },
  {
    title: "Financial Planning with stock market",
    rating: 4.7,
    features: ["3 Levels", "3 months", "students 100+"],
    price: "1999",
    image: Girl,
    grade: "7th - Under Graduate",
  },
  {
    title: "Artificial intelligent with python and mern stack ",
    rating: 4.7,
    features: ["4 Levels", "6 months", "students 100+"],
    price: "1999",
    image: Boy,
    grade: "7th - Under Graduate",
  },
];

const TopCourses = () => {
  return (
    <section className="relative bg-[#FFF8F0] w-full py-20 text-black overflow-hidden">
      <Image
        src={Bird}
        alt="bird"
        className="absolute w-[200px] -right-0 top-10"
      />
      <div className="container mx-auto px-6 md:px-28">
        {/* Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="flex items-center gap-3 mb-2">
            <FaBook color="#FFBC36" />
            <h2 className="text-[#FFBC36] font-semibold">COURSES</h2>
          </div>
          <h1 className="text-3xl font-bold text-[#17254E]">Our Top Courses</h1>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseData.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-md p-4 shadow-md flex flex-col justify-between"
            >
              {/* Image with tag */}
              <div className="relative mb-4">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={220}
                  className="rounded-md object-cover w-full"
                />
                <div className="absolute top-2 left-2 bg-[#FE543D] text-white px-3 py-1 text-xs font-semibold">
                  TRENDING
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 text-[#FFBC36] mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
                <span className="text-black text-sm ml-2">
                  ({course.rating})
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#17254E] mb-3">
                {course.title}
              </h3>

              {/* Feature Row */}
              <div className="flex justify-between text-xs text-[#17254E] mb-4">
                <div className="flex items-center gap-1">
                  <HiDocumentText />
                  {course.features[0]}
                </div>
                <div className="flex items-center gap-1">
                  <FaClock />
                  {course.features[1]}
                </div>
                <div className="flex items-center gap-1">
                  <FaUser />
                  {course.features[2]}
                </div>
              </div>

              {/* Dotted Separator */}
              <div className="border-t border-dotted border-gray-300 my-3"></div>

              <div className="flex items-center gap-2 mb-3 mt-3">
                <FaMapMarkerAlt size={14} />
                <p className="text-xs text-[#4D5756]">{course.grade}</p>
              </div>

              {/* Footer Row */}
              <div className="flex justify-between items-center mt-auto">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1 text-sm">
                    <FaRupeeSign className="text-[#000]" size={14} />
                    <span className="text-lg font-bold text-[#17254E]">
                      {course.price}
                    </span>
                    <span className="text-xs text-gray-500 ml-1">
                      /- per month
                    </span>
                  </div>
                </div>

                <button className="bg-[#FE543D] text-white px-4 py-2 text-sm rounded-full hover:bg-[#be4d3e] transition-all">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCourses;
