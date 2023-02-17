import { Pagination } from "antd";
import Header from "../header";
import CardList from "../card-list";
import "./app.css";
import { Component } from "react";
import debounce from "lodash.debounce";

export default class App extends Component {
  state = {
    label: "go",
  };

  updateQuary = (e) => {
    this.setState({ label: e.target.value });
    console.log(1);
  };

  debounceOnChange = debounce(this.updateQuary, 2000);

  render() {
    return (
      <div className="app-wrap">
        <Header onLabelChange={this.debounceOnChange} />
        <CardList request={this.state.label} />
        <Pagination defaultCurrent={1} total={50} />
      </div>
    );
  }
}
