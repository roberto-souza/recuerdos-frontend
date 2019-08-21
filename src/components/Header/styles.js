import styled from 'styled-components';
import { darken } from 'polished';

import { colors } from '~/styles';

export const Container = styled.header`
  background-color: ${colors.primary};
  color: ${colors.white};
  height: 80px;
  display: flex;
  justify-content: center;
  padding: 0 20px;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1366px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: 60px;
  width: 60px;
`;

export const User = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 10px;
  transition: background 0.3s;

  &:hover {
    background-color: ${darken(0.1, colors.primary)};
  }

  > div {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: center;
    margin-right: 20px;
  }

  img {
    border: 2px solid ${colors.white};
    border-radius: 50%;
    height: 55px;
    width: 55px;
  }
`;

export const Name = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const Email = styled.span`
  font-size: 12px;
  font-style: italic;
`;
