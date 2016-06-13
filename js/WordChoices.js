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

import {WordType, ModeType, modeTypes} from './common/customTypes';
import Button from './common/Button';

import WordChoice from './WordChoice';

/**
 * Displays the possible word choices for the matching game.
 */
export default class WordChoices extends Component {
  props: {
    currentWord: WordType,
    mode: ModeType,
    wordList: Array<{word: WordType, correctlyGuessed: boolean}>,
    onGuessWord: () => void
  };

  render() {
    const {mode, wordList, currentWord, onGuessWord} = this.props;

    const ds: ListView.DataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource: ListView.DataSource = ds.cloneWithRows(wordList);

    return (
      <View style={styles.container}>
        <ListView
          dataSource={dataSource}
          contentContainerStyle={styles.list}
          renderRow={wordData => {
            const word: {chinese: string, english: string} = wordData.word;

            return (
              <WordChoice
                onPress={this.props.onGuessWord}
                key={word.chinese}
                correctlyGuessed={wordData.correctlyGuessed}
                word={mode === modeTypes.ENGLISH_TO_CHINESE ? word.chinese : word.english}
                isCorrect={word === currentWord}
              />
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
});
