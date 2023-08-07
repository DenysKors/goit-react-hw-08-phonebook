import styled, { keyframes } from 'styled-components';
import bg_image from '../../images/bg-image.jpg';

const textFocus = keyframes`  0% {
  -webkit-filter: blur(12px);
  filter: blur(12px);
  opacity: 0;
}

100% {
  -webkit-filter: blur(0px);
  filter: blur(0px);
  opacity: 1;
}`;

const textJump = keyframes`
 0% {
transform: translateY(350px);
  opacity: 0;
}

100% {
  transform: translateY(10px);
  opacity: 1;
}
`;

export const Box = styled.main`
  height: calc(100vh - 156px);

  position: relative;

  background-image: url(${bg_image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #000;
`;

export const Title = styled.h1`
  position: absolute;
  top: 30%;
  left: 50%;

  font-size: 26px;
  font-weight: 700;
  text-transform: uppercase;
  color: gray;

  transform: translate(-50%, -50%);

  animation: ${textFocus} 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;

  @media screen and (min-width: 1200px) {
    font-size: 36px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: gray;

  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const TextBox = styled.div`
  position: absolute;
  top: 50%;
  left: calc(100vw / 2 - 275px);

  max-width: 550px;

  animation: ${textJump} 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards;
`;
