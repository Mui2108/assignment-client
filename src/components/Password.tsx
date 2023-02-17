import { Button, Col, Modal, Row } from "antd";
import { useState } from "react";
import asterisk from "@assets/icons/asterisk.svg";
interface Props {
  onFinish?: (value: string) => void;
}
const Password = ({ onFinish }: Props) => {
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState("");
  const dataNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const handlePassword = (value: number) => {
    if (password.length < 5) {
      const _newPassword = `${password}${value}`;
      setPassword(_newPassword);
    } else {
      onFinish && onFinish(password);
      setVisible(false);
      setPassword("");
    }
  };

  const handleDeletPassword = () => {
    if (password.length > 0) {
      const _newPassword = password.substring(0, password.length - 1);
      setPassword(_newPassword);
    }
  };

  return (
    <>
      <Button
        onClick={() => setVisible(true)}
        type="primary"
        className="login-layout-btn"
      >
        Login
      </Button>
      <Modal
        className="modal-password"
        footer={null}
        closeIcon={null}
        centered
        open={visible}
        onOk={() => setVisible(false)}
        style={{ background: "#0D152D" }}
        onCancel={() => setVisible(false)}
        width={"25%"}
      >
        <p style={{ textAlign: "center", fontSize: "1.5vw" }}>Enter Password</p>
        <div className="input-password">
          {password.split("").map((item) => (
            <img
              key={item + "op"}
              src={asterisk}
              width={"20px"}
              style={{ padding: "0 6px" }}
              alt={item + "op"}
            />
          ))}
        </div>

        <Row justify={"center"} gutter={[0, 12]} style={{ marginTop: 24 }}>
          {dataNumber.map((item) => (
            <Col span={8} style={{ display: "flex", justifyContent: "center" }}>
              <div className="btn-number" onClick={() => handlePassword(item)}>
                {item}
              </div>
            </Col>
          ))}
        </Row>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p
            className="prevent-select"
            style={{ margin: 0, cursor: "pointer" }}
            onClick={() => handleDeletPassword()}
          >
            Delete
          </p>
          <p
            className="prevent-select"
            style={{ margin: 0, cursor: "pointer" }}
            onClick={() => {
              setPassword("");
              setVisible(false);
            }}
          >
            Cancel
          </p>
        </div>
      </Modal>
    </>
  );
};
export default Password;
