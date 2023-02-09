import { Layout } from "antd";
import React from "react";
import nav from "./nav";
interface Props {
  style?: React.CSSProperties;
}

const Sider = ({ style }: Props) => {
  return (
    <Layout.Sider style={style} width={"100px"}>
      {nav.map((item, idx) => (
        <div className="item-menu" key={idx}>
          {item.icon}
          {item.name}
        </div>
      ))}
    </Layout.Sider>
  );
};

export default Sider;
