import { Container } from '@chakra-ui/layout'
import Content from './Content/Content.jsx'
import Sidebar from './Sidebar/Sidebar.jsx'
import {useSelector} from 'react-redux'

export default function Main() {
  const {userData} = useSelector((state) => state.authReducer);
  return (
    <Container display={{ base: 'block', md: 'flex' }} maxW="container.xl">
      <Sidebar userData={userData}/>
      <Content userData={userData}/>
    </Container>
  )
}
