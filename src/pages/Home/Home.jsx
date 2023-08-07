import { Box, Title, Text, TextBox } from './Home.styled';

export default function Home() {
  return (
    <Box>
      <Title>Welcome to Phonebook</Title>
      <TextBox>
        <Text>
          This cool application can help you to keep and easy manage your
          contacts. Try it now for free!
        </Text>
      </TextBox>
    </Box>
  );
}
