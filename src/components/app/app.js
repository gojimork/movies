import { Pagination } from "antd";
import Header from "../header";
import CardList from "../card-list";
import "./app.css";
import { Component } from "react";

export default class App extends Component {
  state = {
    label: "go",
  };

  onLabelChange = (e) => {
    this.setState({ label: e.target.value });
  };

  render() {
    return (
      <div className="app-wrap">
        <Header onLabelChange={this.onLabelChange} />
        <CardList request={this.state.label} />
        <Pagination defaultCurrent={1} total={50} />
      </div>
    );
  }
}
