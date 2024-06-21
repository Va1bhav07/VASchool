import { Flex, Box, Image, Link, useColorMode } from '@chakra-ui/react';
import VAS from '../../../../assets/svg/VAS.svg';
import VASG from '../../../../assets/svg/VAS/VAS-green.svg';
import { SocialLinks } from './SocialLinks';

function Footer() {
  const { colorMode } = useColorMode();

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      as="footer"
      py={4}
      alignItems={'center'}>
      <Box
        flex="1"
        textAlign="center"
        display={'flex'}
        mb={{ base: 4, md: 0 }}
        justifyContent={'center'}>
        <Image
          src={colorMode === 'light' ? VASG : VAS}
          alt="VASchool"
          height={10}
        />
      </Box>
      <Box flex="1" textAlign="center" px={4} py={2}>
        <Link href="https://va1bhav07.vercel.app/contact" target="_blank">
          Contact
        </Link>
      </Box>
      <Box flex="1">
        <SocialLinks />
      </Box>
    </Flex>
  );
}

export default Footer;
