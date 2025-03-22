import moviesStore from '../../store/movies-store.js';
import './render-table.css';

let table;

const createTable = () => {
    const table = document.createElement('table');
    const tableHeaders = document.createElement('thead');
    tableHeaders.innerHTML = `
        <tr>
            <th>#ID</th>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Actions</th>
        </tr>
    `;

    const tableBody = document.createElement('tbody');
    table.append(tableHeaders, tableBody);

    return table;
}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTable = (element) => {
    
    const movies = moviesStore.getMovies();
    // console.log(movies);


    if(!table){
        table = createTable();
        element.append(table);

        // TODO: listeners to table
        // table.addEventListener('click', e => tableSelectListener(e));
        // table.addEventListener('click', tableSelectListener );
        // table.addEventListener('click', tableDeleteListener );

    }

    let tableHTML = '';

    movies.forEach(movie => {
        tableHTML += `
            <tr>
                <td>${ movie.id }</td>
                <td>${ movie.title }</td>
                <td>${ movie.year }</td>
                <td>${ movie.director }</td>
                <td>
                    <a href="#/" class="select-movie" data-id="${ movie.id }">Select</a>
                    |
                    <a href="#/" class="delete-movie" data-id="${ movie.id }">Delete</a>
                </td>
            </tr>
        `;
    });

    table.querySelector('tbody').innerHTML = tableHTML;

}
