/*
 * @flow
 */

import React, {
  Component,
  View,
  StyleSheet,
  Text,
} from 'react-native';

import Button from './common/Button';
import type {NavigatorType} from './common/NavigatorType';
import CategoryPage from './CategoryPage';

/**
<<<<<<< HEAD
 * Displays whether the user won or lost.
=======
 * Displays the results of the user's game.
>>>>>>> 24bfa688569eb8550e367ec769ba749e67590216
 */
export default class ResultsPage extends Component {
  props: {
    passed: bool,
    numWords: number,
    timeElapsed: number,
    navigator: NavigatorType
  };

  transitionToCategoryPage: () => void;

  constructor(props: Object) {
    super(props);

    this.transitionToCategoryPage = () => {
      const {navigator} = props;

      navigator.push({
        title: 'scb (生词本)',
        component: CategoryPage,
      });
    };
  }

  render() {
    const {passed, numWords, timeElapsed} = this.props;

    return (
      <View style={styles.container}>
<<<<<<< HEAD
        <Text style={styles.header}>{passed ? 'Nice job!' : 'Nice try!'}</Text>
        <Text style={styles.text}>
          {passed ?
            `You matched all ${numWords} words correctly in ${Math.ceil(timeElapsed / 1000)} seconds.` :
            `You didn't match all the words in time. Keep learning and give it another shot!`
=======
        <Text style={styles.header}>{passed ? <span>Nice job!</span> : <span>Nice try!</span>}</Text>
        <Text style={styles.text}>
          {passed ?
            <span>You matched all {numWords} words correctly in {Math.ceil(timeElapsed / 1000)} seconds.</span> :
            <span>You didn't match all the words in time. Keep studying and give it another shot!</span>
>>>>>>> 24bfa688569eb8550e367ec769ba749e67590216
          }
        </Text>

        <View>
          <Button onPress={this.transitionToCategoryPage}>
            Keep Learning
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
