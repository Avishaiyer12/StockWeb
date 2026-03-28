import React from "react";
import { Link } from "react-router-dom";

function StockCard({ name, symbol, link }) {
  return (
    <Link to={link}>
      <div className="border rounded-xl p-4 hover:shadow-lg cursor-pointer flex items-center gap-3">
        <span role="img" className="text-xl">📊</span>
        <div>
          <h3 className="font-bold text-green-600">{name}</h3>
          <p className="text-gray-600">({symbol})</p>
        </div>
      </div>
    </Link>
  );
}

export default StockCard;
