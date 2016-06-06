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
import Swiper from 'react-native-swiper';

import vocab from './common/vocab';
import Button from './common/Button';

import WordView from './WordView';
import MatchingInstructions from './MatchingInstructions';
import NavigatorShape from './NavigatorShape';


const WORD_DURATION_MS = 5000;

export default class VocabView extends Component {
  props: {
    categoryName: string,
    navigator: NavigatorShape
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
      <WordView key={word.english} word={word} isActive={wordIndex === index} />
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

reactMixin(VocabView.prototype, TimerMixin);
