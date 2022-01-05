import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Row, Select, Col } from "antd";

import "./App.css";
import CardComp from "./components/CardComp";
import axios from "axios";

const { Option } = Select;

const getOptions = {
  method: "GET",
  url: "https://currency-converter13.p.rapidapi.com/list",
  headers: {
    "x-rapidapi-host": "currency-converter13.p.rapidapi.com",
    "x-rapidapi-key": "93318b8d4dmsh108d8f469971d54p1f040fjsnc7700b6cc894",
  },
};

const App = () => {
  const [currency, setCurrency] = useState("INR");
  const [currencyList, setCurrencyList] = useState([]);
  const [rate, setRate] = useState(1);

  const data = [
    {
      title: "Silver",
      price: 10000,
      description:
        "this plan provides with a 3 page Web application with minimum backend functionalities",
    },
    {
      title: "Gold",
      price: 20000,
      description:
        "this plan provides with a 5 page full stack web application with optimized performance.",
    },
    {
      title: "Platinum",
      price: 30000,
      description:
        "this plan provides with a 8 page full stack Web application with otpimized performance and custom design.",
    },
  ];

  const handleChange = (value) => {
    setCurrency(value);
  };
  useEffect(() => {
    axios.request(getOptions).then((res) => {
      setCurrencyList(res.data);
    });
  }, []);

  return (
    <div>
      <div className="navbar">
        <div className="logo">Dev Service</div>
        <div className="currency-list">
          <div>Select Currency:</div>
          <Select
            defaultValue={currency}
            style={{ width: 100 }}
            onChange={handleChange}
          >
            {currencyList
              ? currencyList.map((item, index) => (
                  <Option key={index} value={item}>
                    {item}
                  </Option>
                ))
              : ""}
          </Select>
        </div>
      </div>

      <Row
        gutter={25}
        style={{ marginTop: 100, marginLeft: 50, marginRight: 50 }}
      >
        {data.map((item, index) => (
          <Col span={8}>
            <CardComp
              key={index}
              title={item.title}
              description={item.description}
              price={item.price}
              currencyType={currency}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default App;
