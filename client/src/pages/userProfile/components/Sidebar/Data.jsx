import { Box, Text, VStack } from '@chakra-ui/react';

const list = [
  {
    id: 1,
    name: 'Pending Courses',
    value: 3,
    color: 'yellow',
  },
  {
    id: 2,
    name: 'Courses Completd',
    value: 6,
    color: 'green',
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
    <VStack as="ul" spacing={0} listStyleType="none">
      {list.map((item) => (
        <Box
          key={item.id}
          as="li"
          w="full"
          py={3}
          px={5}
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          borderBottomWidth={1}
          borderColor="brand.light">
          <Text color="brand.dark">{item.name}</Text>
          <Text color={`brand.${item.color}`} fontWeight="bold">
            {item.value}
          </Text>
        </Box>
      ))}
    </VStack>
  );
}

export default Data;
