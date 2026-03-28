import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "How Accurate Are The Stock Predictions?",
      answer:
        "Our predictions are powered by machine learning models using historical stock data, trends, and volatility patterns. While accuracy is high, no prediction can be 100% guaranteed due to market uncertainty.",
    },
    {
      question: "Where Do The Stock News Updates Come From?",
      answer:
        "We aggregate news from trusted financial sources, APIs, and verified market analysis websites to ensure you get reliable and fresh updates.",
    },
    {
      question: "What Is The Use Of The Stock Watchlist?",
      answer:
        "The watchlist helps you track selected stocks in real-time, monitor performance, and receive instant updates about price movements.",
    },
    {
      question: "Can I Customize My Dashboard?",
      answer:
        "Yes, you can personalize your experience by selecting widgets, charts, and preferred stock categories on your dashboard.",
    },
    {
      question: "Do I Need A Trading Account To Use This Platform?",
      answer:
        "No. You can use stock visualization, prediction, and news features without any trading account. A trading account is only needed if you want to buy or sell stocks.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen py-16 px-6 md:px-20">

      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-center">
        Frequently Asked Questions
      </h1>

      {/* <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-10">
        Frequently Asked Questions
      </h2> */}

      <p className="text-gray-700 text-lg max-w-3xl leading-relaxed mb-7">
        Explore the most common questions related to Stock Visualization, Prediction,
        News, and Watchlist features. Stay informed and make smarter investment
        decisions with our tool.
      </p>

      <div className="max-w-4xl space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white outline-white rounded-xl shadow-md p-6 cursor-pointer color-white"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-900">
                {faq.question}
              </h3>

            <span className="text-2xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <p className="mt-4 text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
