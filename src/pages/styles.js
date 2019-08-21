import styled from 'styled-components';

import { images } from '~/styles';

export const Container = styled.div`
  background-color: rgba(39, 39, 39, 0.1);
  background-image: url(${images.pattern});
  background-repeat: repeat;
  background-size: contain;
  height: 100vh;
`;

export const Content = styled.main`
  width: 100%;
  max-width: 1366px;
  display: flex;
  flex: 1 1 0%;
  margin: auto;
  padding: 30px;
`;
