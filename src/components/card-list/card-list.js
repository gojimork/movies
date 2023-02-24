import React from "react";
import { Component } from "react";
import Card from "../card";
import ErrorIndicator from "../error-indicator";
import { Spin } from "antd";

import MovieApiService from "../../services";
import "./card-list.css";
import { Consumer } from "../genres-contex";

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
    const { request, page } = this.props;
    if (request !== prevProps.request || page !== prevProps.page) {
      this.updateMovies(request, page);
    }
  }

  updateMovies(request, page) {
    if (!request) {
      this.setState({ emptyQuary: true });
      return;
    }
    this.setState({ loading: true, emptyQuary: false });
    this.movieApiService
      .getMovies(request, page)
      .then((movies) => {
        this.setState({ movies, loading: false });
      })
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
    const cards = movies.map(
      ({
        id,
        title,
        poster_path,
        rating,
        release_date,
        overview,
        genre_ids,
      }) => (
        <li key={id}>
          <Consumer>
            {(genresBase) => {
              const genres = genre_ids.map((id) => (
                <li key={id}>{genresBase[id]}</li>
              ));

              return (
                <Card
                  movieId={id}
                  title={title}
                  poster={poster_path}
                  vote={rating}
                  release={release_date}
                  description={overview}
                  guestSessionId={this.props.guestSessionId}
                  genres={genres}
                />
              );
            }}
          </Consumer>
        </li>
      )
    );
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
