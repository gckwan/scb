/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  NavigatorIOS,
  Text,
  View,
  StyleSheet,
} from 'react-native';

import CategoryPage from './js/CategoryPage';

class scb extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Vocabook - 生词本',
          component: CategoryPage,
        }}
      />
    );
  }
}

const styles = React.StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('scb', () => scb);
