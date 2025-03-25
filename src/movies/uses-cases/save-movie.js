import { Movie } from "../models/movie";

export const saveMovie = async ( movieLike ) => {

    const movie = new Movie(movieLike);

    if( !movie.title || !movie.director || movie.year === 0){
        throw 'Title, director and year are required!';
    }

    if (movie.id){
        return await updateMovie(movie);
    } else {
        return await createMovie(movie);
    }

}

const createMovie = async ( movie ) => {
    
    const url = `${ import.meta.env.VITE_BASE_URL }/movies`;
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const newMovie = await response.json();

    return newMovie;

}

const updateMovie = async ( movie ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/movies/${ movie.id }`;
    const response = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(movie),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const updateMovie = await response.json();

    return updateMovie;
}
