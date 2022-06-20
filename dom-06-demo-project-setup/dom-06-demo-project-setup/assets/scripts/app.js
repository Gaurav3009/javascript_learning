const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAdMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const movies = []; // arrays to store movies 
const entryTextSection = document.getElementById('entry-text');


const updateUI = () => {
    if(movies.length == 0){
        entryTextSection.style.display = 'block';
    }else{
        entryTextSection.style.display = 'none';
    }
}

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
}

const deleteMovie = (movieid) => {
    let movieIndex = 0;
    for(const movie of movies){
        if(movie.id === movieId){
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1); // to delete the movie from the movies array
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
}

const deleteMovieHandler = (movieId) => {
    const deleteMovieModal = document.getElementById('delete-modal');
    deleteMovieModal.classList.add('visible');
    
    //deleteMovie(movieId);
}



const renderMovieElement = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
    <div class = "movie-element_image">
        <img src = "${imageUrl}" alt = "${title}">
    </div>
    <div class = "movie-element_info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
    </div>
    `;
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
}

const showMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
}

const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
}

const cancelAddMovie = () => {
    showMovieModal();
}

const backdropClickHandler = () => {
    closeMovieModal();
    clearMovieInput();
}

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;
    if(titleValue.trim() == '' || imageUrlValue.trim() == '' || ratingValue.trim() ==  '' || +ratingValue < 1 || +ratingValue > 5){
        alert('Invalid Input');
        return;
    }
    const newMovies = {
        id : Math.random().toString(),
        title : titleValue,
        image : imageUrlValue,
        rating : ratingValue
    }
    movies.push(newMovies);
    console.log(movies);
    closeMovieModal();
    renderMovieElement(newMovies.id, titleValue, imageUrlValue, ratingValue);
    clearMovieInput();
    updateUI();

}
const clearMovieInput = () => {
    for(const userInput of userInputs){
        userInput.value = '';
    }
}

startAddMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);
confirmAdMovieButton.addEventListener('click', addMovieHandler);

