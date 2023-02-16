import StatusWork from "@components/widget/StatusWork";
import Tewmperature from "@components/widget/Tewmperature";
import Weather from "@components/widget/Weather";
import { Card, Col, Row } from "antd";
import trashcan from "@assets/icons/trashcan.svg";
import toiletPaper from "@assets/icons/toilet-paper.svg";
import toiletBolw from "@assets/icons/toilet-bolw.svg";
import urinal from "@assets/icons/urinal.svg";
import water from "@assets/icons/water.svg";
import wetSign from "@assets/icons/wet-sign.svg";
import document from "@assets/icons/document.svg";
import nose from "@assets/icons/nose.svg";
const timelimeStatu = [
  {
    name: "CURRENT",
    service: 3,
    urinal: 4,
    toilet: 7,
  },
  {
    name: "LAST CLEANING",
    service: 3,
    urinal: 4,
    toilet: 7,
  },
  {
    name: "COUNTING",
    service: 3,
    urinal: 4,
    toilet: 7,
  },
];

const menuButton = [
  { name: "Trash Full", icon: trashcan },
  { name: "Tissue Paper", icon: toiletPaper },
  { name: "The water is not running", icon: water },
  { name: "Smell", icon: trashcan },
  { name: "Wet Floor", icon: wetSign },
  { name: "Flush Toilet", icon: toiletBolw },
  { name: "Urinal", icon: urinal },
  { name: "Others", icon: document },
];

const HomePage = () => {
  return (
    <div>
      <Row gutter={12}>
        <Col span={8}>
          <Weather />
        </Col>
        <Col span={16}>
          <Tewmperature humidity={45} temperature={26} />
          <StatusWork value={timelimeStatu} />
        </Col>
      </Row>

      <Row gutter={12} style={{ marginTop: 12 }}>
        {menuButton.map((item, idx) => (
          <Col span={6} style={{ padding: "6px 12px" }}>
            <Card className="card-climate" style={{ margin: "0" }}>
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
