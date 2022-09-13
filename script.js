let films = [
  {
    title: "Se7en",
    gendre: "Drama",
    producer: "James Mc. Teigue",
    minutesLength: 123,
    actors: [
      { name: "Gwyneth Paltrow, Brad Pitt, Morgan Freeman" }
    ],
    isFavorite: true,
  },
  {
    title: "Blood Diamond",
    gendre: "Drama",
    producer: "Edward Zwik",
    minutesLength: 117,
    actors: [
      { name: "Jennifer Connelly, Leonardo DiCaprio" }
    ],
    isFavorite: true,
  },
  {
    title: "Changeling",
    gendre: "Mister",
    producer: "Clint Eastwood",
    minutesLength: 103,
    actors: [
      { name: "Angelina Jolie, John Malkovich" }
    ],
    isFavorite: false,
  },
  {
    title: "Gladiator",
    gendre: "Actiune",
    producer: "Ridley Scott",
    minutesLength: 143,
    actors: [
      { name: " Russell Crowe, Connie Nielsen, Joaquin Phoenix" }
    ],
    isFavorite: false,
  },
  {
    title: "Alive",
    gendre: "Aventura",
    producer: "Franc Marshall",
    minutesLength: 127,
    actors: [
      { name: "Ethan Hawke, Vincent Spano" }
    ],
    isFavorite: true,
  },
]

let tbody = document.getElementById("films-tbody");

let titleInput = document.getElementById("title-film-input")
let gendreInput = document.getElementById("gendre-film-input")
let producerInput = document.getElementById("producer-film-input")
let minutesLengthInput = document.getElementById("minutes-length-input")
let actorsInput = document.getElementById("actors-name-input")
let createButton = document.getElementById("create-button");

let totalMinLengthSpan = document.getElementById("total-minutes-length-span")
let shortestFilmSpan = document.getElementById("shortest-film-span");
let longestFilmSpan = document.getElementById("longest-film-span");
let firstLetterInput = document.getElementById("first-letter-input");
let firstLetterButton = document.getElementById("first-letter-button");
let filmWhoBeginWithACertainLetter = document.getElementById("first-letter-span");
let gendreSpan = document.getElementById("gendre-span");
let totalFilmsSpan = document.getElementById("total-films-span")

let titleFilmFilter = document.getElementById("title-film-filter");
let gendreFilmFilter = document.getElementById("gendre-film-filter");
let producerFilmFilter = document.getElementById("producer-film-filter");
let minMinLengthFilmFilter = document.getElementById("min-minutes-length-filter");
let maxMinLengthFilmFilter = document.getElementById("max-minutes-length-filter");
let filterButton = document.getElementById("filter-button")

let titleSortButton = document.getElementById("title-sort-button");
let gendreSortButton = document.getElementById("gendre-sort-button");
let producerSortButton = document.getElementById("producer-sort-button");
let minutesLengthSortButton = document.getElementById("minutes-length-sort-button");


function displayFilms() {
  tbody.innerHTML = "";
  for (let i = 0; i < films.length; i++) {
    insertFilmsInTable(films[i])
  }
  totalMinLengthSpan.innerHTML = calculateTotalMinutesLength();
  shortestFilmSpan.innerHTML = getShortestFilm();
  longestFilmSpan.innerHTML = getLongestFilm();
  filmWhoBeginWithACertainLetter.innerHTML = getTheFilmsWhoBeginWithACertainLetter();
  gendreSpan.innerHTML = getGendresFilms();
  totalFilmsSpan.innerHTML = getTotalNumOfFilms();
}


function calculateTotalMinutesLength() {
  let sum = 0;
  for (let i = 0; i < films.length; i++) {
    sum += films[i].minutesLength
  }
  return sum;
}

function getShortestFilm() {
  let shortestFilm;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < films.length; i++) {
    if (films[i].minutesLength < min) {
      min = films[i].minutesLength;
      shortestFilm = films[i].title;
    }
  }
  return shortestFilm;
}

function getLongestFilm() {
  let longestFilm;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < films.length; i++) {
    if (films[i].minutesLength > max) {
      max = films[i].minutesLength;
      longestFilm = films[i].title;
    }
  }
  return longestFilm;
}

function getTheFilmsWhoBeginWithACertainLetter() {
  let array = [];
  let contor = 0;
  for (let i = 0; i < films.length; i++) {
    if (films[i].title[0] === firstLetterInput.value) {
      array[contor++] = films[i].title
    }
  }
  return array;
}
firstLetterButton.addEventListener("click", getTheFilmsWhoBeginWithACertainLetter)

function getGendresFilms() {
  let array = [];
  for (let i = 0; i < films.length; i++) {
    if (!array.includes(films[i].gendre)) {
      array.push(films[i].gendre);
    }
  }
  return array;
}

