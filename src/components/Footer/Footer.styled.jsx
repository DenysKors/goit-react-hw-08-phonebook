import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const FooterWrapper = styled.footer`
  padding-bottom: 6px;
  min-height: 81px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  background-color: #1976d2;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #fff;
`;

export const StyledLink = styled(NavLink)`
  display: inline-flex;
  align-items: flex-end;
  gap: 4px;
  color: #fff;
  &:hover {
    color: #000e8b;
  }
`;
