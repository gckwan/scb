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
import vocab from './vocab';
import WordView from './WordView';

export default class VocabView extends Component {
  static propTypes = {
    categoryName: React.PropTypes.string
  };

  render() {
    const word = vocab[this.props.categoryName][0];
    return (
      <WordView word={word} />
    );
  }
}

reactMixin(VocabView.prototype, TimerMixin);
