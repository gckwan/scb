/*
 * @flow
 */

import React, {
  Component,
  View,
  StyleSheet,
  Text,
} from 'react-native';

import _ from 'lodash';

import WordToGuess from './WordToGuess';
import WordChoices from './WordChoices';

import vocab from './common/vocab';

import {WordType, ModeType} from './common/customTypes';

export default class MatchingGame extends Component {
  props: {
    categoryName: string,
    mode: ModeType
  };

  state: {
    currentWord: WordType,
    wordList: Array<WordType>
  };

  componentWillMount(): void {
    const vocabList: Array<WordType> = vocab[this.props.categoryName];

    const wordList = _.shuffle(vocabList);

    this.state = {
      wordList,
      currentWord: wordList[0],
    };
  }

  onGuessWord() {

  }

  render() {
    return (
      <View style={styles.container}>
        <WordToGuess word={this.state.currentWord} mode={this.props.mode} />
        <WordChoices
          currentWord={this.state.currentWord}
          wordList={this.state.wordList}
          mode={this.props.mode}
          onGuessWord={this.onGuessWord}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3A69A6',
    padding: 36,
  },
});
