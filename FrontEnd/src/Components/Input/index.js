import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  IconContainer,
  Input,
} from './styles';

export default function InputComponent({ icon, iconColor, ...rest }) {
   return (
    <Container>
        {icon && (
            <IconContainer>
                <Icon name={icon} color={iconColor || '#000'} size={16}/>
            </IconContainer>
        )}
        <Input {...rest} />
    </Container>
   );
}