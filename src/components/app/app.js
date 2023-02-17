import { Pagination } from "antd";
import Header from "../header";
import CardList from "../card-list";
import "./app.css";
import { Component } from "react";
import debounce from "lodash.debounce";

export default class App extends Component {
  state = {
    label: "",
    page: 1,
  };

  onPageChange = (e) => {
    this.setState({ page: e });
  };

  updateQuary = (e) => {
    this.setState({ label: e.target.value, page: 1 });
  };

  debounceOnChange = debounce(this.updateQuary, 500);

  render() {
    const { label, page } = this.state;
    console.log(page);
    return (
      <div className="app-wrap">
        <Header onLabelChange={this.debounceOnChange} />
        <CardList request={label} page={page} />
        <Pagination current={page} total={50} onChange={this.onPageChange} />
      </div>
    );
  }
}
