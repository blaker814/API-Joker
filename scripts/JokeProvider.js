let joke, jokeURL;
// 1. define and export a useJoke function that simply returns the joke object.
//         Advanced: find a way to return a copy of the joke object (tip: .slice will not work)
// 2. define and export a getJoke function that fetches a joke from the API and sets the joke variable to the response
export const useJoke = () => joke;

export const getJoke = () => {
    const choice = document.querySelector("#joke-choice")
    if (choice.value === "general") {
        jokeURL = "https://official-joke-api.appspot.com/jokes/general/random"
    } else if (choice.value === "programming") {
        jokeURL = "https://official-joke-api.appspot.com/jokes/programming/random"
    } else if (choice.value === "knock-knock") {
        jokeURL = "https://official-joke-api.appspot.com/jokes/knock-knock/random"
    }
    return fetch(jokeURL).then(response => response.json()).then(data => joke = data[0])
}

