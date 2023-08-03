import styled from 'styled-components';
import bg_image from '../../images/bg-image.jpg';

export const Box = styled.main`
  height: calc(100vh - 156px);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-image: url(${bg_image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #000;
`;

export const Title = styled.h1`
  margin-top: 25px;

  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  color: gray;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: gray;
`;
