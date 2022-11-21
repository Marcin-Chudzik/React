import './App.css';
import React, { useEffect } from 'react';
// Components
import Nav from './Components/Nav/Nav.js';
// Functionalities
import { getBasicHeroInfoById } from './requests.js';

const featuresHeroesIds = ['525', '359', '133'];


function App() {
  useEffect(() => {
    fetchAndDisplayFeaturedHeroes();
  }, []);

  fetchAndDisplayFeaturedHeroes = async () => {
    let heroes = [];
    for (const heroId of featuresHeroesIds) {
      const hero = await getBasicHeroInfoById(heroId);
      heroes.push(hero)
    };
    console.log(heroes)
  };

  return (
    <>
    <Nav></Nav>
    <main>

    </main>
    <footer></footer>
    </>
  );
};

export default App;
