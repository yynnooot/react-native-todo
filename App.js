import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TaskList from './TaskList';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {
          task: 'Create React Native App',
          key: 'item1'
        },
        {
          task: 'Buy Milk',
          key: 'item2'
        }
      ]
    }
  }
  render(){
    return (
      <TaskList 
        todos={this.state.todos}
        style={styles.container}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
});
