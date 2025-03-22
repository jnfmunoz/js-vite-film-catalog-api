import moviesStore from '../../store/movies-store';
import { renderTable } from '../render-table/render-table';
import './render-buttons.css';

export const renderButtons = (element) => {

    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next >';

    const prevButton = document.createElement('button');
    prevButton.innerText = '< Prev';

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerText = moviesStore.getCurrentPage();

    element.append(prevButton, currentPageLabel, nextButton);

    nextButton.addEventListener('click', async() => {
        await moviesStore.loadNextPage();
        currentPageLabel.innerHTML = moviesStore.getCurrentPage();
        renderTable(element);

    });

    prevButton.addEventListener('click', async() => {
        await moviesStore.loadPreviousPage();
        currentPageLabel.innerHTML = moviesStore.getCurrentPage();
        renderTable(element);
    });

}