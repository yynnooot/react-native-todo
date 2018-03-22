import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, FlatList } from 'react-native';

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
          renderItem={({item}) => <TaskRow todos={item}/>}
        />  
      </View>     
    )
  }
}

TaskList.propTypes = {
  todos: PropTypes.array
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 200
  }
});