function getTotalNumOfFilms() {
  let contor = 0;
  for (let i = 0; i < films.length; i++) {
    contor++;
  }
  return contor;
}


function insertFilmsInTable(film) {
  let newRow = document.createElement("tr");
  let n = Number.MAX_SAFE_INTEGER;

  let newTitleTd = document.createElement("td");
  newTitleTd.innerHTML = film.title;
  newRow.appendChild(newTitleTd);

  let newGendreTd = document.createElement("td");
  newGendreTd.innerHTML = film.gendre;
  newRow.appendChild(newGendreTd);

  let newProducerTd = document.createElement("td");
  newProducerTd.innerHTML = film.producer;
  newRow.appendChild(newProducerTd);

  let newMinutesLengthTd = document.createElement("td");
  newMinutesLengthTd.innerHTML = film.minutesLength;
  newRow.appendChild(newMinutesLengthTd);

  let newActorsTd = document.createElement("td");
  newActorsTd.innerHTML = film.actors.name;
  newRow.appendChild(newActorsTd);

  let deleteTd = document.createElement("td");
  deleteTd.innerHTML = `<button class = "delete-button" onclick = deleteFilm(this)>Delete</button>`;
  newRow.appendChild(deleteTd);

  let favoriteTd = document.createElement("td");
  if (film.isFavorite === true) {
    favoriteTd.innerHTML = `<button class="favorite-button" onclick =markFavoriteFilms(this) >Adauga</button>`
  }
  else {
    favoriteTd.innerHTML = `<button class="nonfavorite-button" onclick =markFavoriteFilms(this) >Sterge</button>`
  }
  newRow.appendChild(favoriteTd);

  tbody.appendChild(newRow);
}

function addFilm() {
  let film = {};
  film.title = titleInput.value;
  film.gendre = gendreInput.value;
  film.producer = producerInput.value;
  film.minutesLength = minutesLengthInput.value;
  film.actors = actorsInput.value;

  films[films.length] = film;
  insertFilmsInTable(film);
}
createButton.addEventListener("click", addFilm)


function deleteFilm(buttonElement) {
  let tr = buttonElement.parentNode.parentNode;
  tbody.removeChild(tr);
}


function markFavoriteFilms(buttonElement) {
  let tr = buttonElement.parentNode.parentNode;
  let filmTitle = tr.cells[0].innerHTML;
  let filmIndex = getFilmIndexByTitle(filmTitle);
  films[filmIndex].isFavorite = !films[filmIndex].isFavorite
  displayFilms();
}

function getFilmIndexByTitle(filmTitle) {
  for (let i = 0; i < films.length; i++) {
    if (films[i].title === filmTitle) {
      return i;
    }
  }
}


function filterFilms() {
  tbody.innerHTML = "";
  for (let i = 0; i < films.length; i++) {
    if (films[i].title === titleFilmFilter.value) {
      insertFilmsInTable(films[i]);
    }
    if (films[i].gendre === gendreFilmFilter.value) {
      insertFilmsInTable(films[i]);
    }
    if (films[i].producer === producerFilmFilter.value) {
      insertFilmsInTable(films[i]);
    }
    if (films[i].minutesLength >= minMinLengthFilmFilter.value && films[i].minutesLength <= maxMinLengthFilmFilter.value) {
      insertFilmsInTable(films[i]);
    }
  }
}
filterButton.addEventListener("click", filterFilms)


function sortFilmsByTitle() {
  films.sort(sortByTitle);
  displayFilms();
}
titleSortButton.addEventListener("click", sortFilmsByTitle);

function sortByTitle(f1, f2) {
  if (f1.title > f2.title) {
    return 1;
  }
  if (f1.title < f2.title) {
    return -1;
  }
  return 0;
}


function sortFilmsByGendre() {
  films.sort(sortByGendre);
  displayFilms();
}
gendreSortButton.addEventListener("click", sortFilmsByGendre);

function sortByGendre(f1, f2) {
  if (f1.gendre > f2.gendre) {
    return 1;
  }
  if (f1.gendre < f2.gendre) {
    return -1;
  }
  return 0;
}


function sortFilmsByProducer() {
  films.sort(sortByProducer);
  displayFilms();
}
producerSortButton.addEventListener("click", sortFilmsByProducer);

function sortByProducer(f1, f2) {
  if (f1.producer > f2.producer) {
    return 1;
  }
  if (f1.producer < f2.producer) {
    return -1;
  }
  return 0;
}


function sortFilmsByMinLength() {
  films.sort(sortByMinutesLength);
  displayFilms();
}
minutesLengthSortButton.addEventListener("click", sortFilmsByMinLength);

function sortByMinutesLength(f1, f2) {
  if (f1.minutesLength > f2.minutesLength) {
    return 1;
  }
  if (f1.minutesLength < f2.minutesLength) {
    return -1;
  }
  return 0;
}

displayFilms()
