import React from 'react';
import { Link } from 'react-router-dom';

import { images } from '~/styles';

import { Container, Content, Logo, User, Name, Email } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <Link to="/">
          <Logo src={images.icon} alt="Recuerdos" />
        </Link>
        <User>
          <div>
            <Name>Roberto Souza</Name>
            <Email>robertopedrosodesouza@gmail.com</Email>
          </div>
          <img src={images.icon} alt="Roberto Souza" />
        </User>
      </Content>
    </Container>
  );
}
