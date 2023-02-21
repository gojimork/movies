export default class MovieApiService {
  apiBase = "https://api.themoviedb.org/3";
  apiKey = "c2a695c37503e6cbe4fa21a2c769151b";

  rateMovie(movieId, sessionId, rate) {
    const url = `${this.apiBase}/movie/${movieId}/rating?api_key=${this.apiKey}&guest_session_id=${sessionId}`;
    const postOption = {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        value: rate,
      }),
    };
    return fetch(url, postOption);
  }

  async guestSession() {
    const url = `${this.apiBase}/authentication/guest_session/new?api_key=${this.apiKey}`;
    const response = await fetch(url);
    return response.json();
  }

  async getResource(quary, page) {
    const url = `${this.apiBase}/search/movie?api_key=${this.apiKey}&query=${quary}&page=${page}`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(
        `Could not fetch quary: ${quary}, received ${res.status}`
      );
    }
    return await res.json();
  }

  async getMovies(quary, page) {
    const res = await this.getResource(quary, page);
    if (!res.total_results) {
      throw new Error(`Movie "${quary}" is not a found`);
    }
    return await res.results;
  }
}
