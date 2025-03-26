import moviesStore from "./store/movies-store";
import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderTable } from "./presentation/render-table/render-table";
import { renderAddButton } from "./presentation/render-add-button/render-add-button";
import { renderModal } from "./presentation/render-modal/render-modal";
import { saveMovie } from "./uses-cases/save-movie";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const MoviesApp = async ( element ) => {
    
    element.innerHTML = 'Loading...';
    await moviesStore.loadNextPage();
    element.innerHTML = '';

    renderTable(element);
    renderButtons(element);
    renderAddButton(element);
    renderModal(element, async(movieLike) =>{
        const movie = await saveMovie(movieLike);
        moviesStore.onMovieChanged(movie);
        renderTable();
    });
}
