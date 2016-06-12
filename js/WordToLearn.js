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

import Translation from './Translation';
import CountdownTimer from './common/CountdownTimer';

import Speech from 'react-native-speech';

/**
 * During the learning phase, displays a word and its associated countdown.
 */
export default class WordToLearn extends Component {
  props: {
    word: {
      english: string;
      chinese: string;
      pinyin: string;
    };
    isActive: boolean;
  };

  componentDidMount() {
    this.speakWord();
  }

  componentDidUpdate(prevProps: Object) {
    if (this.props.isActive) {
      this.speakWord();
    }
  }

  speakWord() {
    Speech.speak({
      text: this.props.word.chinese,
      voice: 'zh-CN'
    })
    .catch(() => {});
  }

  render() {
    const {word} = this.props;

    return (
      <View style={styles.container}>
        {this.props.isActive && <CountdownTimer initialTimeRemaining={3000} interval={1000} isRepeating={false} />}
        <Translation word={word} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
