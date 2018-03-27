import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';

import TaskRow from './TaskRow';
import TaskForm from './TaskForm';

export default class TaskList extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      dataSource : this.props.todos
    }
    this.onAddForm = this.onAddForm.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }
  componentWillReceiveProps(nextProps){
    this.setState({dataSource: this.state.dataSource})
  }
  onAddForm(){
    this.props.navigator.push({
      title: 'TaskForm',
      component: TaskForm,
      passProps: {
        onAddTask: this.props.onAddTask,
        onCancel: this.onCancel
      }
    });
    this.props.navigator.pop();
  }
  onCancel(){
    this.props.navigator.pop();
  }
  
  render(){
    return (
      <View style={styles.container}>
        <FlatList 
          data = {this.state.dataSource}
          extraData = {this.state}
          renderItem={({item}) => 
            <TaskRow 
              todo={item}
              onDone={this.props.onDone}
              />}
        />
        <TouchableHighlight 
          style={styles.addButton}
          onPress={this.onAddForm}
          >
          <Text style={styles.addButtonText}>Add Task</Text>
        </TouchableHighlight>  
      </View>     
    )
  }
}

TaskList.propTypes = {
  todos: PropTypes.array,
  onAddTask: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 150
  },
  addButton: {
    width: '25%',
    backgroundColor: 'green',
    zIndex: 1,
    padding: 10,
    margin: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24
  }
});