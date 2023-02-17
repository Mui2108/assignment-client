import { Card, Col, Row } from "antd";

import cloudy from "@assets/icons/cloudy.svg";
import WeatherItem from "./WeatherItem";
const data = [
  { time: "now", icon: "cloudy", temp: 30 },
  { time: "11.00", icon: "cloudy", temp: 26 },
  { time: "12.00", icon: "rain", temp: 24 },
  { time: "13.00", icon: "storm", temp: 25 },
  { time: "14.00", icon: "storm", temp: 25 },
  { time: "15.00", icon: "rain", temp: 25 },
];
const Weather = () => {
  return (
    <Card style={{ height: "100%" }} className="card-climate">
      <Row>
        <Col span={14}>
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <img
              src={cloudy}
              style={{ width: "55%", margin: "0 25px" }}
              alt="cloudy"
            />
          </div>
          <p
            style={{
              position: "absolute",
              top: 25,
              right: 25,
              fontSize: "1.5rem",
              color: "white",
            }}
          >
            25 ํ
          </p>
        </Col>

        <Col span={10}>
          <div>
            <p
              style={{
                color: "white",
                margin: 0,
                flexWrap: "nowrap",
                fontSize: "1.5vw",
              }}
            >
              Mostly Sunny
            </p>
            <p
              style={{
                color: "white",
                fontSize: "1.2vw",
                margin: 0,
                fontFamily: "Prompt-Light",
                marginBottom: 8,
              }}
            >
              H:37 L:29
            </p>
            <div style={{ color: "white", fontFamily: "Prompt-Light" }}>
              <p style={{ margin: 0, fontSize: "0.8vw" }}>Precipitation: 4%</p>
              <p style={{ margin: 0, fontSize: "0.8vw" }}>Humidity: 51%</p>
              <p style={{ margin: 0, fontSize: "0.8vw" }}>Wind: 14 km/h</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row style={{ marginTop: 18 }} justify="center" gutter={12}>
        {data.map((item, idx) => (
          <Col span={4} key={idx}>
            <WeatherItem
              icon={item.icon as "cloudy" | "rain" | "storm"}
              temp={item.temp}
              time={item.time}
            />
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default Weather;
