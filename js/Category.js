/*
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  View,
  StyleSheet,
  Text
} from 'react-native';

export default class Category extends Component {
  static propTypes = {
    categoryName: React.PropTypes.string
  };

  render() {
    return (
      <View style={styles.category}>
        <Text style={styles.categoryName}>{this.props.categoryName}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  category: {
    backgroundColor: 'white',
    margin: 12,
    width: 90,
    height: 90,
    justifyContent: 'center',
    borderRadius: 12
  },
  categoryName: {
    textAlign: 'center'
  }
});
