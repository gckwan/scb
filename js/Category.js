/*
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  View,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

import VocabView from './VocabView';
import NavigatorShape from './NavigatorShape';

export default class Category extends Component {
  static propTypes = {
    categoryName: React.PropTypes.string,
    navigator: NavigatorShape
  };

  onPress = () => {
    const {categoryName, navigator} = this.props;

    this.props.navigator.push({
      title: categoryName,
      component: VocabView,
      passProps: {categoryName}
    });
  }

  render() {
    return (
      <TouchableHighlight onPress={this.onPress}>
        <View style={styles.category}>
          <Text style={styles.categoryName}>{this.props.categoryName}</Text>
        </View>
      </TouchableHighlight>
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
