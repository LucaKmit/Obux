import React from 'react';
import { Text, Image, Button } from 'react-native';
import Hr from "react-native-hr-component";
import { Input } from 'react-native-elements';

import logo from '../../assets/LOGO.png';

import { Container } from './styles';

export default function Login() {
  return (
    <Container>
      <Image 
        source={ logo }
        style={{ width: 200, height: 200}}
      />
      <Input placeholder='E-mail' />
      <Input placeholder='Senha' />
      <Text>{'\n'}</Text>
      <Button title='                  Logar                  ' />
      <Text>{'\n'}</Text>
      <Hr lineColor="white" width={1} text="Não tem uma conta?" textStyles={{ color: 'white' }} />
      <Text>{'\n'}</Text>
      <Button title='      Registre-se Agora      ' />
    </Container>

  );
}
