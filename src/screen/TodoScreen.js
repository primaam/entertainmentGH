import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {addTodo, removeTodo} from '../redux/action/todo';
import {connect} from 'react-redux';

class TodoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
    };
  }

  render() {
    return (
      <View style={{marginTop: 20, padding: 20}}>
        <Text style={{fontWeight: 'bold', textAlign: 'center'}}>TODO</Text>

        {this.props.todos.map((item, index) => (
          <View key={index}>
            <Text>
              {item.id + 1}. {item.text} --{' '}
              {item.completed ? 'DONE' : 'IN PROGRESS'}
            </Text>

            <Button
              onPress={() => this.props.removeTodo(item.text)}
              title="DELETE"
              color="#444"
            />
          </View>
        ))}

        <View style={{marginTop: 20}}>
          <TextInput
            placeholder="Type new task here"
            onChangeText={(text) => this.setState({newTodo: text})}
            style={{backgroundColor: '#ffffff', padding: 10, marginBottom: 10}}
          />
          <Button
            onPress={() => this.props.addTodo(this.state.newTodo)}
            title="ADD TO DO"></Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text)),
  removeTodo: (text) => dispatch(removeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoScreen);
