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

/**
 * Displays the current word in Chinese, English, and Pinyin.
 */
export default class Translation extends Component {
  props: {
    word: {
      english: string;
      chinese: string;
      pinyin: string;
    }
  };

  render() {
    const {word} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.pinyin}>{word.pinyin}</Text>
        <Text style={styles.character}>{word.chinese}</Text>
        <Text style={styles.translation}>{word.english}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  character: {
    fontSize: 180,
    marginBottom: 48,
    color: '#FFF'
  },
  pinyin: {
    fontSize: 18,
    marginBottom: 24,
    color: '#FFF',
    opacity: .75,
  },
  translation: {
    fontSize: 36,
    color: '#FFF'
  }
});
