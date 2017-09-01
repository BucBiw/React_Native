import React, { Component } from 'react';
import { StyleSheet, View, Text, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';

import BookList from './component/BookList';

export default class PageOne extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.child}>
          <BookList/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#967140',
    justifyContent: 'center'
  },
  child: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff'
  }
});