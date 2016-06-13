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
 * Displays whether the user won or lost.
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
        <Text style={styles.header}>{passed ? 'Nice job!' : 'Nice try!'}</Text>
        <Text style={styles.text}>
          {passed ?
            `You matched all ${numWords} words correctly in ${Math.ceil(timeElapsed / 1000)} seconds.` :
            `You didn't match all the words in time. Keep learning and give it another shot!`
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
