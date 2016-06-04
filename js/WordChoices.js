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

import reactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';
import {WordType, ModeType} from './common/customTypes';
import Button from './common/Button';

class WordChoice extends Component {
  props: {
    word: string;
    onPress: () => void;
    isCorrect: boolean;
  };

  state: {
    isPressed: boolean;
  };

  constructor(props) {
    super(props);
    this.state = {
      isPressed: false
    };
  }

  onPress = (): void => {
    this.setState({isPressed: true});

    if (this.props.isCorrect) {
      this.setTimeout(() => {
        this.props.onPress();
      }, 300);
    } else {
      this.setTimeout(() => {
        this.setState({isPressed: false});
      }, 300);
    }
  };

  render() {
    let additionalStyles = {};
    let additionalTextStyles = {};
    if (this.state.isPressed) {
      additionalStyles = this.props.isCorrect ? styles.correct : styles.incorrect;
      additionalTextStyles = styles.pressed;
    }


    return (
      <TouchableOpacity
        accessibilityTraits="button"
        onPress={this.onPress}
        activeOpacity={0.8}
        style={[styles.wordChoice, additionalStyles]}
      >
        <Text style={[styles.wordChoiceText, additionalTextStyles]}>{this.props.word}</Text>
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
    const {mode, wordList, currentWord, onGuessWord} = this.props;

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
                isCorrect={word === currentWord}
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
    margin: 12,
    backgroundColor: 'white',
    borderRadius: 36,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wordChoiceText: {
    color: '#3A69A6',
    fontSize: 24,
  },
  correct: {
    backgroundColor: 'green',
  },
  incorrect: {
    backgroundColor: 'red',
  },
  pressed: {
    color: 'white'
  }
});

reactMixin(WordChoice.prototype, TimerMixin);
