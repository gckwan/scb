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

import CountdownTimer from './common/CountdownTimer';
import {WordType, ModeType} from './common/customTypes';
import type {NavigatorType} from './common/NavigatorType';

import vocab from './common/vocab';

const INITIAL_TIME_MS = 30000;

/**
 * The container component for step 2, the matching game.
 * Handles state for the game and passes it down through the component tree.
 */
export default class MatchingGame extends Component {
  props: {
    categoryName: string;
    mode: ModeType;
    navigator: NavigatorType;
  };

  state: {
    choiceList: Array<WordType>;
    wordsToGuessList: Array<WordType>;
    currentWordIndex: number;
    timeElapsed: number;
  };

  onTick: () => void;
  onZero: () => void;
  onGuessWord: () => void;
  transitionToResultsPage: () => void;

  constructor(props: Object) {
    super(props);

    const vocabList: Array<WordType> = vocab[this.props.categoryName];

    // Shuffle the list of words to guess, so you get a different order each playthrough.
    const wordsToGuessList = _.shuffle(vocabList);

    // Shuffle the list of word choices and store a boolean alongside each word that represents
    // whether it has been correctly guessed, so we can display that state in the UI.
    const choiceList = _.shuffle(vocabList).map(word => ({
      word,
      correctlyGuessed: false
    }));

    this.state = {
      choiceList,
      wordsToGuessList,
      currentWordIndex: 0,
      timeElapsed: 0,
    };

    this.onTick = ({timeElapsed} = {}) => {
      // timeElapsed: number
      this.setState({timeElapsed});
    };

    this.onZero = () => {
      this.transitionToResultsPage(false);
    };

    /**
     * Mark the correctly guessed word and update the list of choices.
     * If the user has guessed all the words, display the results page.
     */
    this.onGuessWord = () => {
      const {choiceList, wordsToGuessList, currentWordIndex} = this.state;

      const isLastWord = currentWordIndex === (wordsToGuessList.length - 1);

      if (isLastWord) {
        this.transitionToResultsPage(true);
      } else {
        const currentWord = wordsToGuessList[currentWordIndex];

        // Mark the word that was just correctly guessed in the list of choices.
        const guessedWord = choiceList.find(wordData => wordData.word === currentWord);
        guessedWord.correctlyGuessed = true;

        this.setState({
          choiceList,
          currentWordIndex: currentWordIndex + 1
        });
      }
    };

    this.transitionToResultsPage = (passed: boolean) => {
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
  }

  render() {
    const {choiceList, wordsToGuessList, currentWordIndex} = this.state;
    const currentWord = wordsToGuessList[currentWordIndex];

    return (
      <View style={styles.container}>
        <CountdownTimer
          initialTimeRemaining={INITIAL_TIME_MS}
          interval={1000}
          isRepeating={false}
          onTick={this.onTick}
          onZero={this.onZero}
        />
        <WordToGuess word={currentWord} mode={this.props.mode} />
        <WordChoices
          currentWord={currentWord}
          wordList={choiceList}
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
