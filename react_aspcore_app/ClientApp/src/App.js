import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from "./styles/App.module.css";
import NavBar from "./components/NavBar";
import Pages from "./components/Pages";
import Footer from "./components/Footer";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Router>
        <QueryClientProvider client={queryClient}>
        <div className={styles.container}>
          <NavBar />
          <Pages />
          <br></br>
        </div>
        <Footer />
        </QueryClientProvider>
    </Router>
    );
  }
}