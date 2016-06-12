/*
 * @flow
 */

import React, {
  Component,
  View,
  StyleSheet,
  Text,
} from 'react-native';

import vocab from './common/vocab';
import Button from './common/Button';
import type {NavigatorType} from './common/NavigatorType';
import {modeTypes} from './common/customTypes';
import WordsToLearn from './WordsToLearn';
import MatchingGame from './MatchingGame';

/**
 * The instructions that appear before the matching game.
 */
export default class MatchingInstructions extends Component {
  props: {
    categoryName: string;
    navigator: NavigatorType;
  };

  transitionToGame: () => void;

  constructor(props: Object) {
    super(props);

    this.transitionToGame = () => {
      const {categoryName, navigator} = this.props;

      navigator.push({
        title: categoryName,
        component: MatchingGame,
        passProps: {
          categoryName,
          mode: modeTypes.ENGLISH_TO_CHINESE
        }
      });
    }
  }


  render() {
    const vocabList = vocab[this.props.categoryName];

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Step 2: Match!</Text>
        <Text style={styles.text}>
          You have 30 seconds to match all {vocabList.length} English words with their Chinese characters.
        </Text>

        <Button onPress={this.transitionToGame}>
          Play
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#3A69A6',
    padding: 36,
    alignItems: 'center'
  },
  header: {
    fontSize: 36,
    color: 'white',
    marginBottom: 36,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
    marginBottom: 24,
    textAlign: 'center',
  },
  captionText: {
    fontSize: 14,
    color: 'white',
    marginBottom: 36,
    textAlign: 'center',
  },
});
