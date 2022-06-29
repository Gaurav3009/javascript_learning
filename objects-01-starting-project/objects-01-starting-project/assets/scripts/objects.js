const addMovieBtn = document.querySelector('#add-movie-btn');
const searchBtn = document.querySelector('#search-btn');
const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.querySelector('#movie-list');

    if(movies.length === 0){
        movieList.classList.remove('visible');
        return;
    }else{
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';
    const filteredMovies = !filter ? movies : movies.filter((movie) => movie.info.title.includes(filter));

    filteredMovies.forEach((movie) => {
        const movieEl = document.createElement('li');
        let text = movie.info.title + ' - ';
        for(const key in movie.info){
            if(key !== 'title'){
                text = text + `${key} : ${movie.info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    })
}

const addMovieHandler = () => {
    const title = document.querySelector('#title').value;
    const extraName = document.querySelector('#extra-name').value;
    const extraValue = document.querySelector('#extra-value').value;

    if(
        title.trim() === '' ||
        extraName.trim() === '' ||
        extraValue.trim() === ''
    ){
        return;
    }

    const newMovie = {
        info : {
            title,
            [extraName] : extraValue
        },
        id : Math.random().toString() // chaining of methods
    }

    movies.push(newMovie);
    renderMovies();
}

const searchMovieHandler = () => {
    const filterTerm = document.querySelector('#filter-title').value;
    renderMovies(filterTerm);
}


addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);





