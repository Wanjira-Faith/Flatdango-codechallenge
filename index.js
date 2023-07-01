const url = "http://localhost:3000/films";

function fetchfilms(){
    fetch(url)
    .then(resp => resp.json())
    .then(films =>displayMovieList(films))
}