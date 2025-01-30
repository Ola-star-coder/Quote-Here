const api_url = 'https://api.api-ninjas.com/v1/quotes'
const api_key = 'EC6za+/IXOrVuUDw56SXQQ==Abh15ykReoIykvnR'
const author = document.getElementById('author');
const quote = document.getElementById('quote');
const newQuoteBtn = document.getElementById('new-quote-btn');
const newTweetBtn = document.getElementById('new-tweet-btn');

async function getQuote(url) {
  try {
        const response = await fetch(url, {
            headers: {
                'X-Api-Key': api_key
            }
        });
        console.log(response); // Log the full response
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        quote.innerHTML = data[0].quote;
        author.innerHTML = data[0].author;
    } catch (error) {
        console.error('Error fetching the quote:', error);
        quote.innerHTML = 'Shii, No quote,Try Again☹.';
        author.innerHTML = '';
    }
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

