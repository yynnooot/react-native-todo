import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigator } from 'react-native-custom-components'; 

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
    this.onAddClick = this.onAddClick.bind(this);
    this.renderScene = this.renderScene.bind(this);
  }

  onAddClick(){
    console.log('hello')
  }

  renderScene(route, nav){
    switch (route.name){
      case: 'taskform': 
        return <Text>Add form comes here</Text>
      default: 
        return (
          <TaskList 
            todos={this.state.todos}
            onAddClick={this.onAddClick}
            style={styles.container}
          />
        )
    }
  }

  render(){
    return (
      <Navigator
        initialRoute={}
        renderScene={this.renderScene}
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
