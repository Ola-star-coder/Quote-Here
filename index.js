const api_url = "https://api.quotable.io/random";
const author = document.getElementById('author');
const quote = document.getElementById('quote');
const newQuoteBtn = document.getElementById('new-quote-btn');
const newTweetBtn = document.getElementById('new-tweet-btn');

async function getQuote(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

newQuoteBtn.addEventListener('click', () => {
    getQuote(api_url)
});

newTweetBtn.addEventListener('click', () => {
    tweet();
})

getQuote(api_url);

function tweet(){
 window.open('https://twitter.com/intent/tweet?text=' + quote.innerHTML + " ---- by " + author.innerHTML, "TWITTER", "width=600,height=300");
};