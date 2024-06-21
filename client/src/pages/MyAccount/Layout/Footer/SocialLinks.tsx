import { Flex, Link } from '@chakra-ui/react';
import { FiGithub, FiLinkedin, FiGlobe } from 'react-icons/fi';

const socialLinks = [
  { id: 1, icon: FiGlobe, url: 'https://va1bhav07.vercel.app/' },
  { id: 2, icon: FiGithub, url: 'https://github.com/Va1bhav07' },
  { id: 3, icon: FiLinkedin, url: 'https://www.linkedin.com/in/va1bhav07/' },
];

export const SocialLinks = () => {
  return (
    <Flex justifyContent={'center'}>
      {socialLinks.map((link) => {
        const IconComp = link.icon;
        return (
          <Link
            key={link.id}
            py={2}
            px={4}
            href={link.url}
            isExternal
            rel="noopener noreferrer">
            <IconComp />
          </Link>
        );
      })}
    </Flex>
  );
};
