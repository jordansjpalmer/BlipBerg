const BASE_URL = 'https://newsapi.org/v2/top-headlines?';
const COUNTRY = 'country=us&';
const API_KEY = 'apiKey=415d80702aac435cb5b6f349a7b68c72';
const FIVE_MINUTES = 5 * 60 * 1000; 

// if they are making a search query then url = BASE_URL + SEARCH_QUERY + API_KEY;
// if they are on the home page the url = BASE_URL + COUNTRY + API_KEY;
// if they are filtering by category then url = BASE_URL + COUNTRY + CATEGORY + API_KEY;
// if they are filtering by publication then url = BASE_URL + SOURCE + API_KEY;

// fetch helper function
async function fetchArticles(url) {
    let cachedArticles = null;
    const now = Date.now();
    
    try {
        cachedArticles = localStorage.getItem(url);
        if (cachedArticles){
            const { timestamp, data } = JSON.parse(cachedArticles);

            if (now - timestamp < FIVE_MINUTES) {
                return data;
            }
        }
    } catch (e) {
        // deal with error silently and proceed
    }

    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'ok') {
        const articles = data.articles.slice(0, 8)
    
        try {
            localStorage.setItem(url, JSON.stringify({
                timestamp: now,
                data: articles
            }));
        } catch (e) {
            //deal with potential errors silently 
        }
        return articles;
    } else {
        throw new Error(data.message || 'Unable to fetch articles');
    }
}

// Fetch from home page
export async function fetchHomePageArticles() {
    const url = BASE_URL + COUNTRY + API_KEY;
    return await fetchArticles(url);
}

// Fetch articles based on search query
export async function fetchArticlesBySearch(query) {
    const SEARCH_QUERY = 'q=' + query + '&';
    const url = BASE_URL + SEARCH_QUERY + API_KEY;
    return await fetchArticles(url);
}

// Fetch articles based on category filter
export async function fetchArticlesByCategory(category) {
    const CATEGORY = 'category=' + category + '&';
    const url = BASE_URL + COUNTRY + CATEGORY + API_KEY;
    return await fetchArticles(url);
}

//Fetch articles based on publication filter
export async function fetchArticlesByPublication(source) {
    const SOURCE = 'sources=' + source + '&';
    const url = BASE_URL + SOURCE + API_KEY;
    return await fetchArticles(url);
}
  
