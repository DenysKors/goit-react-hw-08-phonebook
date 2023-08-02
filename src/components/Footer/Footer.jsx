import { FooterWrapper, Text, StyledLink } from './Footer.styled';

import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <FooterWrapper>
      <Text>
        &copy; 2023{' '}
        <StyledLink to="https://github.com/DenysKors" target="_blank">
          DenKors <GitHubIcon />
        </StyledLink>
      </Text>
    </FooterWrapper>
  );
};

export default Footer;
