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

const leo =  {
  name: "leonardo",
  surname: "sorrentino",
  age: 27,
  city: "cosmopolitan",
  hobby: "poliedricOne",
  favoriteFood: "pane",
  favoriteVideoGame: "TotalWarSaga",
  favoriteFilm: "myLife",
  favoriteBook:'myLife',
  petName:'Kizuna'
  }
  

function alphOrder(array) {
  array.sort((a, b) => a.name.localeCompare(b.name));
  for (let i = 0; i < array.length; i++) {
    console.log(array[i].name, array[i].surname);
  }
}
alphOrder(team);

function ageOrder(array){
  array.sort((a, b) => a.age-(b.age));
for (let i = 0; i < array.length; i++) {
console.log(array[i].name, array[i].age);
}}
ageOrder(team)

function midAge(array){
    let sum=0
    for(let i=0; i<array.length; i++){
        sum+=(array[i].age)/array.length
    }console.log("L'età media è" + " " + sum)
}
midAge(team)

function petName(array){
  for(let i=0; i<array.length; i++){
      if(array[i].petName !==""){
          console.log("L'animale di "+array[i].name + " si chiama "+ array[i].petName)
      }else{
          console.log(array[i].name+" non ha un animale")
      }
  }
}
petName(team)

function lOl(array){
    for(let i=0; i<array.length; i++){
        if(array[i].favoriteVideoGame ==="LOL"||
        array[i].favoriteVideoGame == "League Of Legends"){
            console.log("Il gioco preferito di "+ array[i].name + " è "+ "League of legend")
        }
    } 
}
lOl(team)

function sameName(array) {
  for (let i = 0; i < array.length; i++) {
    for (let x = i + 1; x < array.length; x++) {
      if (array[i].name === array[x].name) {
        console.log(array[i].name);
      }
    }
  }
}

sameName(team);