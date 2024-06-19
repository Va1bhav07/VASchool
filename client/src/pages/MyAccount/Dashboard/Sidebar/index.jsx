import { Box, useColorModeValue } from '@chakra-ui/react';

// import Actions from './Actions.jsx';
import Data from './Data.jsx';
import Profile from './Profile.jsx';

function Sidebar({ userData }) {
  return (
    <Box
      display={{ base: 'none', md: 'block' }}
      as="aside"
      flex={1}
      rounded="md"
      bg={useColorModeValue('gray.100', 'brand.700')}>
      <Profile userData={userData} />
      <Data />
      {/* <Actions /> */}
    </Box>
  );
}

export default Sidebar;
