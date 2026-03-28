import React from "react";
import { Link } from "react-router-dom";
import { allServices } from '../data/serviceData'; 

const Services = () => {

  return (
    <>
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-[#00D084] font-semibold text-lg mt-4 uppercase tracking-wide" style={{fontSize:"50px",position:"relative",paddingBottom:"31px",top:"-30px"}}>Our Services</h1>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          Empowering You with Stock Market <br className="hidden md:block" /> Insights
        </h2>
        <p className="text-gray-500 max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
          We offer cutting-edge stock visualization tools and AI-driven prediction models 
          to help investors, traders, and analysts make informed decisions in real-time.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {allServices.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 text-left border border-gray-100 flex flex-col"
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {service.desc}
                </p>
                
                <Link to={`/learnMore/${service.id}`}>
                  <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition learn-btn">Learn More </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Services;