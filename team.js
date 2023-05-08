const team = [];
const Laura = {
  name: "Laura",
  surname: "Chiavetta",
  age: 23,
  city: "Palermo",
  hobby: "Animali",
  favoriteFood: "Patatine",
  favoriteVideoGame: "Horizon",
  favoriteFilm: "Matrix",
  favoriteBook: "Il signore degli anelli",
  petName: "Mimmo",
};

team.push(Laura);

const Mirka = {
  name: "Mirka",
  surname: "Medaglini",
  age: 25,
  city: "Lucca",
  hobby: "Leggere",
  favoriteFood: "Pizza",
  favoriteVideoGame: "Mario Odyssey",
  favoriteFilm: "Il cigno nero",
  favoriteBook: "Guerra e pace",
  petName: "Nikita",
};

team.push(Mirka);

const dina = {
  name: "Dina",
  surname: "Timcu",
  age: 23,
  city: "Bologna",
  hobby: "Disegnare",
  favoriteFood: "Pizza",
  favoriteVideoGame: "Fifa",
  favoriteFilm: "Animali fantastici",
  favoriteBook: "Cronache di fuoco e ghiaccio",
  petName: "Mair",
};

team.push(dina);

const Nicola = {
  name: "Nicola",
  surname: "Destro",
  age: 27,
  city: "Catania",
  hobby: "Musica",
  favoriteFood: "Cotoletta",
  favoriteVideoGame: "Tekken",
  favoriteFilm: "Forrest Gump",
  favoriteBook: "Kobane Calling",
  petName: "Teo",
};

team.push(Nicola);

function alphOrder(array) {
  array.sort((a, b) => a.name.localeCompare(b.name));
  for (let i = 0; i < array.length; i++) {
    console.log(array[i].name, array[i].surname);
  }
}
alphOrder(team);


