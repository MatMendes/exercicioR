
import React from "react";
import { Text, StyleSheet } from "react-native";
import Padrao from "../estilo/Padrao";


export default (props: any) =>
    <Text style={Padrao.ex}>Arrow 1: {props.texto}</Text>