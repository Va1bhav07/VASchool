import { Box } from '@chakra-ui/react'

import Actions from './Actions.jsx'
import Data from './Data.jsx'
import Profile from './Profile.jsx'

function Sidebar({userData}) {
  return (
    <Box
      as="aside"
      flex={1}
      mr={{ base: 0, md: 5 }}
      mb={{ base: 5, md: 0 }}
      bg="white"
      rounded="md"
      borderWidth={1}
      borderColor="brand.light"
      style={{ transform: 'translateY(-100px)' }}
    >
      <Profile userData={userData}/>
      <Data />
      <Actions />
    </Box>
  )
}

export default Sidebar
