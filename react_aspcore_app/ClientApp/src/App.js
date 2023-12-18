import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from "./styles/App.module.css";
import NavBar from "./components/NavBar";
import Pages from "./components/Pages";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Router>
      <div className={styles.container}>
        <NavBar />
        <Pages />
      </div>
    </Router>
    );
  }
}
