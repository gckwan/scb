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

export default class Translation extends Component {
  static propTypes = {
    word: React.PropTypes.shape({
      english: React.PropTypes.string.isRequired,
      chinese: React.PropTypes.string.isRequired,
    })
  };

  render() {
    const {word} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.pinyin}>{word.pinyin}</Text>
        <Text style={styles.character}>{word.chinese}</Text>
        <Text style={styles.translation}>{word.english}</Text>
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
  character: {
    fontSize: 180,
    marginBottom: 48,
    color: '#FFF'
  },
  pinyin: {
    fontSize: 18,
    marginBottom: 24,
    color: '#FFF',
    opacity: .75,
  },
  translation: {
    fontSize: 36,
    color: '#FFF'
  }
});
