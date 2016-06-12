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
import WordsToLearn from './WordsToLearn';
import MatchingInstructions from './MatchingInstructions';

/**
 * The instructions that appear before the learning phase.
 */
export default class LearningInstructions extends Component {
  props: {
    categoryName: string;
    navigator: NavigatorType;
  };

  transitionToWordsToLearn: () => void;
  transitionToGame: () => void;

  constructor(props: Object) {
    super(props);

    this.transitionToComponent = (component) => {
      const {categoryName, navigator} = this.props;

      navigator.push({
        component,
        title: categoryName,
        passProps: {categoryName}
      });
    }

    this.transitionToWordsToLearn = (): void => {
      this.transitionToComponent(WordsToLearn);
    };

    this.transitionToGame = (): void => {
      this.transitionToComponent(MatchingInstructions);
    }

  }


  render() {
    const vocabList = vocab[this.props.categoryName];

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Step 1: Learn</Text>
        <Text style={styles.text}>
          In this level, you'll learn {vocabList.length} words or phrases.
        </Text>
        <Text style={styles.captionText}>
          You'll have 3 seconds to view each word or phrase. Then, you'll play a matching game to test
          how well you learned the vocabulary!
        </Text>

        <View>
          <Button onPress={this.transitionToWordsToLearn}>
            Get Started
          </Button>

          <Button type="secondary" onPress={this.transitionToGame} style={styles.bottomButton}>
            Skip to Game
          </Button>
        </View>
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
  bottomButton: {
    marginTop: 18
  }
});
