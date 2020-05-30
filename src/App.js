import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';

import Post from './components/Post';
import PostForm from './components/PostForm';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <Post />
        </div>
      </Provider>
    );
  }
}

export default App;
