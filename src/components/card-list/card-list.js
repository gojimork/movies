import React from "react";
import { Component } from "react";
import Card from "../card";
import { Spin } from "antd";
import MovieApiService from "../../services";
import "./card-list.css";

export default class CardList extends Component {
  movieApiService = new MovieApiService();
  state = {
    movies: [],
    loading: true,
  };

  constructor() {
    super();
    this.updateMovies();
  }

  updateMovies() {
    this.movieApiService
      .getMovies("return")
      .then((movies) => this.setState({ movies, loading: false }));
  }

  render() {
    const { movies, loading } = this.state;
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
    const content = <ul className="card-list">{cards}</ul>;

    return (
      <React.Fragment>
        {spin}
        {content}
      </React.Fragment>
    );
  }
}
