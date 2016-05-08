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
import NavigatorShape from './NavigatorShape';
import VocabView from './VocabView';
import MatchingGame from './MatchingGame';

export default class MatchingInstructions extends Component {
  static propTypes = {
    categoryName: React.PropTypes.string.isRequired,
    navigator: NavigatorShape.isRequired
  };

  transitionToGame = () => {
    const {categoryName, navigator} = this.props;

    navigator.push({
      title: categoryName,
      component: MatchingGame,
      passProps: {
        categoryName,
        mode: 'englishToChinese'
      }
    });
  }

  render() {
    const vocabList = vocab[this.props.categoryName];

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Step 2: Match!</Text>
        <Text style={styles.text}>
          You have 60 seconds to match all {vocabList.length} English words with their Chinese characters.
        </Text>
        <Text style={styles.captionText}>
          Be careful – get more than 3 wrong or run out of time, and you lose!
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
