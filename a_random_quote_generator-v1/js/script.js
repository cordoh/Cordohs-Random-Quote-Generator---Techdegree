/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * List of African Proverbs
 * Quotes, Source, Citation, and Year
***/
const quotes = [
  {
    quote: 'A bird that flies off the earth and lands on an anthill is still on the ground.',
    source: 'Igbo Proverb'
  },
  {
    quote: 'When the shepherd comes home in peace, the milk is sweet.',
    source: 'Ethiopian Proverb'
  },
  {
    quote: 'If you do not have patience, you cannot make beer.',
    source: 'Ovambo Proverb'
  },
  {
    quote: 'Teeth do not see poverty',
    source: 'Masai Proverb'
  },
  {
    quote: 'You have little power over what is not yours.',
    source: 'Zimbabwean Proverb'
  },
  {
    quote: 'You must attend to your business with the vendor in the market, and not to the noise of the market.',
    source: 'Beninese Proverb'
  },
  {
    quote: 'An intelligent enemy is better than a stupid friend',
    source: 'Senegalese Proverb'
  },
  {
    quote: 'If you carry the egg basket, do not dance.',
    source: 'Ambede Proverb'
  },
  {
    quote: 'Leadership is never given on a silver platter, one has to earn it.',
    source: 'Ellen Johnson Sirleaf',
    citation: 'Liberian Presidential Inauguration'
  },
  {
    quote: 'Action without thought is empty. Thought without action is blind.',
    source: 'Kwame Nkrumah',
    year: '1989'
  }

];



/***
 * Function to choose one random quote
 * Random number generates a number between 1-10
 * Each number 1-10 is associated with a quote
***/
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * (quotes.length) );
  let randomQuote = quotes[randomNumber];
  // console.log(randomNumber);
  // console.log(randomQuote);
  return randomQuote;
}

getRandomQuote();

/***
 * The chose quote gets printed to the page
 * Depending on the information that each quote has, that also will display on the page.
***/
function printQuote() {
  let chosenQuote = getRandomQuote();
  let html = `<p class='quote'> ${chosenQuote.quote} </p>`;
  html += `<p class='source'> ${chosenQuote.source}`;

  if (chosenQuote.citation) {
    html += `<span class='citation'> ${chosenQuote.citation} </span>`;
    }

  if (chosenQuote.year) {
    html += `<span class='year'> ${chosenQuote.year} </span>`;
    }

    html += `</p>`;

    document.getElementById('quote-box').innerHTML = html;
    return html;
}




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);