import React from "react";
import styles from "./styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.navBar}>NAV HERE</div>
        <div className={styles.title}>Pokédex</div>
        <div className={styles.searchBarContainer}>SEARCH CONTENT HERE</div>
        <div className={styles.mainContainer}>
          <div className={styles.pokeSettings}>SORT BY</div>
          <li className={styles.pokeContainer}>
            <ul className={styles.pokemonCard}>
              <p>ID HERE</p>
              <h>Name Here</h>
            </ul>
          </li>
        </div>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
};

export default Home;
