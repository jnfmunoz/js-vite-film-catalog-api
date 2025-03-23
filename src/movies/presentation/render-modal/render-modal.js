import modalHtml from './render-modal.html?raw';
import { User } from '../../models/user';
import { getUserById } from '../../uses-cases/get-user-by-id';

import { Movie } from '../../models/movie';
import { getMovieById } from '../../uses-cases/get-movie-by-id';
import './render-modal.css'


let modal, form;
let loadedUser = {};

/**
 * 
 * @param {String|Number} id 
 */
export const showModal = async( id ) => {

    modal?.classList.remove('hide-modal');
    loadedMovie = {};

    if( !id ) return;
    
    const movie = await getMovieById(id);
    setFormValues(movie);

}

export const hideModal = () => {

    modal?.classList.add('hide-modal');
    form?.reset();
}

/**
 * 
 * @param {Movie} movie
 */
const setFormValues = ( movie ) => {

    form.querySelector('[name="title"]').value = movie.title;
    form.querySelector('[name="year"]').value = movie.year;
    form.querySelector('[name="director"]').value = movie.director;
    
    loadedMovie = movie;

}

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {(movieLike) => Promise<void>} callback
 */
export const renderModal = ( element, saveUserCallback ) => {
    
    if( modal ) return;
    
    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';
    form = modal.querySelector('form');

    modal.addEventListener( 'click', (e) =>{
        if(e.target.className === 'modal-container'){
            hideModal();
        }
    });

    form.addEventListener('submit', async(e) =>{
        e.preventDefault();

        const formData = new FormData(form);
        const movie = { ...loadedMovie };

        for(const [key, value] of formData){
            if(key === 'balance'){
                // userLike[key] = +value;
                userLike[key] = Number(value);
                continue;
            }

            if(key === 'isActive'){
                userLike[key] = (value === 'on') ? true : false;
                continue;
            }

            userLike[key] = value;

        }

        // console.log(userLike);
        
        await saveUserCallback(userLike);
        hideModal();
        
        
    });

    element.append(modal);

}   