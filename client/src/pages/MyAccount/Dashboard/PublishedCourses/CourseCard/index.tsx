import {
  Card,
  Image,
  VStack,
  CardFooter,
  Button,
  Text,
  Flex,
} from '@chakra-ui/react';
import type { CourseDetailsProps } from '../../../../../shared.types';
import { CardBodyComp } from './CardBodyComp';
import { Link } from 'react-router-dom';

type CourseCardProps = {
  courseDetails: CourseDetailsProps;
  onCourseDelete: (id: string) => void;
};

export function CourseCard({ courseDetails, onCourseDelete }: CourseCardProps) {
  const { _id, title, thumbnail, price } = courseDetails;
  return (
    <Card
      direction={{ base: 'column', md: 'row' }}
      variant="outline"
      bg={'transparent'}
      borderWidth={0}
      //   borderWidth={0}
    >
      <Flex direction={{ base: 'column', sm: 'row' }} flex={3}>
        <Image
          objectFit="cover"
          maxW={{ base: '100%', md: '200px' }}
          boxSize={{ base: 'none', sm: '150px' }}
          src={thumbnail}
          alt={title}
          flex={1}
          mb={{ base: 5, sm: 0 }}
        />

        <CardBodyComp courseDetails={courseDetails} />
      </Flex>

      <CardFooter
        flex={1}
        borderStartWidth={{ base: 0, md: 1 }}
        // p={0}
        // alignItems="center"
        justifyContent="space-between"
        flexDirection="column">
        <Text mb={2} fontSize="sm">
          <Text as="b" fontSize="2xl">
            $ {price}
          </Text>
        </Text>
        <VStack>
          <Button
            as={Link}
            to={`/course-details/${_id}`}
            variant="solid"
            colorScheme="green"
            w={'full'}>
            Details
          </Button>
          <Button
            onClick={() => onCourseDelete(_id)}
            variant="outline"
            colorScheme="red"
            w={'full'}>
            Delete
          </Button>
        </VStack>
      </CardFooter>
    </Card>
  );
}
