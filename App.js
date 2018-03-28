import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, NavigatorIOS } from 'react-native';
import store from './todoStore';
import TaskList from './TaskList';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {
          task: 'Create React Native App',
          key: 'item 1'
        },
        {
          task: 'Buy Milk',
          key: 'item 2'
        }
      ]
    }
    
    this.onAddTask = this.onAddTask.bind(this);
    this.onDone = this.onDone.bind(this);
  }

  onAddTask(text){
    this.state.todos.push({
      task: text,
      key: `item ${this.state.todos.length + 1}`
    })
    this.setState({todos: this.state.todos})
    console.log('added task:', this.state.todos)
    this.refs.nav.pop();
  }

  onDone(task){
    console.log("todo before setState:", this.state.todos)
    origLength = this.state.todos.length
    const filteredTodos = this.state.todos.filter(todo => {
        return todo !== task
      })
    if(filteredTodos.length === (origLength - 1)){
      this.setState({todos: filteredTodos});
      console.log('state changed')
    }
    
    console.log("filteredtodos", filteredTodos)
    console.log('todo after setstate:', this.state.todos)
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

