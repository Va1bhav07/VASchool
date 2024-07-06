import { Card, Image, Flex } from '@chakra-ui/react';
import type { CourseDetailsProps } from '../../../../shared.types';
import { CardBodyComp } from './CardBodyComp';
import { CardActions } from './CardActions';

type CourseCardProps = {
  courseDetails: CourseDetailsProps;
  onCourseDelete?: (id: string) => void;
  myCourse?: boolean;
};

export function CourseCard({
  courseDetails,
  onCourseDelete,
  myCourse,
}: CourseCardProps) {
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

      <CardActions
        price={price}
        id={_id}
        onCourseDelete={onCourseDelete}
        myCourse={myCourse}
      />
    </Card>
  );
}
