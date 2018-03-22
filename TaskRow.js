import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default class TaskRow extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{this.props.todos.task}</Text>
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
    marginTop: 20
  },
  label: {
    fontSize: 20,
    fontWeight: '300'
  }
})

