import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, NavigatorIOS } from 'react-native';
import store from './todoStore';
import TaskList from './TaskList';

export default class App extends Component {
  constructor(){
    super();
    this.state = store.getState();

    store.subscribe(()=>{
      this.setState(store.getState());
    })
    
    this.onAddTask = this.onAddTask.bind(this);
    this.onDone = this.onDone.bind(this);
  }

  onAddTask(text){
    store.dispatch({
      type: 'ADD_TODO',
      text
    })
    this.refs.nav.pop();
  }

  onDone(todo){
    store.dispatch({
      type: 'DONE_TODO',
      todo
    })
  }

  render(){
    return (
      <NavigatorIOS
        ref= 'nav'
        initialRoute={{
          component: TaskList,
          title: 'Tasklist',
          passProps: { 
            todos: this.state.todos,
            onCancel: this.onCancel,
            onAddTask: this.onAddTask,
            onDone: this.onDone
          }
         }}
         style={styles.container}
      />
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

  // onAddClick(){
  //   this.nav.push({
  //     name: 'taskform'
  //   })
  // }

  // renderScene(route, nav){
  //   switch (route.name){
  //     case 'taskform':
  //       return <Text>Add form Comes here!</Text>
  //     default:
  //       return (
  //         <TaskList
  //           onAddClick={this.onAddClick}
  //           todos={this.state.todos}
  //         />
  //       )
  //   }
  // }

