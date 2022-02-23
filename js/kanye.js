const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => displayQuote(data));
}

const displayQuote = (quo) => {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quo.quote;
}