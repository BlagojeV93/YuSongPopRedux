import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router';
import reducers from './src/reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1}}>
        <Provider store={store} >
          <Router />
        </Provider>
      </SafeAreaView>
    )
  }
}
