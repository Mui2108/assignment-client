import mockupImage from "@assets/images/mockup.svg";
import brand from "@assets/icons/brand.svg";
import { HiOutlineUser, HiOutlineLockClosed } from "react-icons/hi";

import { Form, Input, MenuProps, notification, Spin } from "antd";
import useScreens from "@components/hooks/useScreens";
import useWindowDimensions from "@components/hooks/useWindowDimensions ";
import Dropdown from "@components/forms/Dropdown";

import { useEffect, useState } from "react";

import { ILogin } from "@services/interfaces/login";
import { LOGIN } from "@services/api/login";
import { useNavigate } from "react-router-dom";
import { GET_ORGRANIZATION } from "@services/api/organization";

const Login = () => {
  const screen = useScreens().includes("portrait");
  const { width } = useWindowDimensions();
  const [form] = Form.useForm();
  const [organization, setOrganization] = useState<MenuProps["items"]>([]);
  const [isLoad, setIsload] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
    getOrganization();
  }, []);

  const login = async (data: ILogin) => {
    try {
      setIsload(true);
      const res = await LOGIN({ ...data });
      if (res.code === 200) {
        localStorage.setItem("user", JSON.stringify(res.userInfo));
        localStorage.setItem("token", res.accessToken as string);
        navigate("/");
      } else {
        notification.error({
          message: "Login failed",
          description: "Your username or password is incorrect",
          duration: 3,
        });
      }
    } catch (error) {
      notification.info({
        message: "Internal server error",
      });
    } finally {
      setIsload(false);
    }
  };

  const getOrganization = async () => {
    try {
      setIsload(true);
      const res = await GET_ORGRANIZATION();
      if (res.code === 200) {
        const _organization = res.result.map((item) => {
          return { label: item.name, key: String(item.id) };
        });
        setOrganization(_organization);
      }
    } catch (error) {
      notification.info({
        message: "Internal server error",
      });
    } finally {
      setIsload(false);
    }
  };

  return (
    <div className="login-page">
      {!screen && width > 900 ? (
        <img src={mockupImage} className="mockup-image" alt="mockup" />
      ) : null}

      <div
        className="card-login"
        style={{ width: !screen && width > 900 ? "28%" : "45%" }}
      >
        <img src={brand} width={"80%"} alt="brand" />
        <Form
          form={form}
          size="large"
          layout="vertical"
          style={{ width: "100%" }}
          onFinish={login}
        >
          <Form.Item name={"organization"} label={<p>Organization</p>}>
            <Dropdown items={organization} />
          </Form.Item>
          <Form.Item name={"username"}>
            <Input
              prefix={<HiOutlineUser />}
              className="input-login-custom"
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item name={"password"}>
            <Input.Password
              className="input-login-custom"
              prefix={<HiOutlineLockClosed />}
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <div
              className="loign-btn"
              onClick={() => (!isLoad ? form.submit() : null)}
            >
              <Spin spinning={isLoad} /> Login
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
