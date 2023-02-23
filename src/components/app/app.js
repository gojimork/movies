import { Pagination } from "antd";
import Header from "../header";
import CardList from "../card-list";
import MovieApiService from "../../services";
import RatedList from "../rated-list/rated-list";
import "./app.css";
import { Component } from "react";
import debounce from "lodash.debounce";

export default class App extends Component {
  movieApiService = new MovieApiService();

  state = {
    label: "",
    page: 1,
    guestSessionId: null,
    tab: "Search",
  };

  componentDidMount() {
    this.movieApiService
      .guestSession()
      .then((body) => this.setState({ guestSessionId: body.guest_session_id }));
  }

  tabChange = (value) => {
    this.setState({ tab: value });
  };

  onPageChange = (e) => {
    this.setState({ page: e });
  };

  updateQuary = (e) => {
    this.setState({ label: e.target.value, page: 1 });
  };

  debounceOnChange = debounce(this.updateQuary, 500);

  render() {
    const { label, page, guestSessionId, tab } = this.state;
    const cardList =
      tab === "Search" ? (
        <CardList request={label} page={page} guestSessionId={guestSessionId} />
      ) : (
        <RatedList guestSessionId={guestSessionId} />
      );
    const pagination = label ? (
      <Pagination current={page} total={50} onChange={this.onPageChange} />
    ) : null;
    return (
      <div className="app-wrap">
        <Header
          onLabelChange={this.debounceOnChange}
          tabChange={this.tabChange}
        />
        {cardList}
        {pagination}
      </div>
    );
  }
}
