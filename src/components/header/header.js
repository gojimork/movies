import { useState } from "react";
import { Menu, Input, Space } from "antd";
import "./header.css";
const items = [
  {
    label: "Search",
    key: "Search",
  },
  {
    label: "Rated",
    key: "Rated",
  },
];
const Header = () => {
  const [current, setCurrent] = useState("Search");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Space className="header" direction="vertical" align="center" size="middle">
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <Input className="header__search-input" placeholder="Type to search..." />
    </Space>
  );
};
export default Header;
