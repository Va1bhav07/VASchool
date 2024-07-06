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
import { MdOutlineLogout } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../../../../../../services/actions/authActions';
import type { RootState } from '../../../../../../services/reducers/rootReducer';

function MenuComp() {
  const dispatch = useDispatch();
  const { userData } = useSelector(({ authReducer }: RootState) => authReducer);
  const { fullName = '' } = userData;

  const handleLogout = () => {
    dispatch(logoutAction());
  };

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
            name={fullName}
            src={'https://api.dicebear.com/9.x/pixel-art/svg'}
          />
        </Center>
        <br />
        <Center>
          <p>{fullName}</p>
        </Center>
        <MenuDivider />
        {menuItems.map((item, ind) => (
          <MenuItem key={ind} as={Link} to={item.link}>
            {item.text}
          </MenuItem>
        ))}
        <MenuItem
          justifyContent="space-between"
          alignItems="center"
          onClick={handleLogout}>
          Logout
          <MdOutlineLogout size={16} />
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default MenuComp;
