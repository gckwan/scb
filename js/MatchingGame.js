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
import ResultsPage from './ResultsPage';

import CountdownTimer from './CountdownTimer';
import NavigatorShape from './NavigatorShape';

import vocab from './common/vocab';

import {WordType, ModeType} from './common/customTypes';

export default class MatchingGame extends Component {
  props: {
    categoryName: string,
    mode: ModeType,
    navigator: NavigatorShape
  };

  state: {
    wordList: Array<WordType>,
    guessList: Array<WordType>,
    timeElapsed: number
  };

  onTick: () => void;
  onZero: () => void;
  onGuessWord: () => void;

  componentWillMount(): void {
    const vocabList: Array<WordType> = vocab[this.props.categoryName];

    const wordList = _.shuffle(vocabList).map(word => ({
      word,
      guessed: false
    }));

    const guessList = _.shuffle(vocabList);

    this.state = {
      wordList,
      guessList,
      timeElapsed: 0
    };

    this.onTick = ({timeElapsed} = {}) => {
      // timeElapsed: number
      this.setState({timeElapsed});
    };

    this.onZero = () => {
      this.transitionToResultsPage({passed: false});
    };

    this.onGuessWord = () => {
      const {wordList, guessList} = this.state;
      const currentWord = guessList[0];

      const guessedWord = wordList.find(wordData => wordData.word === currentWord);
      guessedWord.guessed = true;

      const updatedGuessList = guessList.slice(1);
      if (updatedGuessList.length === 0) {
        this.transitionToResultsPage({passed: true});
      } else {
        this.setState({
          wordList,
          guessList: updatedGuessList,
        });
      }
    };
  }

  transitionToResultsPage({passed} = {}): void {
    // passed: boolean
    const {categoryName, navigator} = this.props;

    navigator.push({
      component: ResultsPage,
      passProps: {
        passed,
        timeElapsed: this.state.timeElapsed,
        numWords: vocab[categoryName].length
      }
    });
  }

  render() {
    const {wordList, guessList} = this.state;
    const currentWord = guessList[0];

    return (
      <View style={styles.container}>
        <CountdownTimer
          initialTimeRemaining={60000}
          interval={1000}
          isRepeating={false}
          onTick={this.onTick}
          onZero={this.onZero}
        />
        <WordToGuess word={currentWord} mode={this.props.mode} />
        <WordChoices
          currentWord={currentWord}
          wordList={wordList}
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
