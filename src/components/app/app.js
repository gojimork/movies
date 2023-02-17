import { Pagination } from "antd";
import Header from "../header";
import CardList from "../card-list";
import "./app.css";
import { Component } from "react";
import debounce from "lodash.debounce";

export default class App extends Component {
  state = {
    label: "",
  };

  updateQuary = (e) => {
    this.setState({ label: e.target.value });
  };

  debounceOnChange = debounce(this.updateQuary, 500);

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
