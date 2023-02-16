import { Card, Col, Row } from "antd";
import temperatureIcon from "@assets/icons/temperature.svg";
import humidityIcon from "@assets/icons/humidity.svg";
interface Props {
  temperature: number;
  humidity: number;
}
const Tewmperature = ({ humidity, temperature }: Props) => {
  return (
    <Card
      style={{ height: "calc(50% - 6px)", marginBottom: 12, padding: "0 8px" }}
      className="card-climate"
    >
      <Row>
        <Col span={8}>
          <p
            style={{
              margin: 0,
              color: "white",
              fontSize: "1.5vw",
            }}
          >
            TEMPERATURE
          </p>
          <div
            style={{
              display: "flex",
              color: "white",
              alignItems: "center",
            }}
          >
            <img src={temperatureIcon} alt="temperatureIcon" width={"30vw"} />
            <p style={{ fontSize: "3.5vw", margin: 0, paddingLeft: 24 }}>
              {`${temperature} ํ`}
            </p>
          </div>
        </Col>
        <Col span={8}>
          <p style={{ margin: 0, color: "white", fontSize: "1.5vw" }}>
            HUMIDITY
          </p>
          <div
            style={{
              display: "flex",
              color: "white",
              alignItems: "center",
            }}
          >
            <img src={humidityIcon} alt="humidityIcon" width={"30vw"} />
            <p style={{ fontSize: "3.5vw", margin: 0, paddingLeft: 24 }}>
              {`${humidity} %`}
            </p>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default Tewmperature;
