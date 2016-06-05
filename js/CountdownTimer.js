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

export default class CountdownTimer extends Component {
  props: {
    initialTimeRemaining: number,
    interval: number,
    isRepeating: bool,
    style: Object,
    onTick: () => void,
    onZero: () => void,
  };

  static defaultProps = {
    style: {},
    onTick: () => {},
    onZero: () => {}
  };

  state: {
    timeRemaining: number
  };

  constructor(props: Object) {
    super(props);
    this.state = {
      timeRemaining: props.initialTimeRemaining
    };
  }

  componentDidMount() {
    this.intervalId = this.setInterval(this.countDown, this.props.interval);
  }

  countDown() {
    const {timeRemaining} = this.state;
    const {interval, isRepeating, initialTimeRemaining} = this.props;
    let newTimeRemaining = this.state.timeRemaining - interval;

    // If isRepeating is true, reset the time remaining to initialTimeRemaining when it hits 0
    if (newTimeRemaining === 0) {
      if (isRepeating) {
        newTimeRemaining = initialTimeRemaining;
      } else {
        this.clearInterval(this.intervalId);
      }
    }

    this.props.onTick({
      timeElapsed: initialTimeRemaining - timeRemaining,
      timeRemaining
    });

    this.setState({timeRemaining: newTimeRemaining});
  }

  render() {
    return (
      <View style={styles.outerCircle}>
        <Text style={styles.timeRemaining}>{this.state.timeRemaining / 1000}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerCircle: {
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#FFF',
    width: 60,
    height: 60,
    position: 'absolute',
    top: 84,
    right: 18,
    justifyContent: 'center',
  },
  timeRemaining: {
    fontSize: 36,
    color: '#FFF',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  }
})

reactMixin(CountdownTimer.prototype, TimerMixin);
