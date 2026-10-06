# Product List (API Integration)

A small React app that gets products from a public API and shows them as cards. You can search products by name, and the list updates as you type.

Built to practice API integration, props, useState, and   useEffect in React.

## Features

- Loads products from the [DummyJSON](https://dummyjson.com/docs/products) API
- Shows each product in a card (title, category, stock, price, description)
- Search box to find products (for example `phone`, `laptop`, `mascara`)
- Debounced search: the app waits 0.5 second after you stop typing, so it does not call the API on every letter
- Responsive card layout and a sticky navbar

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- JavaScript (ES6+)
- CSS
- [DummyJSON](https://dummyjson.com/) (free fake API)

## Project Structure

```
src/
├── api/
│   └── app.js            # API functions (getUser, getProduct)
├── components/
│   ├── Usercard.jsx      # Product card component
│   └── Usercard.css      # Card styles
├── App.jsx               # Main component (state, search, API calls)
├── App.css               # Navbar and layout styles
├── index.css
└── main.jsx              # App entry point
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/atuladityax/API-integration-.git
cd API-integration-
```

### 2. Install packages

```bash
npm install
```

### 3. Start the app

```bash
npm run dev
```

Open the link shown in the terminal (usually `http://localhost:5173`).

## How It Works

1. When the page opens, `App.jsx` calls `getUser()` and gets all products.
2. The products are saved in state with `useState`.
3. `App.jsx` sends each product to the `Usercard` component using props:
   ```jsx
   <Usercard key={p.id} product={p} />
   ```
4. When you type in the search box, the `search` state changes. `useEffect` runs again and calls `getProduct(search)`, which uses this API link:
   ```
   https://dummyjson.com/products/search?q=<your word>
   ```
5. The list in state is replaced with the matching products, and React updates the cards.

## API Used

| Action | Endpoint |
| --- | --- |
| Get all products | `GET https://dummyjson.com/products` |
| Search products | `GET https://dummyjson.com/products/search?q=phone` |

## What I Learned

- Fetching data with `fetch` and `async/await`
- Using `useEffect` with a dependency array (`[]` and `[search]`)
- Sending data between components with props
- Showing a list with `.map()` and `key`
- Debouncing with `setTimeout` and a cleanup function
- Debugging with the browser Console and Network tab

## Future Improvements

- Add a loading message while data is coming
- Show an error message if the API fails
- Add product images
- Add pagination or "load more"
- Add sorting by price

## Author

Atul Aditya
GitHub: [@atuladityax](https://github.com/atuladityax)