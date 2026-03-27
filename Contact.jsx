import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://stockweb-eibm.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      alert("Your message has been sent!");
      setFormData({ name: "", email: "", number: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("There was an issue sending your message.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex flex-col items-center py-14 px-4 md:px-10">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-gray-800">
        Get in <span className="text-blue-600">Touch</span>
      </h1>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="space-y-8 bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              Address
            </h2>
          </div>
          <div>
            <h5 className="text-2xl mb-2 text-black-500">
              Bombay Stock Exchange
            </h5>
            <p className="text-gray-600 leading-relaxed">
              Phiroze Jeejeebhoy Towers, Dalal St,<br />
              Kale Ghoda, Fort, Mumbai,<br />
              Maharashtra - 400001
            </p>

            <div className="mt-4 overflow-hidden">
              <iframe
                title="BSE Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.0317422862654!2d72.83083307497344!3d18.929989082244767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c363d83329%3A0xc3516cb22743963b!2sBombay%20Stock%20Exchange!5e0!3m2!1sen!2sin!4v1766925882742!5m2!1sen!2sin"
                width="100%" height="250" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div><br></br>

            <p className="mt-3 text-yellow-500 font-semibold">
              ⭐ 4.5*** (2,397 reviews)
            </p>

          </div>

          <div className="text-gray-700">
            <p>📞02266545695</p><br></br>
            <p>✉️ stocker@ex.com</p>
          </div>
        </div>

        {/* Right Section - Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-lg p-10 rounded-2xl shadow-lg hover:shadow-2xl transition"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Send Your Message
          </h2>

          <p className="text-gray-600 mb-8">
            Stay ahead in the market with real-time stock visualization and
            AI-powered prediction tools.
          </p>

          <div className="mb-5">
            <label className="block text-gray-700 mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 mb-2 font-medium">
              Mobile No.
            </label>
            <input
              type="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
              placeholder="Enter your mobile number"
              className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Write your message here..."
              className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold text-lg hover:scale-[1.02] hover:shadow-lg transition"
          >
            🚀 Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
