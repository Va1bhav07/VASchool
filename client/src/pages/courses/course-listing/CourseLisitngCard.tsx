import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import type { CourseDetailsProps } from '../../../shared.types';
import { useCartHandler } from '../../../hooks/useCartHandler';
import { IoMdStar, IoMdHeartEmpty } from 'react-icons/io';
import {
  MdOutlineRemoveShoppingCart,
  MdOutlineShoppingCart,
} from 'react-icons/md';
import type { RootState } from '../../../services/reducers/rootReducer';
import { useMemo } from 'react';

type CourseLisitngCardProps = {
  course: CourseDetailsProps;
};

export function CourseLisitngCard({ course }: CourseLisitngCardProps) {
  const navigate = useNavigate();
  const { handleAddToCart, handleRemoveFromCart } = useCartHandler();
  const cartReducer = useSelector(({ cartReducer }: RootState) => cartReducer);
  const { cartInfo = {} } = cartReducer;

  const isItemInCart = useMemo(
    () => cartInfo?.courses?.includes(course._id),
    [cartInfo?.courses, course._id]
  );

  const handleDetails = (id: string) => {
    navigate('/course-details/' + id);
  };

  const handleCartAction = (course: CourseDetailsProps) => {
    isItemInCart ? handleRemoveFromCart(course) : handleAddToCart(course);
  };

  return (
    <Card
      border="0"
      className="shadow bg-body-tertiary h-100 pointer-hover mx-4 mx-sm-0">
      <Card.Img
        variant="top"
        src={course.thumbnail}
        role="button"
        onClick={() => handleDetails(course._id)}
        style={{ maxHeight: '176px' }}
      />
      <Card.Body className="p-4">
        <div className="d-flex justify-content-between mb-3">
          <Badge className="bg-info-soft">{course.level}</Badge>
          <IoMdHeartEmpty role="button" size={14} />
        </div>

        <Card.Title
          className="mb-2 fs-6 lh-base"
          role="button"
          onClick={() => handleDetails(course._id)}>
          {course.title}
        </Card.Title>
        <small className="text-muted fs-12">By: {course.author}</small>
        <div className="lh-1 mt-3 d-flex align-items-center gap-1 fs-14">
          <span>
            {Array.from({ length: 5 }).map((_, ind) => (
              <IoMdStar key={ind} className="text-warning" size={14} />
            ))}
          </span>
          <span className="text-warning">4.5</span>
          <span className="text-muted">(9,300)</span>
        </div>
        {/* <Card.Text className="text-truncate">{course.description}</Card.Text> */}
      </Card.Body>
      <Card.Footer className="py-3 px-4 ">
        <Row className="align-items-center g-0">
          <Col>
            <h5 className="mb-0 fs-6">${course.price}</h5>
          </Col>

          <Col
            xs="auto"
            className="d-flex align-items-center gap-1"
            role="button"
            onClick={() => handleCartAction(course)}>
            {!isItemInCart ? (
              <>
                <MdOutlineShoppingCart className="text-success" /> Add to cart
              </>
            ) : (
              <>
                <MdOutlineRemoveShoppingCart className="text-danger" /> Remove
                from cart
              </>
            )}
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}
