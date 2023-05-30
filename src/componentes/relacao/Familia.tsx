import React from "react";
import { Text } from "react-native";
import Padrao from "../../estilo/Padrao";

export default (props: any) => {
  return (
    <>

        <Text style={Padrao.txtG}>Membros da Família</Text>
        {props.children}


        {/*<Membro nome="Ana" sobreNome="Silva" />
        <Membro nome="José" sobreNome="Silva" />*/}
    </>
  )
}