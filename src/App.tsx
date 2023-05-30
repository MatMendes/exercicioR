import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import Simples from "./componentes/Simples";
import Frag from "./componentes/Frag";
import ParImpar from "./componentes/ParImpar";
import UsuarioLogado from "./componentes/UsuarioLogado";
import Familia from "./componentes/relacao/Familia";
import Membro from "./componentes/relacao/Membro";
import Botao from "./componentes/relacao/Botao";
import Contador from "./componentes/Contador";
import DigiteSeuNome from "./componentes/DigiteSeuNome";
import DimensoesFixas from "./componentes/DimensoesFixas";
import Mega from "./componentes/MegaSena/Mega";

import Button from "./componentes/Calculadora/Button";
import Display from "./componentes/Calculadora/Display";

export default class App extends Component{

  state = {
    displayValue: '0'
  }

  clearDisplay = ()=> {
    this.setState({displayValue: '0'})
  }
  setDigit = (digito:any) => {
    this.setState({displayValue: digito})
  }
  setOperation = (op:any) =>{

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
        

        {/*<View style={estilos.container}>
          {/*<Simples texto='Matheus'/> 
          {/*<Frag titulo="Cadastro" 
                subTitulo="Tela de Cadastro de Produto" /> 
            {/*<ParImpar numero={13}/>
            
            {/*<Familia>
                <Membro nome="Ana" sobreNome="Silva" />
                <Membro nome="José" sobreNome="Silva" />
              </Familia>*

          <UsuarioLogado usuario={ {nome:'teste', email:'teste@teste.com'} }/>
          <UsuarioLogado usuario={ {nome:'teste 2' } }/>
          <UsuarioLogado usuario={ {email:'teste@teste.com' } }/>
          <UsuarioLogado usuario={ null }/>
          <UsuarioLogado usuario={ {} }/>

          <Botao/>

          <Contador valorInical={50} />

              <DigiteSeuNome />
          <DimensoesFixas />

          <Mega qtdeNumeros={7} />

        </View>*/}

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