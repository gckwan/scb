/*
 * @flow
 */

import React, {
  Component,
  View,
  StyleSheet,
  Text,
} from 'react-native';

import {WordType, ModeType} from './common/customTypes';

export default class WordToGuess extends Component {
  props: {
    word: WordType,
    mode: ModeType
  };

  render() {
    const {word} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.word}>{this.props.mode === 'chineseToEnglish' ? word.chinese : word.english}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  word: {
    fontSize: 48,
    marginTop: 60,
    marginBottom: 36,
    color: '#FFF'
  },
});
