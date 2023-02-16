import Header from "./Header";
import Contents from "./Contents";
import { Layout } from "antd";
import React from "react";

const Layouts = () => {
  const contentStyle: React.CSSProperties = {
    minHeight: 120,
    color: "#fff",
    padding: "0 14px",
    height: "calc(100vh - 98px)",
  };

  return (
    <Layout>
      <Header />
      <Layout>
        <Contents style={contentStyle} />
      </Layout>
    </Layout>
  );
};

export default Layouts;
