// Define and export a function called Joke.
// It should accept a joke object as a parameter and return an html string
export const JokeSetup = jokeObj => {
    return `
    <p>${jokeObj.setup}</p>
    <button id="punchlineBtn">Punchline!</button>`
}
export const JokePunchline = jokeObj => `<p>${jokeObj.punchline}</p>`