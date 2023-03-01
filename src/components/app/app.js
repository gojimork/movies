import { Pagination } from "antd";
import Header from "../header";
import CardList from "../card-list";
import MovieApiService from "../../services";
import RatedList from "../rated-list/rated-list";
import "./app.css";
import { Component } from "react";
import debounce from "lodash.debounce";
import { Provider } from "../genres-contex";

export default class App extends Component {
  movieApiService = new MovieApiService();

  state = {
    label: "",
    page: 1,
    guestSessionId: null,
    tab: "Search",
    totalResults: 10,
  };

  componentDidMount() {
    this.movieApiService
      .guestSession()
      .then((body) => this.setState({ guestSessionId: body.guest_session_id }));
    this.movieApiService
      .getGenres()
      .then((genresBase) => this.setState({ genresBase }));
  }

  setTotalResults = (totalResults) => {
    this.setState({ totalResults });
  };

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
    const { label, page, guestSessionId, tab, genresBase, totalResults } =
      this.state;
    const cardList =
      tab === "Search" ? (
        <CardList
          request={label}
          page={page}
          guestSessionId={guestSessionId}
          setTotalResults={this.setTotalResults}
        />
      ) : (
        <RatedList
          guestSessionId={guestSessionId}
          setTotalResults={this.setTotalResults}
        />
      );
    const pagination = label ? (
      <Pagination
        current={page}
        total={totalResults}
        onChange={this.onPageChange}
      />
    ) : null;
    return (
      <Provider value={genresBase}>
        <div className="app-wrap">
          <Header
            onLabelChange={this.debounceOnChange}
            tabChange={this.tabChange}
          />
          {cardList}
          {pagination}
        </div>
      </Provider>
    );
  }
}
