import React from 'react';
import { Text, Image, Button } from 'react-native';
import { Input } from 'react-native-elements';
import logo from '../../assets/LOGO.png';
import { Container } from './styles';

export default function Register({ navigation }) {

  const handleLoginClick = () => {
    navigation.navigate('Login');
  };
  
  return (
    <Container>     
      <Image 
        source={ logo }
        style={{ width: 150, height: 150}}
      />
      <Text>{'\n'}</Text>
      <Input placeholder='📧  E-mail' />
      <Input placeholder='🎉  Data Do Nascimento' />
      <Input placeholder='📱  Telefone' />
      <Input placeholder='📄  CPF' />
      <Input placeholder='🌇  CEP' />
      <Input placeholder='📍  Estado' />

      <Input placeholder='🔒  Senha' secureTextEntry={true} />
      <Input placeholder='🔒  Confirme a Sua Senha' secureTextEntry={true} />
      
      <Text>{'\n'}</Text>
      <Button title='                  Registrar                  '  onPress={handleLoginClick}/>
     
    </Container>

  );
 }

