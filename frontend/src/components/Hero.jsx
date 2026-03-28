import React from "react";

export default function NewsItem({ title, link }) {
  return (
    <div className="p-3 border-b hover:bg-gray-50 transition">
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        {title}
      </a>
    </div>
  );
}
