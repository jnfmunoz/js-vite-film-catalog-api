import { Movie } from "../models/movie";
import Swal from "sweetalert2";


/**
 * 
 * @param {Like<Movie>} movieLike 
 * @returns 
 */
export const saveMovie = async ( movieLike ) => {

    const movie = new Movie(movieLike);

    if( !movie.title || !movie.director || movie.year === 0){
        // throw 'Title, director and year are required!';
        await Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Title, director and year are required!',            
        });
        return;
    }

    const confirmation = await Swal.fire({
        title: 'Are you sure?',
        text: movie.id ? 'Do you want to update this movie?' : 'Do you want to add this movie?',
        icon:'warning',
        showCancelButton: true,
        confirmButtonText: 'Savee',
        cancelButtonText: 'Cancel',
    });

    if (confirmation.isConfirmed) {
        try {
            if (movie.id) {
                Swal.fire('Updated!', 'Your movie has been updated.', 'success');
                return await updateMovie(movie);
            } else {
                Swal.fire('Added!', 'Your movie has been added.', 'success');
                return await createMovie(movie);
            }
        } catch (error) {            
            Swal.fire('Error!', 'Something went wrong.', 'error');
        }
    } else {
        Swal.fire('Cancelled', 'Your movie was not saved', 'info');
    }
}


/**
 * 
 * @param {Like<Movie>} movie 
 */
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


/**
 * 
 * @param {Like<Movie>} movie 
 */
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
