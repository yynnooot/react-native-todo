import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

export default class TaskRow extends Component{
  constructor(props){
    super(props);
    this.state = {}
    
    this.onDonePressed = this.onDonePressed.bind(this)
  }
  onDonePressed(){
    this.props.onDone(this.props.todo)
    console.log("todo to delete:", this.props.todo)
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{this.props.todo.task}</Text>
        <TouchableHighlight 
          style={styles.doneBtn}
          onPress={this.onDonePressed}
          >
          <Text>Done</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E7E7E7',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    padding: 20
  },
  label: {
    fontSize: 20,
    fontWeight: '300'
  },
  doneBtn: {
    borderRadius: 5,
    padding: 5,
  }
})

TaskRow.propTypes = {
  todo: PropTypes.shape({
    task: PropTypes.string.isRequired
  }),
  onDone: PropTypes.func.isRequired
}
