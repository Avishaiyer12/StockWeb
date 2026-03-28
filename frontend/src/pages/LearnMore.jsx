import React from "react";
// import stockImg from "../assets/real-time-stock.png";
import { useParams } from "react-router-dom";
import { allServices } from "../data/serviceData";

export default function LearnMore() {
  const { id } = useParams();
  const singleData = allServices.find((item) => item.id == id);
  return (
    <div className="w-full min-h-screen bg-white px-10 py-16">
      {
        singleData && (
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                {singleData.title}
              </h1>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed" style={{color:"blue",textAlign:"justify"}}>
                {singleData.fullDetail}
              </p>

              <div className="space-y-4 text-gray-700 text-base leading-relaxed" style={{whiteSpace: "pre-line",textAlign:"justify",fontSize:"18px" }}>
                {singleData.data}
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={singleData.image}
                alt="Real Time Stock Visualization" style={{height:"350px",position:"relative",top:"-200px",left:"250px"}}
                className="w-full max-w-md rounded-xl shadow-xl"
              />
              <img
                src={singleData.img1}
                alt="Real Time Stock Visualization" style={{height:"350px",position:"relative",top:"200px",right:"200px"}}
                className="w-full max-w-md rounded-xl shadow-xl"
              />
            </div>

          </div>

        )
      }

    </div>
  );
}

