import { VStack, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

type InstructorActionsProps = {
  id: string;
  price: number;
  onCourseDelete?: (id: string) => void;
};

export function InstructorActions({
  price,
  id,
  onCourseDelete,
}: InstructorActionsProps) {
  return (
    <>
      <Text mb={2} fontSize="sm">
        <Text as="b" fontSize="2xl">
          $ {price}
        </Text>
      </Text>
      <VStack>
        <Button
          as={Link}
          to={`/course-details/${id}`}
          variant="solid"
          colorScheme="green"
          w={'full'}>
          Details
        </Button>
        <Button
          onClick={() => onCourseDelete?.(id)}
          variant="outline"
          colorScheme="red"
          w={'full'}>
          Delete
        </Button>
      </VStack>
    </>
  );
}

export default InstructorActions;
