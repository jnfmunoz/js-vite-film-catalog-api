import { Movie } from "../models/movie"
import { loadMoviesByPage } from "../uses-cases/load-movies-by-page"


const state = {
    currentPage: 0,
    movies: [],
    pages: 1,
}

const loadNextPage = async() => {
    
    if(state.currentPage >= state.pages) return;
    
    const { data, pages } = await loadMoviesByPage(state.currentPage + 1);
    
    if(data.length === 0) return;
    
    state.movies = data;
    state.currentPage += 1;
    state.pages = pages;
    
    // console.log(state);
    
}

const loadPreviousPage = async() =>{

    if(state.currentPage <= 1) return;

    const movies = await loadMoviesByPage(state.currentPage - 1);

    state.currentPage -= 1;
    state.movies = movies.data;
    state.pages = movies.pages;
}

const onMovieChanged = ( updatedMovie ) => {
    
    let wasFound = false;

    state.movies = state.movies.map( movie => {

        if(movie.id === updatedMovie.id){
            wasFound = true;

            return updatedMovie;
        }

        return movie;
    });

    if(state.movies.length < 10 && !wasFound){
        state.movies.push(updatedMovie);
    }

}

const reloadPage = async() =>{

    const movies = await loadMoviesByPage(state.currentPage);
    // if(movies.length === 0){
    //     await loadPreviousPage();
    //     return;
    // };

    
    if (!Array.isArray(movies)) {
        console.error('La respuesta no es un array:', movies);
        return;
    }

    state.movies = movies;
}

export default {
    loadNextPage,
    loadPreviousPage,
    onMovieChanged,
    reloadPage,

    /**
     * 
     * @returns {Movie[]}
     */
    getMovies: () => [ ...state.movies ],

    /**
     * 
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage,

}
