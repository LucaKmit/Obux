import React from 'react';
import { Text, Image } from 'react-native';
import logo from '../../assets/LOGO.png';
import { Container } from './styles';

import Button from '../Button';
import Input from '../Input';

import { 
  Form,
  Row,
  Column,
} from './styles';

export default function Register({ navigation }) {

  const handleLoginClick = () => {
    navigation.navigate('Login');
  };
  
  return (
    <Container>
      <Form>     
        <Image 
          source={ logo }
          style={{ width: 150, height: 150}}
        />

        <Input icon="account" iconColor="#fff" placeholder='UserName' placeholderTextColor="white" />
        <Input icon="email" iconColor="#fff" placeholder='E-mail' placeholderTextColor="white" />
        <Input icon="lock" iconColor="#fff" placeholder='Senha' secureTextEntry={true} placeholderTextColor="white" />
        <Input icon="lock-alert" iconColor="#fff" placeholder='Confirme a Sua Senha' secureTextEntry={true} placeholderTextColor="white" />
        <Input icon="account-card-details" iconColor="#fff" placeholder='CPF' placeholderTextColor="white" />
        <Input icon="calendar" iconColor="#fff" placeholder='Data Do Nascimento'placeholderTextColor="white"  />
        <Input icon="cellphone" iconColor="#fff" placeholder='Telefone' placeholderTextColor="white" />
        
        <Row>
          <Column>
            <Input icon="home" iconColor="#fff" placeholder='CEP' placeholderTextColor="white" />
          </Column>
          <Column fill=".6">
            <Input icon="city-variant" iconColor="#fff" placeholder='Estado' placeholderTextColor="white" maxLength={2} />
          </Column>
        </Row>
    
    
        <Button marginY={20} color="blue" width={200} height={40} onPress={handleLoginClick}>Registrar</Button>
      </Form>  
    </Container>

  );
 }

