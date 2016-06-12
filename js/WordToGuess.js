/*
 * @flow
 */

import React, {
  Component,
  View,
  StyleSheet,
  Text,
} from 'react-native';

import {WordType, ModeType, modeTypes} from './common/customTypes';

/**
 * During the matching game, the current word to guess.
 */
export default class WordToGuess extends Component {
  props: {
    word: WordType,
    mode: ModeType
  };

  render() {
    const {word, mode} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.word}>{mode === modeTypes.CHINESE_TO_ENGLISH ? word.chinese : word.english}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: 'transparent',
  },
  word: {
    fontSize: 48,
    marginTop: 120,
    marginBottom: 0,
    color: '#FFF',
    textAlign: 'center'
  },
});
