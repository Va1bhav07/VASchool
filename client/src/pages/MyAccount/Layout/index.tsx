import React from 'react';
import { Container, Flex } from '@chakra-ui/layout';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../services/reducers/rootReducer';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

import { Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';

const Sidebar = React.lazy(() => import('../Dashboard/Sidebar'));
const Dashboard = React.lazy(() => import('../Dashboard/'));

export default function Main() {
  const { userData } = useSelector(({ authReducer }: RootState) => authReducer);
  return (
    <Flex direction={'column'} minH={'100vh'}>
      <Header />
      <Container
        display={{ base: 'block', md: 'flex' }}
        flex={1}
        as="main"
        gap={6}
        py={{ base: 5, md: 9 }}
        justifyContent={'center'}
        maxW="container.xl">
        <Suspense fallback={<Spinner alignSelf={'center'} />}>
          <Sidebar userData={userData} />
          <Dashboard userData={userData} />
        </Suspense>
      </Container>
      <Footer />
    </Flex>
  );
}
