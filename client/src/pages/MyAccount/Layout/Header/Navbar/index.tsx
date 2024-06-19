import {
  Box,
  Flex,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import MenuComp from './MenuComp';
import { Image } from '@chakra-ui/react';
import logoImage from '../../../../../assets/svg/VAS.svg';

interface Props {
  children: React.ReactNode;
}

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  );
};

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        bg={useColorModeValue('gray.100', 'brand.900')}
        px={4}
        borderBottomWidth={1}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Image
              src={logoImage}
              alt="VASchool"
              height={10}
              //   objectFit="cover"
            />
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <FaMoon /> : <FaSun />}
              </Button>
              <MenuComp />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
