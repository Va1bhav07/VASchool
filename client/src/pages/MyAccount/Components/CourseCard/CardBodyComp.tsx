import { CardBody, Text, Heading, Flex } from '@chakra-ui/react';
import type { CourseDetailsProps } from '../../../../shared.types';

type CardBodyProps = {
  courseDetails: CourseDetailsProps;
};

export function CardBodyComp({ courseDetails }: CardBodyProps) {
  const { author, title, language, level, description, createdAt } =
    courseDetails;
  const date = new Date(createdAt);

  return (
    <CardBody
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      flex="2"
      py={0}>
      <Heading size="md">{title}</Heading>
      <Text mb="2" noOfLines={3} textOverflow="ellipsis">
        {description}
      </Text>
      <Text mb={2} fontSize="sm">
        <strong>Author:</strong> {author}
      </Text>
      <Flex justify="space-between" mt={1} mb={0} fontSize="sm">
        <Text>{language?.toUpperCase()}</Text>
        <Text>{level?.toUpperCase()}</Text>
        <Text>{new Date(date).toLocaleDateString()}</Text>
      </Flex>
    </CardBody>
  );
}
