import styled from 'styled-components';
import bg_image from '../../images/bg-image.jpg';

export const Main = styled.main`
  height: calc(100vh - 156px);

  background-image: url(${bg_image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #000;
`;

export const Container = styled.main`
  padding: 64px 16px 0px 16px;

  margin: 0 auto;
  max-width: 444px;
  height: calc(100vh - 220px);

  @media screen and (min-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }

  & .MuiInputBase-root {
    background-color: #fff;
    opacity: 0.7;
  }
`;
