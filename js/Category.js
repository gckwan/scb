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

import WordsToLearn from './WordsToLearn';
import LearningInstructions from './LearningInstructions';
import type {NavigatorType} from './common/NavigatorType';

/**
 * A button representing a category of vocabulary, such as "Food" or "Directions,"
 * that leads to a learning game when pressed.
 */
export default class Category extends Component {
  props: {
    categoryName: string;
    navigator: NavigatorType;
  };

  onPress: () => void;

  constructor(props: Object) {
    super(props);

    this.onPress = (): void => {
      const {categoryName, navigator} = this.props;

      navigator.push({
        title: categoryName,
        component: LearningInstructions,
        passProps: {categoryName}
      });
    };
  }

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
