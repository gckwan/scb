/*
 * @flow
 */

import React, {
  Component,
  View,
  StyleSheet,
  Text,
} from 'react-native';

import vocab from './vocab';
import Button from './common/Button';
import NavigatorShape from './NavigatorShape';
import VocabView from './VocabView';
import MatchingInstructions from './MatchingInstructions';

export default class Instructions extends Component {
  static propTypes = {
    categoryName: React.PropTypes.string.isRequired,
    navigator: NavigatorShape.isRequired
  };

  transitionToVocabView = (): void => {
    const {categoryName, navigator} = this.props;

    navigator.push({
      title: categoryName,
      component: VocabView,
      passProps: {categoryName}
    });
  }

  transitionToGame = (): void => {
    const {categoryName, navigator} = this.props;

    navigator.push({
      title: categoryName,
      component: MatchingInstructions,
      passProps: {categoryName}
    });
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
          You'll have 5 seconds to view each word or phrase. Then, you'll play a matching game to test
          how well you learned the vocabulary!
        </Text>

        <View>
          <Button onPress={this.transitionToVocabView}>
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
