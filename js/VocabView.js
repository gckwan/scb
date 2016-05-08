/*
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  View,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

import reactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';
import vocab from './common/vocab';
import WordView from './WordView';
import MatchingInstructions from './MatchingInstructions';
import NavigatorShape from './NavigatorShape';

const WORD_DURATION_MS = 5000;

export default class VocabView extends Component {
  props : {
    categoryName: string,
    navigator: NavigatorShape
  };

  state = {
    wordIndex: 0
  };

  componentDidMount(): void {
    this.wordChangeIntervalId = this.setInterval(this.changeWord, WORD_DURATION_MS);
  }

  changeWord() {
    const vocabList = vocab[this.props.categoryName];

    let {wordIndex} = this.state;
    const outOfWords = ++wordIndex >= vocabList.length;

    if (outOfWords) {
      this.clearInterval(this.wordChangeIntervalId);
      this.transitionToGame();
    } else {
      this.setState({wordIndex});
    }
  }

  transitionToGame(): void {
    const {categoryName, navigator} = this.props;

    navigator.push({
      title: categoryName,
      component: MatchingInstructions,
      passProps: {categoryName}
    });
  }

  render() {
    const vocabList = vocab[this.props.categoryName];
    const word = vocabList[this.state.wordIndex];
    return (
      <View style={styles.container}>
        <WordView word={word} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#3A69A6',
  },
  character: {
    fontSize: 180,
    marginBottom: 18,
    color: '#FFF'
  }
});

reactMixin(VocabView.prototype, TimerMixin);
