
import React, { useState } from 'react';

function SearchResults() {
  const [foodName, setFoodName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const food = {
      name: foodName,
    };

    const searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.textContent = `You searched for: ${food.name}`;

    // Add your additional logic for handling the form submission and using the food data
    // For example, you can make an API call to add the food to your backend
    // or update the state of a parent component
  };

  return (
    <section id="search">
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="searchInput"
          placeholder="Enter a food name"
          value={foodName}
          onChange={(event) => setFoodName(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div id="searchResults"></div>
    </section>
  );
}

export default SearchResults;