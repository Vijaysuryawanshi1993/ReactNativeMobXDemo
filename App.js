import React, { Component } from 'react';
import store from "./app/mobX/store"
import { Provider } from 'mobx-react';
import Home from "./app/screens/home";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

export default App