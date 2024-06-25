import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { CourseImage } from './CourseImage';
import { CourseBuy } from './CourseBuy';
import { courseData } from './courseData';
import { useCartHandler } from '../../../../hooks/useCartHandler';

import type { CourseDetailsProps } from '../../../../shared.types';
import './courseInfo.css';

type CourseInfoProps = {
  courseDetails: CourseDetailsProps;
};

export function CourseInfo({ courseDetails }: CourseInfoProps) {
  const { thumbnail, title, price, description } = courseDetails;
  const { handleAddToCart } = useCartHandler();

  const onAddToCart = () => {
    handleAddToCart(courseDetails);
  };

  return (
    <Row
      xs={1}
      md={2}
      className="my-3 my-md-5 flex-column-reverse flex-md-row align-items-center align-items-md-stretch ">
      <Col className="course-details-data mt-4 mt-lg-0">
        <div className="text-center text-md-start">
          <h1 className="fs-5 course-heading">{title} 🚀</h1>
          <p>From Zero to Hero 🔥</p>
        </div>
        <div>
          {courseData.map((data, ind) => (
            <p className="m-0 fs-5" key={ind}>
              {data}
            </p>
          ))}
        </div>
        <p className="my-3">{description}</p>
        <br />
        <CourseBuy price={price} onAddToCart={onAddToCart} />
      </Col>
      <Col xs={9} md={6}>
        <CourseImage courseImg={thumbnail} />
      </Col>
    </Row>
  );
}
