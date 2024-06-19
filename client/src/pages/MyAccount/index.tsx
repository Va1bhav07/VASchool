import { ColorModeScript } from '@chakra-ui/react';
// import { Outlet } from 'react-router-dom';
import Main from './Layout';
import theme from './Theme';
import { ChakraProvider } from '@chakra-ui/react';

function MyAccount() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
      </ChakraProvider>
    </>
  );
}

export default MyAccount;
