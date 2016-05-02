/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  Text,
  View,
} from 'react-native';

import CategoryPage from './js/CategoryPage';

class scb extends Component {
  render() {
    return (
      <CategoryPage />
    );
  }
}

AppRegistry.registerComponent('scb', () => scb);
