import './style.css'
import { MoviesApp } from './movies/movies-app';


document.querySelector('#app').innerHTML = `
  <div>
    <h1>Film catalog API</h1>
    <div class="card">
    </div>
  </div>
`

const element = document.querySelector('.card');

MoviesApp(element);
