import React from "react";
import { Component } from "react";
import Card from "../card";
import ErrorIndicator from "../error-indicator";
import { Spin } from "antd";

import MovieApiService from "../../services";
import "./card-list.css";

export default class CardList extends Component {
  movieApiService = new MovieApiService();
  state = {
    movies: [],
    loading: false,
    error: false,
    errorMessage: null,
    emptyQuary: true,
  };

  componentDidUpdate(prevProps) {
    if (this.props.request !== prevProps.request) {
      this.updateMovies(this.props.request);
    }
  }

  updateMovies(request) {
    if (!request) {
      this.setState({ emptyQuary: true });
      return;
    }
    this.setState({ loading: true, emptyQuary: false });
    this.movieApiService
      .getMovies(request)
      .then((movies) => this.setState({ movies, loading: false }))
      .catch((err) => {
        this.setState({
          error: true,
          errorMessage: err.message,
          loading: false,
        });
      });
  }

  render() {
    const { movies, loading, error, errorMessage, emptyQuary } = this.state;
    const hasData = !(error || loading || emptyQuary);
    const errorIndicator = error ? (
      <ErrorIndicator errorMessage={errorMessage} />
    ) : null;
    const spin = loading ? <Spin /> : null;
    const cards = movies.map((movie) => (
      <li key={movie.id}>
        <Card
          title={movie.original_title}
          poster={movie.poster_path}
          vote={movie.vote_average}
          release={movie.release_date}
          description={movie.overview}
        />
      </li>
    ));
    const content = hasData ? <ul className="card-list">{cards}</ul> : null;

    return (
      <React.Fragment>
        {errorIndicator}
        {spin}
        {content}
      </React.Fragment>
    );
  }
}
