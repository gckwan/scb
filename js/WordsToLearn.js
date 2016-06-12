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
import Swiper from 'react-native-swiper';

import vocab from './common/vocab';
import Button from './common/Button';

import WordToLearn from './WordToLearn';
import MatchingInstructions from './MatchingInstructions';
import type {NavigatorType} from './common/NavigatorType';

const WORD_DURATION_MS = 5000;

/**
 * During the learning phase, manages the display of the words the user is learning.
 */
export default class WordsToLearn extends Component {
  props: {
    categoryName: string,
    navigator: NavigatorType
  };

  state: {
    wordIndex: number
  };

  onScroll: () => void;

  constructor(props: Object) {
    super(props);

    this.state = {
      wordIndex: 0
    };

    this.onScroll = (e, state = {}) => {
      this.setState({wordIndex: state.index});
    };
  }

  render() {
    const {wordIndex} = this.state;

    const vocabList = vocab[this.props.categoryName];
    const word = vocabList[this.state.wordIndex];

    const viewsToRender = vocabList.map((word, index) =>
      <WordToLearn key={word.english} word={word} isActive={wordIndex === index} />
    );

    viewsToRender.push(
      <MatchingInstructions
        key="instructions"
        navigator={this.props.navigator}
        categoryName={this.props.categoryName}
      />
    );

    return (
      <Swiper
        style={styles.container}
        autoplay={true}
        autoplayTimeout={3}
        showsHorizontalScrollIndicator={true}
        loop={false}
        onMomentumScrollEnd={this.onScroll}
        showsButtons={true}
      >
        {viewsToRender}
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3A69A6',
  },
  character: {
    fontSize: 180,
    marginBottom: 18,
    color: '#FFF'
  },
  endScreen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  getReadyText: {
    fontSize: 30,
    color: '#FFF',
    marginBottom: 48
  }
});
