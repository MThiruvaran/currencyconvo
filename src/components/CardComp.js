import React, { useEffect, useState } from "react";
import { Card } from "antd";
import "./CardComp.component.css";
import axios from "axios";

const CardComp = ({ title, price, description, currencyType }) => {
  const [convertPrice, setConvertPrice] = useState(0);

  const convertOptions = {
    method: "GET",
    url: "https://currency-converter13.p.rapidapi.com/convert",
    params: { from: "INR", to: currencyType },
    headers: {
      "x-rapidapi-host": "currency-converter13.p.rapidapi.com",
      "x-rapidapi-key": "93318b8d4dmsh108d8f469971d54p1f040fjsnc7700b6cc894",
    },
  };
  useEffect(() => {
    if (currencyType === "INR") {
      setConvertPrice(price);
    } else {
      axios.request(convertOptions).then((res) => {
        setConvertPrice((res.data.amount * price).toFixed(2));
      });
    }
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
