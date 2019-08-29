import React, { Suspense } from 'react';

import Header from '~/components/Header';
import Loader from '~/components/Loader';
import Menu from '~/components/Menu';

import Routes from '~/routes/app';

import { Container, Content, Main } from './styles';

export default function Application() {
  return (
    <Container id="container">
      <Menu />
      <Content id="main">
        <Header />
        <Main>
          <Suspense fallback={<Loader />}>
            <Routes />
          </Suspense>
        </Main>
      </Content>
    </Container>
  );
}
