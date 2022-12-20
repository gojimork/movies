import { Space } from "antd";
import Header from "../header";
import CardList from "../card-list";
import "./app.css";

const App = () => {
  return (
    <Space direction="vertical">
      <Header />
      <CardList />
    </Space>
  );
};
export default App;
