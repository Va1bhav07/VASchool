import {
  Box,
  Flex,
  Button,
  // useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import MenuComp from './MenuComp';
import { Image } from '@chakra-ui/react';
import VAS from '../../../../../assets/svg/VAS.svg';
import VASG from '../../../../../assets/svg/VAS/VAS-green.svg';
import { Link } from 'react-router-dom';

// interface Props {
//   children: React.ReactNode;
// }

// const NavLink = (props: Props) => {
//   const { children } = props;

//   return (
//     <Box
//       as="a"
//       px={2}
//       py={1}
//       rounded={'md'}
//       _hover={{
//         textDecoration: 'none',
//         bg: useColorModeValue('gray.200', 'gray.700'),
//       }}
//       href={'#'}>
//       {children}
//     </Box>
//   );
// };

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      bg={useColorModeValue('gray.100', 'brand.900')}
      px={3}
      py={'1px'}
      borderBottomWidth={1}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box as={Link} to="/">
          <Image
            src={colorMode === 'light' ? VASG : VAS}
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
  );
}
