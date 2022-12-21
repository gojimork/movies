import { Pagination } from "antd";
import Header from "../header";
import CardList from "../card-list";
import "./app.css";

const App = () => {
  return (
    <div className="app-wrap">
      <Header />
      <CardList />
      <Pagination defaultCurrent={1} total={50} />
    </div>
  );
};
export default App;
