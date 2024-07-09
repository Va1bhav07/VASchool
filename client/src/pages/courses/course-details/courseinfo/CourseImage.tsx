import Image from 'react-bootstrap/Image';

type CourseImage = {
  courseImg: string;
};

export function CourseImage({ courseImg }: CourseImage) {
  return (
    <div className="w-100 text-center">
      <Image src={courseImg} className="img-fluid" />
    </div>
  );
}
