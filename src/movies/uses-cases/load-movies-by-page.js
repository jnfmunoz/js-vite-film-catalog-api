import { Movie } from "../models/movie";

/**
 * 
 * @param {Number} page 
 * @returns {Promise<Movie[]>}
 */
export const loadMoviesByPage = async( page=1 ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/movies?_page=${ page }`;

    const response = await fetch(url);
    const data = await response.json();

    // console.log(data);

    return data;

}
