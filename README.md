# Article Fetcher

## Description

Article Fetcher is a front-end React application built using Vite. It consists of two main pages:

1. **Results Page**: Allows users to search for existing articles by author name or title using a single input and a search button.

2. **Article Creation Page**: Provides a form connected to JSONPlaceholder. The form includes client-side validation and allows users to submit a new article with author details.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Documentation](#Documentation)
- [Search-Keyword-Examples](#Search-Keyword-Examples)

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/salissadiq/fe-react-vite-article.git
cd fe-react-vite-article
npm install
npm run dev

```
## Usage

To use Article Fetcher, follow these steps:

1. Open the application in your web browser.
2. Navigate to the Results Page to search for articles by author name or title.
3. Use the search input field to enter the author name or article title you want to search for.
4. Click the search button to initiate the search.
5. View the search results on the Results Page.
6. Navigate to the Article Creation Page to submit a new article.
7. Fill out the form with the article details and personal information.
8. Ensure that all form inputs are valid based on the client-side validation.
9. Click the submit button to submit the article.


## Features

* **Results Page**: Users can search for articles by author name or title.
* **Article Creation Page**: Users can submit articles along with personal information.
* **Client-side Validation**: Form inputs are validated on the client side.
* **React Router**: Navigation is handled using React Router.
* **Unit Testing**: Unit tests are included using Vitest or Jest.


## Technologies Used

* React
* Vite
* Vitest
* React Router Dom
* React Hook Forms
* JSONPlaceholder API
* NewsAPI
* ESLint
* Prettier

## Documentation

### `useFetchArticles(query: string): Promise<{ user: Object, posts: Array<Object> } | null>`

This Hook fetches user data and articles based on the provided query. If the query matches a user's name, it fetches the posts for that user. If the query matches an article title, it fetches the user data of the user who authored that article, along with the article.

#### Parameters

- `query` (string): The search query, which can be either a user's name or a article title.

#### Returns

A Promise that resolves to an object containing the user and articles data if found, or `null` if no user or articles are found with the specified query.

```javascript
// Example usage from a frontend component
async function handleSearch(query) {
  try {
    const userData = await fetchUserData(query);
    if (userData) {
      console.log('User:', userData.user);
      console.log('Posts:', userData.posts);
      // Update UI with user and posts data
    } else {
      console.log('No user or posts found for the specified query');
      // Display error message on UI
    }
  } catch (error) {
    console.error('Error:', error.message);
    // Display error message on UI
  }
}

// Call handleSearch function with user's name
handleSearch('Leanne Graham');

// Call handleSearch function with post title
handleSearch('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');

## Search Keyword Examples

You can use the following keywords as examples when searching for user data or posts:

- **User's Name:**
  - Leanne Graham
  - Ervin Howell
  - Clementine Bauch
  - Patricia Lebsack
  - Chelsey Dietrich

- **Post Titles:**
  - sunt aut facere repellat provident occaecati excepturi optio reprehenderit
  - qui est esse
  - ea molestias quasi exercitationem repellat qui ipsa sit aut
  - eum et est occaecati
  - nesciunt quas odio



