import Cover from './components/Cover.jsx';
import Main from './components/Main.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './helpers';

const UserProfile = () => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Cover />
        <Main />
      </ChakraProvider>
    </>
  );
};

export default UserProfile;
