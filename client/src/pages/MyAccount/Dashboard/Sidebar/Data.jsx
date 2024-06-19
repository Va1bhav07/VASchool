import { Box, Text, VStack, Flex } from '@chakra-ui/react';

const list = [
  {
    id: 1,
    name: 'My Courses',
    value: 3,
    color: 'yellow',
  },
  {
    id: 3,
    name: 'Available Courses',
    value: 6,
    color: 'cadet',
  },
];

function Data() {
  return (
    <VStack>
      {list.map((item, ind) => (
        <Box
          key={item.id}
          w="full"
          py={3}
          borderBottomWidth={list.length === ind + 1 ? 0 : 1}
          borderColor="brand.light">
          <Flex align="center" justify="center" direction="column">
            <Text color="brand.dark">{item.name}</Text>
            <Text color={`brand.${item.color}`} fontWeight="bold">
              {item.value}
            </Text>
          </Flex>
        </Box>
      ))}
    </VStack>
  );
}

export default Data;
