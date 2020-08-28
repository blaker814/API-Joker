import { getJoke, useJoke } from "./JokeProvider.js";
import { JokeSetup, JokePunchline } from "./Joke.js";

const jokeBtn = document.querySelector(".request-joke-btn");
const jokeSet = document.querySelector(".joke-setup")
const jokePunch = document.querySelector(".joke-punchline")


jokeBtn.addEventListener("click", (e) => {
  console.log("I should be grabbing a joke now...");
  // TODO: fetch a joke from the Joke API and render it to the DOM
  jokeSet.innerHTML = "";
  jokePunch.innerHTML = "";
  getJoke()
    .then(() => useJoke())
    .then(joke => JokeSetup(joke))
    .then(HTML => {
      jokeSet.innerHTML += HTML
      jokeBtn.disabled = true
      document.querySelector("#joke-choice").disabled = true
    })
    .then(() => useJoke())
    .then(joke => JokePunchline(joke))
    .then(HTML => {
      const punchlineAdd = document.querySelector("#punchlineBtn");
      punchlineAdd.addEventListener("click", event => {
      jokePunch.innerHTML += HTML
      punchlineAdd.disabled = true;
      jokeBtn.disabled = false;
      document.querySelector("#joke-choice").disabled = false
    })})
});