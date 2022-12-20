import { useState } from "react";
import { Menu, Input, Space } from "antd";
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
    <Space direction="vertical">
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <Input placeholder="Type to search..." />
    </Space>
  );
};
export default Header;
