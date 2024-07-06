import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

import Error404 from '../../assets/img/404-error.png';
import { Link } from 'react-router-dom';

export function Page404() {
  return (
    <Container className="text-center m-auto">
      <Image src={Error404} fluid />
      <h3 className="mt-3">
        <strong>Uh oh!</strong>
      </h3>
      <h5>Looks like you got lost.</h5>
      <Link
        to="/course-listing"
        className="btn btn-success cart-btn-transform m-3">
        Continue Courses
      </Link>
    </Container>
  );
}
