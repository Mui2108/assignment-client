import mockupImage from "@assets/images/mockup.svg";
import brand from "@assets/icons/brand.svg";
import { HiOutlineUser, HiOutlineLockClosed } from "react-icons/hi";

import { Form, Input, MenuProps } from "antd";
import useScreens from "@components/hooks/useScreens";
import useWindowDimensions from "@components/hooks/useWindowDimensions ";
import Dropdown from "@components/forms/Dropdown";
const Login = () => {
  const screen = useScreens().includes("portrait");
  const { width } = useWindowDimensions();
  const [form] = Form.useForm();
  const items: MenuProps["items"] = [
    {
      label: "1st menu item",
      key: "1",
    },
    {
      label: "2nd menu item",
      key: "2",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

  const onFinish = async (value: any) => {
    console.log(value);
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
          onFinish={onFinish}
        >
          <Form.Item name={"organization"} label={<p>Organization</p>}>
            <Dropdown items={items} />
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
            <div className="loign-btn" onClick={() => form.submit()}>
              Login
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
