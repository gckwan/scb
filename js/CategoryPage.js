/*
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  ListView,
  StyleSheet,
  View,
  Text
} from 'react-native';

import vocab from './vocab';
import Category from './Category';
import NavigatorShape from './NavigatorShape';

export default class CategoryPage extends Component {
  static propTypes = {
    navigator: NavigatorShape.isRequired
  };

  render() {
    const categories: Array<string> = Object.keys(vocab);
    const ds: ListView.DataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource: ListView.DataSource = ds.cloneWithRows(categories);

    return (
      <View style={styles.page}>
        <ListView
          dataSource={dataSource}
          renderRow={categoryName => <Category categoryName={categoryName} navigator={this.props.navigator} />}
          contentContainerStyle={styles.list}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#3A69A6',
    flex: 1
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
