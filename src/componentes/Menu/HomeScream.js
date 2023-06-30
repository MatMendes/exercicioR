import React from "react";
import {View, Button} from "react-native"
import Padrao from "../../estilo/Padrao";

const HomeScream = ({ navigation }) => {
    return(
        <View style={Padrao.center}>

            <Button
                title="Ir para Fragmentos"
                onPress={() => navigation.navigate("Frag")}
            />
            <Button
                title="Ir para Simples"
                onPress={() => navigation.navigate("Simples")}
            />
            <Button
                title="Ir para Par ou Impar"
                onPress={() => navigation.navigate("ParImpar")}
            />

            <Button 
                title="Ir para Tela About"
                onPress={() => navigation.navigate("AboutScream")}
            
            />

            <Button 
                title="Ir para Calculadora"
                onPress={() => navigation.navigate("Calculadora")}
            
            />
        </View>
    );
};

export default HomeScream;