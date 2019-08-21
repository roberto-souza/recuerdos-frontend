import React, { Suspense } from 'react';

import Header from '~/components/Header';
import Loader from '~/components/Loader';

import Routes from '~/routes/app';

import { Container, Content } from './styles';

export default function Application() {
  return (
    <Container>
      <Header />
      <Content>
        <Suspense fallback={<Loader />}>
          <Routes />
        </Suspense>
      </Content>
    </Container>
  );
}
