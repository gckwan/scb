/*
 * @flow
 */

import React, {
  Component,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ListView
} from 'react-native';

import {WordType, ModeType} from './common/customTypes';
import Button from './common/Button';

class WordChoice extends Component {
  props: {
    word: string;
    onPress: () => void;
  };

  render() {
    return (
      <TouchableOpacity
        accessibilityTraits="button"
        onPress={this.props.onPress}
        activeOpacity={0.8}
        style={styles.wordChoice}
      >
        <Text style={styles.wordChoiceText}>{this.props.word}</Text>
      </TouchableOpacity>
    );
  }
};

export default class WordChoices extends Component {
  props: {
    currentWord: WordType,
    mode: ModeType,
    wordList: Array<WordType>,
    onGuessWord: () => void
  };

  render() {
    const {mode, wordList, onGuessWord} = this.props;

    const ds: ListView.DataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource: ListView.DataSource = ds.cloneWithRows(wordList);

    return (
      <View style={styles.container}>
        <ListView
          dataSource={dataSource}
          contentContainerStyle={styles.list}
          renderRow={word => {
            return (
              <WordChoice
                onPress={this.props.onGuessWord}
                key={word.chinese}
                style={styles.buttonStyles}
                word={mode === 'englishToChinese' ? word.chinese : word.english}
              />
            );
          }}
        />
      </View>
    );
  }
}

const HEIGHT = 50;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  wordChoice: {
    margin: 12
  },
  wordChoiceText: {

  }
});
