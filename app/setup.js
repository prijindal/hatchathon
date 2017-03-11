import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import App from './App/App';

class Root extends PureComponent {
  state = {
    isLoading: true,
    store: configureStore(() => this.setState({ isLoading: false })),
  };

  render() {
    if (this.state.isLoading) {
      return <div />;
    }
    return (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    );
  }
}

export default Root;
