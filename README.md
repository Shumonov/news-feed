# News Feed App

News Feed is a simple application built with React and TypeScript that fetches and displays news articles from NewsAPI.

## Features

1. Fetch and display news articles from NewsAPI.
2. Mark articles as favorites and store them in local storage.
3. Marks articles as read by graying them out.
4. Search functionality to filter news articles.

## Technologies Used

1. React.js.
2. TypeScript.

## Project Setup

To set up the project, follow these steps:

1. Clone the repository:

```bash
  git clone https://github.com/username/news-feed.git
```

2. Install the dependencies:

```bash
cd news-feed
npm install
```

3. In the .env file, replace the REACT_APP_API_KEY with your NewAPI key.

```bash
REACT_APP_API_KEY=REPLACE_WITH_YOUR_OWN_KEY
```

4. Run the app:

```bash
npm start
```

The application will be available on http://localhost:3000.

## How, what, and why:

Before I wrote a single line of code, I had to familiarize myself with NewsAPI. This gave me a good idea of what sort of data I can retrieve and what sort of requests I will need to make. Also, I had to decide how I wanted the site to behave, how to implement the features requested, and what extras can I add, so I sketched a rough design of the key pages and elements.

Next, I plan out the React components based on my sketch and the data I'll get from NewsAPI. Based on my time, I made my components as modular and reusable as possible within the time frame.

After I had that in mind, I wrote the code to fetch the data from the NewsAPI. I used Axios over the Fetch API because of its advantages, like automatic JSON data transformation and built-in error handling.

When I could fetch the data correctly, I passed it into my components as props and used it to populate the view.

Once I could fetch and display the data, I could work on the interactivity. I added the search query from the input element and passed it to the API, the favorites feature, and the liked articles, which are added or removed by clicking the heart icon on every news item.

Finally, I styled my app. I wanted a pleasant experience for the user, so I added the CSS for 'transition' and 'transform' on the item image, the source logo, and the nav-bar styles.

## Implementation tradeoffs and future enhancements

If I had more time, I would add the following:

1. testing with Jest - test realistic user flows with unit and integration tests. I would add end-to-end tests with Cypress if I had more complex features.
2. Caching - this app can be ideal for browser caching. The news feed doesn't update very frequently, so a service worker could help cash the static files and bring the updates from the API when needed.
3. Deployment - NewsAPI doesn't let us use the free API-KEY with anything other than localhost, but it would be nice to have this app deployed on Vercel or Netlify.