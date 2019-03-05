import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



import DisplayCalc from './components/DisplayCalc';
import ButtonCalc from './components/ButtonCalc';

const col1Buttons = [
  ['7', '8', '9'],
  ['4', '5', '6'],
  ['1', '2', '3'],
  [',', '0', '=']
]

const col2Button = ['C', '÷', 'x', '-', '+']

export default class App extends React.Component {

  state = {
    display: '',
    result: ''
  }

  handleOp = (op) => {

    if (op === 'C') {
      this.setState({ display: '' })
    }
    else if (op === '=') {
      this.setState({
        display: this.state.result,
        result: ''
      })
    } else {

      const display = this.state.display + op
      let result = this.state.result

      try {
        result = this.calculate(display, result);
      } catch (error) { }

      this.setState({ display, result })
    }
  }

  calculate(display, result) {
    let fixedOperation = display.split('x').join('*');
    fixedOperation = fixedOperation.split('÷').join('/');
    fixedOperation = fixedOperation.split(',').join('.');
    result = new String(eval(fixedOperation));
    return result;
  }

  render() {
    const { display, result } = this.state
    return (
      <View style={styles.container}>
        <DisplayCalc display={display} result={result} />
        <View style={styles.button}>
          <View style={styles.col1} >
            {
              col1Buttons.map((line, index) =>
                <View key={index} style={styles.line}>
                  {
                    line.map(op =>
                      <ButtonCalc key={op} operacao={op} buttonClick={this.handleOp} />)
                  }
                </View>)
            }
          </View>
          <View style={[styles.col2, styles.colorOpe]} >
            {
              col2Button.map(op =>
                <ButtonCalc key={op} operacao={op} buttonClick={this.handleOp} />)
            }
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  button: {
    flex: 5,
    flexDirection: 'row',
  },
  line: {
    flexDirection: 'row',
    flex: 1,
  },
  col1: {
    flex: 3,
    backgroundColor: 'black',
  },
  col2: {
    flex: 1,
  },
  colorOpe: {
    backgroundColor: 'orange',
  }
});

