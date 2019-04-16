import React, { Component } from 'react';

import Sidebar from './components/sidebar';
import Header from './components/header';
import Main from './pages/main';
import Footer from './components/footer';

import './App.css';

class App extends Component {
    render() {
    return (
        <div>
            <div className="dashboard-main-wrapper">
                <Header />
                <Sidebar />
                <div className="dashboard-wrapper">
                	<Main />
                	<Footer />
                </div>
            </div>
        </div>
    )
  }
}

export default App;
