import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TextInput, View, FlatList, TouchableHighlight } from 'react-native';

export default class TaskForm extends Component{
  constructor(props, context){
    super(props, context);
    this.state = {
      task: '',
    }
    this.onAddPressed = this.onAddPressed.bind(this);
  }
  onAddPressed(){
    this.props.onAddTask(this.state.task)
  }
  render(){
    
    return (
      <View style={styles.container} >
        <TextInput
          style={styles.input}
          onChangeText={(text)=> this.setState({task: text})}
          value={this.state.task}
          multiline={true}
        />
        <TouchableHighlight 
          style={[styles.btn, styles.btnAdd]}
          onPress={this.onAddPressed}
          >
          <Text>Add</Text>
        </TouchableHighlight>
        <TouchableHighlight 
          style={[styles.btn, styles.btnCancel]}
          onPress={this.props.onCancel}
        >
          <Text>Cancel</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
TaskForm.PropTypes = {
  onCancel: PropTypes.func.isRequired,
  onAddTask: PropTypes.func.isRequired
}
const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 150,
    backgroundColor: '#F7F7F7'
  },
  input: {
    height: 50, 
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 3
  },
  btn: {
    width: '25%',
    zIndex: 1,
    padding: 10,
    margin: 20,
  },
  btnAdd: {
    backgroundColor: 'green',
  },
  btnCancel: {
    backgroundColor: 'red',
  }
}