/*
 * @flow
 */

import React, {
  Component,
  View,
  StyleSheet,
  Text,
} from 'react-native';

import Button from './common/Button';
import NavigatorShape from './NavigatorShape';
import CategoryPage from './CategoryPage';

export default class ResultsPage extends Component {
  props: {
    numWords: number,
    timeElapsed: number,
    navigator: NavigatorShape
  };

  transitionToCategoryPage: () => void;

  constructor(props: Object) {
    super(props);

    this.transitionToCategoryPage = () => {
      const {navigator} = props;

      navigator.push({
        title: 'scb (生词本)',
        component: CategoryPage,
      });
    };
  }

  render() {
    const {numWords, timeElapsed} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Nice job!</Text>
        <Text style={styles.text}>
          You matched all {numWords} words correctly in {Math.ceil(timeElapsed / 1000)} seconds.
        </Text>

        <View>
          <Button onPress={this.transitionToCategoryPage}>
            Keep Learning
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#3A69A6',
    padding: 36,
    alignItems: 'center'
  },
  header: {
    fontSize: 36,
    color: 'white',
    marginBottom: 36,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
    marginBottom: 24,
    textAlign: 'center',
  },
  captionText: {
    fontSize: 14,
    color: 'white',
    marginBottom: 36,
    textAlign: 'center',
  },
  bottomButton: {
    marginTop: 18
  }
});
