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
  static propTypes = {
    initialTimeRemaining: React.PropTypes.number,
    interval: React.PropTypes.number,
    isRepeating: React.PropTypes.bool,
    style: React.PropTypes.object
  };

  static defaultProps = {
    style: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      timeRemaining: props.initialTimeRemaining
    };
  }

  componentDidMount() {
    this.intervalId = this.setInterval(this.countDown, this.props.interval);
  }

  countDown() {
    let newTimeRemaining = this.state.timeRemaining - this.props.interval;
    console.log('interval has passed');
    console.log(newTimeRemaining);

    // If isRepeating is true, reset the time remaining to initialTimeRemaining when it hits 0
    if (newTimeRemaining === 0) {
      if (this.props.isRepeating) {
        newTimeRemaining = this.props.initialTimeRemaining;
      } else {
        this.clearInterval(this.intervalId);
      }
    }

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
