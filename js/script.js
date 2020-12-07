/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotesArray = [
  {
    quote: 'I reject your reality and substitute my own.',
    source: 'Adam Savage',
    citation: 'Mythbusters',
    year: undefined
  },
  {
    quote: 'The human imagination is a secret place of primitive memories and unconfessed desires.',
    source: 'Marius',
    citation: 'The Vampire Lestat by Anne Rice',
    year: undefined
  },
  {
    quote: "You can't let your failures define you - you have to let them teach you. You have to let them show you what to do differently next time.",
    source: 'President Barack Obama',
    citation: "National Address to America's Schoolchildren",
    year: '2009'
  },
  {
    quote: 'Every kid starts out as a natural-born scientist, and then we beat it out of them. A few trickle through the system with their wonder and enthusiasm for science intact.',
    source: 'Carl Sagan',
    citation: undefined,
    year: '1996'
  },
  {
    quote: 'I you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.',
    source: 'Albert Einstein',
    citation: undefined,
    year: undefined
  },
  {
    quote: 'I only know that without you, no rank or fame would be worth having.',
    source: 'Stefen',
    citation: "Magic's Price by Mercedes Lackey",
    year: undefined
  },
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote(array) {
  let randomIndex = Math.floor(Math.random() * Math.floor(array.length))
  return quotesArray[randomIndex]
}

/***
 * `printQuote` function
***/
function printQuote() {
  let quoteObj = getRandomQuote(quotesArray)
  let html = `
    <p class="quote">${quoteObj.quote}</p>
    <p class="source">${quoteObj.source}
    `
  
  if (quoteObj.citation !== undefined) {
    html += `<span class="citation">${quoteObj.citation}</span>`
  }
  if (quoteObj.year !== undefined) {
    html += `<span class="year">${quoteObj.year}</span>`
  }
  html += `</p>`

  return document.getElementById('quote-box').innerHTML = html;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);