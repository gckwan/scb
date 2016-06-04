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