import express from 'express';
const jokeApp = express();

const funnyJokes = [
    { joke1: "Why do girls cheat? Because their boyfriends are broke"},

    { joke2: "Why do nigerian young youth like drinking garri? Because sapa don catch most of us. Chai"},

    { joke3: "Why do nigerian girls like dancing and twerking on TikTok? because they don't have work to do"},

    {joke4: "What is the most dangerous creature on earth? Women oooo! My brother, Fear women. Fear them!"}
];

jokeApp.get('/jokes/funnyBros', (req, res) => {
   const numbersOfJokes = Math.floor(Math.random() * funnyJokes.length);
   
   const randomJokes = funnyJokes[numbersOfJokes];
   res.json(randomJokes);
});


jokeApp.listen(2500, () => {
    console.log(`Server is running on http://localhost:2500`)
})