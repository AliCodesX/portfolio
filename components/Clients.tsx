import React from "react";
import { InfiniteMovingCards } from "./ui/inifinite-moving-cards";
import { testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Kind words from <span className="text-purple"> satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center ">
        <div className="h-[50vh] md:h-[30rem] rounded-md
        flex flex-col antialiased items-center relative overflow-hidden mt-10">
          <InfiniteMovingCards
            items={testimonials}
            speed="slow"
            direction="right"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
