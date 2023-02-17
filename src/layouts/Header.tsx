import { IUserInfo } from "@services/interfaces/login";
import { Avatar, Button, Layout } from "antd";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { RiUser3Line } from "react-icons/ri";

const format = "ddd DD MMM YYYY HH:mm";
const Header = () => {
  const [today, setDate] = useState(dayjs().format(format));
  const [user, setUser] = useState<IUserInfo>();
  useEffect(() => {
    const dataUser = localStorage.getItem("user");
    if (dataUser) setUser(JSON.parse(dataUser));

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
          <Avatar size={50} icon={<RiUser3Line />} src={user?.profile} />
          <div>
            <p>
              {user?.prefix} {user?.name}
            </p>
            <p>
              {user?.position} :{user?.part}
            </p>
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
