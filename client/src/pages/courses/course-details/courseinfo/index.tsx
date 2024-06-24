import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { CourseImage } from './CourseImage';
import { CourseBuy } from './CourseBuy';
import { courseData } from './courseData';

import type { CourseDetailsProps } from '../../../../shared.types';

type CourseInfoProps = {
  courseDetails: CourseDetailsProps;
};

export function CourseInfo({ courseDetails }: CourseInfoProps) {
  const { thumbnail, title, price, description } = courseDetails;
  return (
    <Row xs={1} md={2} className="my-5">
      <Col>
        <h2>{title} 🚀</h2>
        <p>From Zero to Hero 🔥</p>
        <div>
          {courseData.map((data, ind) => (
            <p className="m-0 fs-5" key={ind}>
              {data}
            </p>
          ))}
        </div>
        <br />
        <CourseBuy price={price} />
      </Col>
      <Col>
        <CourseImage courseImg={thumbnail} />
        <p className="my-3">{description}</p>
      </Col>
    </Row>
  );
}
