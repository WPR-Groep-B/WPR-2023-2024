import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from "./styles/App.module.css";
import NavBar from "./components/NavBar";
import Pages from "./components/Pages";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
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
          </div>
        </QueryClientProvider>
      </Router>
    );
  }
}
