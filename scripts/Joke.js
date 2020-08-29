// Define and export a function called Joke.
// It should accept a joke object as a parameter and return an html string
let setupArray = [];

export const JokeSetup = jokeObj => {
    if (jokeObj.type === "knock-knock") {
        setupArray = jokeObj.setup.split(/\n/)
        return `
        <p>${setupArray[2]}</p>
        <button id="punchlineBtn">${setupArray[3]}</button>`
    }
    
    return `
    <p>${jokeObj.setup}</p>
    <button id="punchlineBtn">Punchline!</button>`
}
export const JokePunchline = jokeObj => {

    return`<p>${jokeObj.punchline}</p>`
}