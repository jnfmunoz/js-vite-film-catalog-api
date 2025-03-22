



export class Movie {

    /**
     * 
     * @param {Like<Movie>} movieDataLike
     */
    constructor({ id, title, year, director }){
        
        this.id = id;
        this.title = title;
        this.year = year;
        this.director = director;

    }

}