/*
 * @flow
 */

import React, {
  Component,
  View,
  StyleSheet,
  Text,
} from 'react-native';

export default class MatchingGame extends Component {
  props: {
    categoryName: string,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.categoryName}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
