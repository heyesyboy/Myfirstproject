let favouriteFilm = [
    "Star Wars",
    "Snatch",
    "Avengers:EndGame",
    "Casino Royale",
    "True Romance"
];

favouriteFilm.push("Toy Story","Lock Stock and 2 Smoking Barrels")

for (filmIndex = 0; filmIndex < favouriteFilm.length; filmIndex++){
    console.log (favouriteFilm[filmIndex]);
}

const filmCheck = () => {

    if (favouriteFilm[2] == "Avengers:EndGame") {
        console.log ("Yay it's Avengers:EndGame.")
    }
    else {
        console.log("Give me Avengers:EndGame.")
    }
} 

filmCheck()