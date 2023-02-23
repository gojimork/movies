import React, { Component } from "react";
import MovieApiService from "../../services";
import Card from "../card";
import "./rated-list.css";

export default class RatedList extends Component {
  movieApiService = new MovieApiService();

  state = { movies: [] };

  componentDidMount() {
    this.getRatedMoveis();
  }

  getRatedMoveis() {
    const { guestSessionId } = this.props;
    if (!guestSessionId) return;
    this.movieApiService.getRatedMovie(guestSessionId).then((movies) => {
      console.log(movies.results);
      this.setState({ movies: movies.results });
    });
  }

  render() {
    const { movies } = this.state;
    if (movies.length === 0) return;
    const cards = movies.map((movie) => (
      <li key={movie.id}>
        <Card
          movieId={movie.id}
          title={movie.title}
          poster={movie.poster_path}
          vote={movie.rating}
          release={movie.release_date}
          description={movie.overview}
          guestSessionId={this.props.guestSessionId}
        />
      </li>
    ));
    return <ul className="card-list">{cards}</ul>;
  }
}
