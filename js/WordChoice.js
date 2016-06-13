/*
 * @flow
 */

import React, {
  Component,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ListView
} from 'react-native';

import reactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';

import Speech from 'react-native-speech';

import {modeTypes, WordType} from './common/customTypes';

const PRESS_DELAY_MS = 300;

/**
 * During the matching game, a possible translation for the current displayed word.
 */
export default class WordChoice extends Component {
  props: {
    word: WordType;
    onPress: () => void;
    isCorrect: boolean;
    correctlyGuessed: boolean;
  };

  state: {
    isPressed: boolean;
  };

  intervalId: number;
  setTimeout: () => number;
  clearTimeout: () => void;

  onPress: () => void;

  constructor(props: Object) {
    super(props);
    this.state = {
      isPressed: false
    };

    this.onPress = (): void => {
      // Disable functionality if word has already been correctlyGuessed
      if (this.props.correctlyGuessed) {
        return;
      }

      this.speakWord();

      this.setState({isPressed: true});

      // Display pressed state briefly before reacting to the press
      this.setTimeout(() => {
        if (this.props.isCorrect) {
          this.props.onPress();
        }
        this.setState({isPressed: false});
      }, PRESS_DELAY_MS);
    };
  }

  speakWord() {
    Speech.speak({
      text: this.props.word,
      voice: 'zh-CN'
    })
    .catch(() => {});
  }

  render() {
    let additionalStyles = {};
    let additionalTextStyles = {};
    let guessStyles = styles.notGuessed;
    let correctlyGuessedTextStyles = {};

    if (this.state.isPressed) {
      additionalStyles = this.props.isCorrect ? styles.correct : styles.incorrect;
      additionalTextStyles = styles.pressed;
    } else if (this.props.correctlyGuessed) {
      guessStyles = styles.correctlyGuessed;
    }

    return (
      <TouchableOpacity
        accessibilityTraits="button"
        onPress={this.onPress}
        activeOpacity={0.8}
        style={[styles.wordChoice, guessStyles, additionalStyles]}
      >
        <Text style={[styles.wordChoiceText, additionalTextStyles]}>{this.props.word}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  wordChoice: {
    margin: 12,
    borderRadius: 36,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wordChoiceText: {
    color: '#3A69A6',
    fontSize: 24,
  },
  correct: {
    backgroundColor: 'green',
  },
  incorrect: {
    backgroundColor: 'red',
  },
  pressed: {
    color: 'white'
  },
  correctlyGuessed: {
    opacity: 0,
  },
  notGuessed: {
    backgroundColor: 'white',
  },
});

reactMixin(WordChoice.prototype, TimerMixin);
