export default class MovieApiService {
  async getResource(quary) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=c2a695c37503e6cbe4fa21a2c769151b&query=${quary}&page=1`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(
        `Could not fetch quary: ${quary}, received ${res.status}`
      );
    }
    return await res.json();
  }

  async getMovies(quary) {
    const res = await this.getResource(quary);
    if (!res.total_results) {
      throw new Error(`Movie "${quary}" is not a found`);
    }
    return await res.results;
  }
}
