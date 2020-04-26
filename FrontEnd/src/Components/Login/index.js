import React from 'react';
import { Image } from 'react-native';
import Hr from "react-native-hr-component";

import Button from '../Button';
import Input from '../Input';

import logo from '../../assets/LOGO.png';

import { Container, Form } from './styles';

export default function Login({ navigation }) {
  const handleRegisterClick = () => {
    navigation.navigate('Register');
  };
  return (
    <Container>
      <Form>
        <Image 
          source={ logo }
          style={{ width: 200, height: 200}}
        />
        <Input placeholder='E-mail' placeholderTextColor="white" />
        <Input placeholder='Senha' secureTextEntry={true} placeholderTextColor="white" />
        <Button marginY={20} color="blue" width={200} height={40} >Logar</Button>
        <Hr lineColor="white" width={1} text="Não possui uma conta?" textStyles={{ color: "white" }} />
        <Button marginY={20} color="blue" width={200} height={40} onPress={handleRegisterClick} >Registrar</Button>
      </Form>
    </Container>

  );
}