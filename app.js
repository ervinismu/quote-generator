let quotes = [
    {
        quote: "It is hard to fail but it is worse never to have tried to succeed.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "That which does not kill us makes us stronger.",
        author: "Friedrich Nietzsche"
    },
    {
        quote: "I have not failed. Ive just found 10,000 ways that won’t work.",
        author: "Thomas A. Edison"
    }
]

// Set initial quotes
generateRandomQuote()

function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function generateRandomQuote(){
    // get random quotes
    let randomNumber = generateRandomNumber(0, 3);
    let quote = quotes[randomNumber];

    // select element
    let quoteElement = document.querySelector("#quote");
    let quoteAuthorElement = document.querySelector("#quote-author");

    // apply to element
    quoteElement.textContent = quote.quote;
    quoteAuthorElement.textContent = quote.author;
}

let btnElement = document.querySelector("button");
btnElement.addEventListener('click', generateRandomQuote)