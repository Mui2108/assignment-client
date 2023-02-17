import StatusWork from "@components/widget/StatusWork";
import Tewmperature from "@components/widget/Tewmperature";
import Weather from "@components/widget/Weather";
import { Card, Col, notification, Row } from "antd";
import trashcan from "@assets/icons/trashcan.svg";
import toiletPaper from "@assets/icons/toilet-paper.svg";
import toiletBolw from "@assets/icons/toilet-bolw.svg";
import urinal from "@assets/icons/urinal.svg";
import water from "@assets/icons/water.svg";
import wetSign from "@assets/icons/wet-sign.svg";
import document from "@assets/icons/document.svg";
import nose from "@assets/icons/nose.svg";
import { useEffect, useState } from "react";
import { _isEmpty } from "@tools/util";
import { useNavigate } from "react-router-dom";
import { GET_TEMPERATURE, GET_TIMELINE } from "@services/api/timeline";
import { ITemperature, ITimeline } from "@services/interfaces/timeline";

const menuButton = [
  { name: "Trash Full", icon: trashcan },
  { name: "Tissue Paper", icon: toiletPaper },
  { name: "The water is not running", icon: water },
  { name: "Smell", icon: nose },
  { name: "Wet Floor", icon: wetSign },
  { name: "Flush Toilet", icon: toiletBolw },
  { name: "Urinal", icon: urinal },
  { name: "Others", icon: document },
];

const HomePage = () => {
  const navigate = useNavigate();

  const [timeline, setTimeline] = useState<ITimeline[]>([]);
  const [temperature, setTemperature] = useState<ITemperature>({
    humidity: 0,
    temp: 0,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (_isEmpty(token)) {
      navigate("/login");
    } else {
      getTemperature();
      getTimeline();
    }
  }, []);

  const getTemperature = async () => {
    try {
      const res = await GET_TEMPERATURE();
      if (res.code === 200) {
        setTemperature(res.result);
      } else {
        notification.error({
          message: "Can't ghet data",
          duration: 3,
        });
      }
    } catch (error) {
      notification.info({
        message: "Internal server error",
      });
    }
  };

  const getTimeline = async () => {
    try {
      const res = await GET_TIMELINE();
      if (res.code === 200) {
        setTimeline(res.result);
      } else {
        notification.error({
          message: "Can't ghet data",
          duration: 3,
        });
      }
    } catch (error) {
      notification.info({
        message: "Internal server error",
      });
    }
  };

  return (
    <div>
      <Row gutter={12}>
        <Col span={8}>
          <Weather />
        </Col>
        <Col span={16}>
          <Tewmperature
            humidity={temperature.humidity}
            temperature={temperature.temp}
          />
          <StatusWork value={timeline} />
        </Col>
      </Row>

      <Row gutter={12} style={{ marginTop: 12 }}>
        {menuButton.map((item, idx) => (
          <Col span={6} style={{ padding: "6px 12px" }} key={idx}>
            <Card className="card-climate  card-item" style={{ margin: "0" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  width={"30%"}
                  style={{ marginBottom: 12 }}
                />
                <p
                  style={{
                    margin: 0,
                    fontSize: "1.4vw",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  {item.name}
                </p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;
