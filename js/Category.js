/*
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

import VocabView from './VocabView';
import Instructions from './Instructions';
import NavigatorShape from './NavigatorShape';

export default class Category extends Component {
  static propTypes = {
    categoryName: React.PropTypes.string.isRequired,
    navigator: NavigatorShape.isRequired
  };

  onPress = (): void => {
    const {categoryName, navigator} = this.props;

    navigator.push({
      title: categoryName,
      component: Instructions,
      passProps: {categoryName}
    });
  };

  render() {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.category}>
          <Text style={styles.categoryName}>{this.props.categoryName}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  category: {
    marginTop: 18,
    borderColor: 'white',
    borderWidth: 1,
    margin: 12,
    width: 90,
    height: 90,
    justifyContent: 'center',
    borderRadius: 45
  },
  categoryName: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent'
  }
});
