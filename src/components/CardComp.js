import React, { useEffect, useState } from "react";
import { Card } from "antd";
import "./CardComp.component.css";

const CardComp = ({ title, price, description, currencyType, rate }) => {
  const [convertPrice, setConvertPrice] = useState(0);

  useEffect(() => {
    setConvertPrice((price * rate).toFixed(3));
  }, [currencyType]);
  return (
    <Card title={<h2>{title}</h2>} className="card">
      <div className="price-details">
        <p style={{ fontWeight: "bold" }}>Price:</p>
        <p>{convertPrice ? convertPrice : "loading"}</p>
        <p style={{ fontWeight: "bold", fontStyle: "italic" }}>
          {currencyType}
        </p>
      </div>
      <p>{description}</p>
    </Card>
  );
};

export default CardComp;
