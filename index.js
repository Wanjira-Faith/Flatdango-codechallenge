const url = "http://localhost:3000/films";

function fetchfilms(){
    fetch(url)
    .then(resp => resp.json())
    .then(films =>displayMovieList(films))
}

function displayMovieList(films){
    const movieList =document.getElementById('movie-list')
    films.forEach(film => {
        const list =document.createElement('li');
        list.textContent = film.title
        movieList.appendChild(list);

        //display first movie when the page loads
        if(film === films[0]){
            displayMovieDetails(film)
        }
        list.addEventListener('click', () =>{
            displayMovieDetails(film)
        });
 
    })
}