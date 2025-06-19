import React from "react";
import Image from "next/image";
import bgVector from "../assets/images/Vector.png";
import heroImage from "../assets/images/character (1).png";
import LinkWithTrackEvent from "./LinkWithTrackEvent";

const CourseCoding = () => {
  return (
    <section className="bg-[#0097B2] text-white py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-6xl font-bold leading-[1.3]">
            From Beginner to Pro Learn, Code, and Create with{" "}
            <span className="text-3xl  md:text-6xl font-bold bg-[#FFBC36] px-3 py-1 inline-block mt-3 text-[#fff]">
              Studycubs!
            </span>
          </h2>


          <LinkWithTrackEvent href="/website-development" buttonText="Enroll Now" eventName="website-development-enroll-now-clicked"
            eventParams={{
              category: "Website Development",
              action: "Enroll Now Clicked",
              label: "Website Development Enroll Now Button"
            }}
          />
        </div>

        <div className="md:w-1/2 flex justify-end relative mb-10">
          <Image
            src={bgVector}
            alt="Background Vector"
            className="w-[100%] md:w-[80%] max-w-lg"
          />

          <Image
            src={heroImage}
            alt="Overlapping Hero"
            className="absolute bottom-[30px] left-[50%] xs:left-[60%] xlg:left-[65%] transform -translate-x-1/2 w-[90%] md:w-[70%] max-w-md"
          />
          <div className="flex justify-center mt-8 md:hidden">
            <LinkWithTrackEvent
              href={"/website-development"}
              className="bg-[#FFBC36] absolute left-[10px] bottom-[-10px] text-[#fff] px-8 py-2 rounded-lg font-bold text-2xl hover:bg-[#E6A500] shadow-md w-full max-w-[300px]"
              buttonText="Enroll Now"
              eventName="website-development-enroll-now-clicked"
              eventParams={{
                category: "Website Development",
                action: "Enroll Now Clicked",
                label: "Website Development Enroll Now Button"
              }}
            >

            </LinkWithTrackEvent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCoding;
