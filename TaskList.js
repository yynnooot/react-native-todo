import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, FlatList, TouchableHighlight, Text } from 'react-native';

import TaskRow from './TaskRow';

export default class TaskList extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      dataSource : props.todos
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <FlatList 
          data = {this.state.dataSource}
          renderItem={ ({item}) => <TaskRow todos={item}/> }
        />
        <TouchableHighlight 
          style={styles.button}
          onPress={this.props.onAddClick}
        >
          <Text style={styles.buttonText}>
            Add Task
          </Text>
        </TouchableHighlight>  
      </View>     
    )
  }
}

TaskList.propTypes = {
  onAddClick: PropTypes.func.isRequired,
  todos: PropTypes.array
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 200
  },
  button: {
   height: 60,
   width: '70%',
   borderColor: '#05A5D1',
   borderWidth: 2,
   backgroundColor: '#333',
   margin: 20,
   justifyContent: 'center',
   alignItems: 'center'
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 20,
    fontWeight: '600'
  }
});