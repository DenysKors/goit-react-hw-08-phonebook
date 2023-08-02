import styled from 'styled-components';

export const Container = styled.main`
  padding: 64px 16px 0px 16px;

  margin: 0 auto;
  max-width: 444px;
  height: calc(100vh - 220px);

  @media screen and (min-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;
