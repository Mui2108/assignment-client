import { Avatar, Button, Layout } from "antd";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { RiUser3Line } from "react-icons/ri";

const format = "ddd DD MMM YYYY HH:mm";
const Header = () => {
  const [today, setDate] = useState(dayjs().format(format));

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(dayjs().format(format));
    }, 60 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Layout.Header
      className="top-layout"
      style={{ padding: 14, height: "100%" }}
    >
      <div className="header-layout">
        <div className="user-layout-info">
          <Avatar size={50} icon={<RiUser3Line />} />
          <div>
            <p>Miss Lorem Ipsumlorem</p>
            <p>Maid : Men floor 6</p>
          </div>
        </div>
        <div>
          <p className="time-today-layout">{today} </p>
        </div>
        <div>
          <Button type="primary" className="login-layout-btn">
            Login
          </Button>
        </div>
      </div>
    </Layout.Header>
  );
};

export default Header;
