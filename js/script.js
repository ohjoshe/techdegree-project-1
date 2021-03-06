/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * Array that stores quote objects
***/
const quotes = [
  {
    quote: 'I reject your reality and substitute my own.',
    source: 'Adam Savage',
    citation: 'Mythbusters'
  },
  {
    quote: 'The human imagination is a secret place of primitive memories and unconfessed desires.',
    source: 'Marius',
    citation: 'The Vampire Lestat by Anne Rice',
    tags: ['literature', 'fiction']
  },
  {
    quote: "You can't let your failures define you - you have to let them teach you. You have to let them show you what to do differently next time.",
    source: 'President Barack Obama',
    citation: "National Address to America's Schoolchildren",
    year: '2009',
    tags: ['speech', 'politics']
  },
  {
    quote: 'Every kid starts out as a natural-born scientist, and then we beat it out of them. A few trickle through the system with their wonder and enthusiasm for science intact.',
    source: 'Carl Sagan',
    year: '1996',
    tags: ['science', 'education']
  },
  {
    quote: 'If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.',
    source: 'Albert Einstein'
  },
  {
    quote: 'I only know that without you, no rank or fame would be worth having.',
    source: 'Stefen',
    citation: "Magic's Price by Mercedes Lackey",
    tags: ['literature', 'fiction']
  },
];

// Creates copy of quotes array
let quotesCopy = Array.from(quotes)

// Generates random background color
function randomBackground() {
  let red = Math.floor(Math.random() * 256)
  let green = Math.floor(Math.random() * 256)
  let blue = Math.floor(Math.random() * 256)
  let backgroundColor = `rgb(${red}, ${green}, ${blue})`

  return document.body.style.background = backgroundColor
}

// getRandomQuote function generates a random index and returns quote object at that index in quote array

function getRandomQuote(array) {
  let randomIndex = Math.floor(Math.random() * Math.floor(array.length))

  // Displays random quote and removes displayed quote from quotesCopy array
  if (quotesCopy.length > 0) {
    let randomQuote = quotesCopy[randomIndex]
    quotesCopy.splice(randomIndex, 1)
    return randomQuote
  }

  // Resets quotesCopy array and displays next random quote
  if (quotesCopy.length === 0) {
    quotesCopy = Array.from(quotes)

    let randomQuote = quotesCopy[randomIndex]
    quotesCopy.splice(randomIndex, 1)
    return randomQuote
  }
}


// printQuote function uses quote object from getRandomQuote function to display selected quote

function printQuote() {
  let quoteObj = getRandomQuote(quotesCopy)
  let html = `
    <p class="quote">${quoteObj.quote}</p>
    <p class="source">${quoteObj.source}
    `
  
  // checks to see if a citation exists, if so it adds to displayed string
  if (quoteObj.citation !== undefined) {
    html += `<span class="citation">${quoteObj.citation}</span>`
  }

  // checks to see if a year exists, if so it adds to displayed string
  if (quoteObj.year !== undefined) {
    html += `<span class="year">${quoteObj.year}</span>`
  }

  // checks to see if any tags exist, if so it adds to displayed string
  if (quoteObj.tags !== undefined) {
    html += `<p>Tags: ${quoteObj.tags.join(', ')}</p>`
  }

  html += `</p>`

  randomBackground()
    
  return document.getElementById('quote-box').innerHTML = html;
}

// Changes displayed quotes automatically every 15s
setInterval(printQuote, 5000)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);