import moviesStore from "./store/movies-store";
import { renderTable } from "./presentation/render-table/render-table";


export const MoviesApp = async ( element ) => {
    
    element.innerHTML = 'Loading...';
    await moviesStore.loadNextPage();
    element.innerHTML = '';

    renderTable(element);


}