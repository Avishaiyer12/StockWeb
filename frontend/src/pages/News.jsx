import React from "react";

const dummyNews = [
  {
    title: "Market Hits Record Highs as Tech Stocks Surge",
    desc: "Tech giants lead the rally as investors gain confidence...",
    source: "Bloomberg",
    time: "2 hours ago",
    image:
      "https://images.pexels.com/photos/6770608/pexels-photo-6770608.jpeg",
  },
  {
    title: "Oil Prices Drop Amid Global Uncertainty",
    desc: "Energy sector faces volatility following major announcements...",
    source: "Reuters",
    time: "5 hours ago",
    image:
      "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg",
  },
  {
    title: "AI Companies Show Strong Growth Potential",
    desc: "Machine learning and automation continue to expand...",
    source: "MarketWatch",
    time: "1 day ago",
    image:
      "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg",
  },
  {
    title: "Global Climate Summit 2024 Updates",
    desc: "World leaders gather to discuss urgent carbon emission cuts and renewable energy goals for the next decade.",
    image: "https://picsum.photos/seed/climate/400/250",
    source: "BBC News",
    time: "1 hour ago"
  },
  {
    title: "The Future of Electric Aviation",
    desc: "New battery technology is making electric planes a reality for short-haul flights, reducing travel costs significantly.",
    image: "https://picsum.photos/seed/tech/400/250",
    source: "The Verge",
    time: "4 hours ago"
  },
  {
  title: "First Commercial Hotel in Orbit",
    desc: "Private space companies announce plans to launch the first luxury hotel in space by the end of 2027.",
    image: "https://picsum.photos/seed/space/400/250",
    source: "CNN Tech",
    time: "8 hours ago"
  }
];

const News = () => {
  return (
    <>
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Stock Market News
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {dummyNews.map((news, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <img src={news.image} alt={news.title} className="w-full h-44 object-cover" />

            <div className="p-4">
              <h2 className="font-semibold text-lg">{news.title}</h2>
              <p className="text-gray-600 mt-2">{news.desc}</p>

              <div className="flex justify-between text-sm mt-4 text-gray-500">
                <span>{news.source}</span>
                <span>{news.time}</span>
              </div>
            </div>
          </div>
        ))}        
      </div>
   </div>
   
   
   </>
  );
};

export default News;
