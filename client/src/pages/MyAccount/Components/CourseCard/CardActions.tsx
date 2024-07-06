import { CardFooter } from '@chakra-ui/react';
import { InstructorActions } from './InstructorActions';
import { StudentActions } from './StudentActions';

type CardActionsProps = {
  id: string;
  price: number;
  onCourseDelete?: (id: string) => void;
  myCourse?: boolean;
};

export function CardActions({
  id,
  price,
  myCourse,
  onCourseDelete,
}: CardActionsProps) {
  return (
    <CardFooter
      flex={1}
      borderStartWidth={{ base: 0, md: 1 }}
      justifyContent="space-between"
      flexDirection="column">
      {myCourse ? (
        <StudentActions />
      ) : (
        <InstructorActions
          id={id}
          price={price}
          onCourseDelete={onCourseDelete}
        />
      )}
    </CardFooter>
  );
}
