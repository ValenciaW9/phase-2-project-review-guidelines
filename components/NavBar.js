import React from 'react';
import SearchForm from './SearchForm';
import SearchResults from './searchResults'; 
import NavBar from './NavBar';
import Foods from './foods';

function NavBarComponent() {
  return (
    <div>
      <NavBar />
      <main>
        <section id="home">
          <h2>Welcome to the Nutrition App!</h2>
          <a href="https://tools.myfooddata.com/nutrition-facts-database-spreadsheet.php" target="_blank" rel="noopener noreferrer">
            Nutrition Facts Database
          </a>
        </section>
        <section id="search">
          <h2>Search</h2>
          <SearchForm />
          <SearchResults />
        </section>
        <section id="foods">
          <h2>Foods</h2>
          <Foods />
        </section>
        <section id="form">
          <h2>Add Food</h2>
        </section>
      </main>
      <footer>
        <p>&copy; 2022 Nutrition App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default NavBarComponent;