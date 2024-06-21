import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Center,
} from '@chakra-ui/react';
import { menuItems } from './menuItems';
import { Link } from 'react-router-dom';

function MenuComp() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={'full'}
        variant={'link'}
        cursor={'pointer'}
        minW={0}>
        <Avatar
          size={'sm'}
          src={'https://api.dicebear.com/9.x/pixel-art/svg'}
        />
      </MenuButton>
      <MenuList alignItems={'center'}>
        <br />
        <Center>
          <Avatar
            size={'2xl'}
            src={'https://api.dicebear.com/9.x/pixel-art/svg'}
          />
        </Center>
        <br />
        <Center>
          <p>Username</p>
        </Center>
        <MenuDivider />
        {menuItems.map((item, ind) => (
          <MenuItem key={ind} as={Link} to={item.link}>
            {item.text}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default MenuComp;
