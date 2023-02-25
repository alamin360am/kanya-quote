const loadQuote = () => {
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data => displayQuote(data))
}

const displayQuote = (quote) => {
    const quoteField = document.getElementById('quote');
    quoteField.innerText = quote.quote;
}

loadQuote();