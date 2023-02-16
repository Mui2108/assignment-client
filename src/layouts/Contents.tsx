import { Layout } from "antd";
import { Outlet } from "react-router-dom";
interface Props {
  style?: React.CSSProperties;
}
const { Content } = Layout;
const Contents = ({ style }: Props) => {
  return (
    <Content style={style} className="content-layout">
      <Outlet />
    </Content>
  );
};

export default Contents;
