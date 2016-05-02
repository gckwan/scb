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

export default class CategoryPage extends Component {
  render() {
    const categories: Array<string> = Object.keys(vocab);
    const ds: ListView.DataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource: ListView.DataSource = ds.cloneWithRows(categories);

    return (
      <View style={styles.page}>
        <Text style={styles.header}>
          scb - 生词本
        </Text>
        <ListView
          dataSource={dataSource}
          renderRow={categoryName => <Category categoryName={categoryName} />}
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
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 36,
    marginBottom: 18
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
