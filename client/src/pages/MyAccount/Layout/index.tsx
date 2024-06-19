import { Container } from '@chakra-ui/layout';
import { useSelector } from 'react-redux';
import type { reducerProps } from '../../../shared.types';
import NavbarComp from '../Layout/Header/Navbar';

import Sidebar from '../Dashboard/Sidebar';
import Dashboard from '../Dashboard';

export default function Main() {
  const { userData } = useSelector(
    ({ authReducer }: reducerProps) => authReducer
  );
  console.log('authReducer :>> ', userData);
  return (
    <>
      <NavbarComp />
      <Container
        display={{ base: 'block', md: 'flex' }}
        as="main"
        gap={6}
        py={{ base: 5, md: 16 }}
        maxW="container.xl">
        <Sidebar userData={userData} />
        <Dashboard userData={userData} />
      </Container>
    </>
  );
}
