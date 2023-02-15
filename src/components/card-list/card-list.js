import { Component } from "react";
import Card from "../card";
import "./card-list.css";

class MovieApiService {
  async getResource(quary) {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=c2a695c37503e6cbe4fa21a2c769151b&query=${quary}&page=1`
    );
    if (!res.ok) {
      throw new Error(
        `Could not fetch quary: ${quary}, received ${res.status}`
      );
    }
    return await res.json();
  }

  async getMovies(quary) {
    const res = await this.getResource(quary);
    return await res.results;
  }
}

export default class CardList extends Component {
  movieApiService = new MovieApiService();
  state = {
    movies: [],
  };

  constructor() {
    super();
    this.updateMovies();
  }

  updateMovies() {
    this.movieApiService
      .getMovies("return")
      .then((movies) => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;
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

    return <ul className="card-list">{cards}</ul>;
  }
}
