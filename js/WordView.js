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
import CountdownTimer from './CountdownTimer';

import Speech from 'react-native-speech';

export default class WordView extends Component {
  static propTypes = {
    word: React.PropTypes.shape({
      english: React.PropTypes.string.isRequired,
      chinese: React.PropTypes.string.isRequired,
    })
  };

  componentDidMount() {
    this.speakWord();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.word !== this.props.word) {
      this.speakWord();
    }
  }

  speakWord() {
    Speech.speak({
      text: this.props.word.chinese,
      voice: 'zh-CN'
    });
  }

  render() {
    const {word} = this.props;

    return (
      <View style={styles.container}>
        <CountdownTimer initialTimeRemaining={5000} interval={1000} isRepeating={true} />
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
