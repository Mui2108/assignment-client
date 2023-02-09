import Header from "./Header";
import Sider from "./Sider";
import Contents from "./Contents";
import { Layout } from "antd";
import React from "react";

const Layouts = () => {
  const siderStyle: React.CSSProperties = {
    textAlign: "center",
    height: "calc(100vh - 64px)",
    padding: "8px",
    color: "#fff",
    backgroundColor: "#0014FF",
    marginRight: 12,
  };

  const contentStyle: React.CSSProperties = {
    minHeight: 120,
    color: "#fff",
    padding: "24px",
  };

  const headerStyle: React.CSSProperties = {
    color: "#000",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#fff",
    marginBottom: 12,
    boxShadow: " 0px 3px 6px #0000001A",
  };

  return (
    <Layout>
      <Header style={headerStyle} />
      <Layout style={{ marginTop: -12, backgroundColor: "transparent" }}>
        <Sider style={siderStyle} />
        <Contents style={contentStyle} />
      </Layout>
    </Layout>
  );
};

export default Layouts;
