



/**
 * 
 * @param {String|Number} id 
 */
export const deleteMovieById = async ( id ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/movies/${ id }`;
    const res = await fetch(url, {
        method: 'DELETE',
    });

    // const deleteResult = await res.json();

    return true;

}
