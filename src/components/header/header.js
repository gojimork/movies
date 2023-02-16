import { Component } from "react";
import { Menu, Input, Space } from "antd";
import "./header.css";

export default class Header extends Component {
  items = [
    {
      label: "Search",
      key: "Search",
    },
    {
      label: "Rated",
      key: "Rated",
    },
  ];
  state = {
    current: "Search",
    label: null,
  };

  setCurrent(newState) {
    this.setState({ current: newState });
  }

  onClick = (e) => {
    console.log("click ", e);
    this.setCurrent(e.key);
  };

  render() {
    return (
      <Space
        className="header"
        direction="vertical"
        align="center"
        size="middle"
      >
        <Menu
          onClick={this.onClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          items={this.items}
        />
        <Input
          className="header__search-input"
          placeholder="Type to search..."
          onChange={this.props.onLabelChange}
        />
      </Space>
    );
  }
}
