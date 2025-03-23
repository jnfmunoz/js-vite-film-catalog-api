import { Movie } from "../models/movie";



/**
 * 
 * @param {String|Number} id 
 * @returns {Promise<Movie>}
 */
export const getMovieById = async( id ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/movies/${ id }`;
    const response = await fetch(url);
    const data = await response.json();

    return data;

}
