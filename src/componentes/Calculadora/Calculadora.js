import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";

import Button from "./Button";
import Display from "./Display";

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    op: null,
    values: [0, 0],
    indice: 0,
}

export default class Calculadora extends Component{

    state = {...initialState}
  
    clearDisplay = ()=> {
      this.setState({displayValue: '0'})
    }
    setDigit = digito => {
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

        if (digito === '.' && !clearDisplay && this.state.displayValue.includes('.')){
            return
        }

        const currentValue = clearDisplay ? '': this.state.displayValue
        const displayValue = currentValue + digito

      this.setState({displayValue, clearDisplay: false})

      if (digito !=='.'){
        const newValue = parseFloat(displayValue)
        const values = [...this.state.values]
        values[this.state.indice] = newValue
        this.setState({values})
      }

    }
    setOperation = op =>{
        if (this.state.indice === 0){
            this.setState({op, indice: 1, clearDisplay: true})
        }else{
            const equals = op === '='
            const values = [...this.state.values]
            try{
                values[0] = eval(`${values[0]} ${this.state.op} ${values[1]}`)
            }catch{
                values[0] = this.state.values[0]
            }
            values[1] = 0
            this.setState({
                displayValue: `${values[0]}`,
                op: equals ? null : op,
                clearDisplay: true,
                indice: equals ? 0: 1,
                values
            })
        }
  
    }

    render() {
      return (
  
          <View style={estilos.calculadora}>
            <Display value={this.state.displayValue}/>
            <View style={estilos.buttons}>
                <Button label='AC' triple onClick={() => this.clearDisplay()} />
                <Button label='/' op onClick={this.setOperation}/>
                <Button label='7' onClick={this.setDigit}/>
                <Button label='8' onClick={this.setDigit}/>
                <Button label='9' onClick={this.setDigit}/>
                <Button label='*' op onClick={this.setOperation}/>
                <Button label='4' onClick={this.setDigit}/>
                <Button label='5' onClick={this.setDigit}/>
                <Button label='6' onClick={this.setDigit}/>
                <Button label='-' op onClick={this.setOperation}/>
                <Button label='1' onClick={this.setDigit}/>
                <Button label='2' onClick={this.setDigit}/>
                <Button label='3' onClick={this.setDigit}/>
                <Button label='+' op onClick={this.setOperation}/>
                <Button label='0' double onClick={this.setDigit}/>
                <Button label='.' onClick={this.setDigit}/>
                <Button label='=' op onClick={this.setOperation}/>
  
            </View>
        </View>
    );        
  }
}

const estilos = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    fonte: {
      fontSize: 50,
    },
  
    calculadora:{
      flex: 1,
    },
  
    buttons: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  });