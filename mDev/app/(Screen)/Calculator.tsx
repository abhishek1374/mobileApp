import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value: string) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    let calculatedResult = '';
    try {
      const [firstOperand, operator, secondOperand] = input.split(/([+\-*/])/);

      if (!firstOperand || !operator || !secondOperand) {
        setResult('Error');
        return;
      }

      const num1 = parseFloat(firstOperand);
      const num2 = parseFloat(secondOperand);

      switch (operator) {
        case '+':
          calculatedResult = (num1 + num2).toString();
          break;
        case '-':
          calculatedResult = (num1 - num2).toString();
          break;
        case '*':
          calculatedResult = (num1 * num2).toString();
          break;
        case '/':
          if (num2 === 0) {
            calculatedResult = 'Error: Div by 0';
          } else {
            calculatedResult = (num1 / num2).toString();
          }
          break;
        default:
          calculatedResult = 'Error';
          break;
      }

      setResult(calculatedResult);
      setInput('');
    } catch (e) {
      setResult('Error');
    }
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.input}>{input}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.buttons}>
        {['7', '8', '9', '/'].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
        {['4', '5', '6', '*'].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
        {['1', '2', '3', '-'].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
        {['0', '.', '=', '+'].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={item === '=' ? handleCalculate : () => handlePress(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.buttonClear} onPress={handleClear}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDelete} onPress={handleDelete}>
          <Text style={styles.buttonText}>DEL</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  display: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginBottom: 20,
    width: '90%',
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  input: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 24,
    color: '#666',
    marginTop: 10,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    justifyContent: 'space-between',
  },
  button: {
    width: '22%',
    height: 70,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  buttonClear: {
    width: '48%',
    height: 70,
    backgroundColor: '#ff6666',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    borderRadius: 10,
  },
  buttonDelete: {
    width: '48%',
    height: 70,
    backgroundColor: '#ffcc00',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    borderRadius: 10,
  },
});

export default Calculator;