import { Card, Col, Row } from "antd";
import humanIcom from "@assets/icons/human.svg";
import urinalIcon from "@assets/icons/urinal.svg";
import toiletIcon from "@assets/icons/toilet-bolw.svg";
interface ITimeline {
  name: string;
  service: number;
  urinal: number;
  toilet: number;
}
interface Props {
  value: ITimeline[];
}

const StatusWork = ({ value }: Props) => {
  return (
    <Card
      style={{ height: "calc(50% - 6px)", padding: "0 24px" }}
      className="card-climate"
    >
      <Row>
        {value.map((item, idex) => (
          <Col span={8} key={idex}>
            <div>
              <p
                style={{
                  margin: 0,
                  color: "white",
                  fontSize: "1.5vw",
                }}
              >
                {item.name}
              </p>
              <div
                style={{
                  display: "flex",
                  color: "white",
                  alignItems: "center",
                }}
              >
                <img src={humanIcom} alt="temperatureIcon" width={"25vw"} />
                <p
                  style={{
                    fontSize: "3.5vw",
                    margin: 0,
                    color: "#1DD1E3",
                    paddingLeft: 18,
                  }}
                >
                  {item.service}
                </p>

                <Col>
                  <div
                    style={{
                      display: "flex",
                      color: "white",
                      alignItems: "center",
                      paddingLeft: 18,
                    }}
                  >
                    <img
                      src={toiletIcon}
                      alt="temperatureIcon"
                      width={"20vw"}
                    />
                    <p
                      style={{
                        fontSize: "2vw",
                        margin: 0,
                        color: "#1DD1E3",
                        paddingLeft: 8,
                      }}
                    >
                      {item.toilet}
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      color: "white",
                      alignItems: "center",
                      paddingLeft: 18,
                    }}
                  >
                    <img
                      src={urinalIcon}
                      alt="temperatureIcon"
                      width={"20vw"}
                    />
                    <p
                      style={{
                        fontSize: "2vw",
                        margin: 0,
                        color: "#1DD1E3",
                        paddingLeft: 8,
                      }}
                    >
                      {item.urinal}
                    </p>
                  </div>
                </Col>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default StatusWork;
