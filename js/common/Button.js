/**
 * @flow
 */


 import React, {
   AppRegistry,
   Component,
   View,
   StyleSheet,
   Text,
   TouchableOpacity
 } from 'react-native';

export default class F8Button extends React.Component {
  props: {
    type: 'primary' | 'secondary';
    style?: any;
    onPress?: () => void;
    children?: any;
  };

  static defaultProps = {
    type: 'primary',
  };

  render() {
    const typeStyles = styles[this.props.type];
    const buttonTypeStyles = styles[`${this.props.type}Text`];

    return (
      <TouchableOpacity
        accessibilityTraits="button"
        onPress={this.props.onPress}
        activeOpacity={0.8}
        style={[styles.button, this.props.style, typeStyles]}
      >
        <Text style={buttonTypeStyles}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

const HEIGHT = 50;

var styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    height: HEIGHT,
    borderWidth: 1,
    borderRadius: HEIGHT / 2,
    borderColor: 'white'
  },
  primary: {
    backgroundColor: 'white',
  },
  secondary: {
    backgroundColor: 'transparent'
  },
  primaryText: {
    color: '#3A69A6',
    fontWeight: '600'
  },
  secondaryText: {
    color: 'white'
  }
});
