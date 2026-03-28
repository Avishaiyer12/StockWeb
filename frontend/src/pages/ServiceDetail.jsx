import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { allServices } from "../src/data/serviceData";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = allServices.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) return <div className="py-20 text-center text-2xl font-bold">Service Not Found!</div>;

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <img src={service.image} className="w-full h-[400px] object-cover" alt={service.title} />
        
        <div className="p-8 md:p-12">
          <Link to="/" className="text-[#00D084] font-medium hover:underline mb-6 inline-block">
            ← Back to All Services
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">{service.title}</h1>
          
          <div className="flex items-center gap-4 mb-8">
            <span className="bg-green-100 text-[#00D084] px-4 py-1 rounded-full text-sm font-bold uppercase">
              Pro Feature
            </span>
            <span className="text-gray-400 text-sm">Updated 2 hours ago</span>
          </div>

          <p className="text-gray-700 text-xl leading-relaxed mb-8 border-l-4 border-[#00D084] pl-6 italic">
            {service.desc}
          </p>

          <div className="prose prose-lg text-gray-600 space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">Why Choose This?</h3>
            <p>{service.fullDetail}</p>
            <p>
              Our system uses the latest technology to ensure you stay ahead in the 
              fast-paced world of stock trading. With this service, you gain a competitive 
              edge through data accuracy and speed.
            </p>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-2xl flex justify-between items-center">
            <div>
              <p className="text-gray-800 font-bold text-lg">Ready to start?</p>
              <p className="text-gray-500 text-sm">Join 10,000+ traders using our insights.</p>
            </div>
            <button className="bg-[#00D084] text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-green-200 hover:scale-105 transition-transform">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;