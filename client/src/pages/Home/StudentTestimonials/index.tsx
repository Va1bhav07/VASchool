import CardComp from '../../../components/Cards';
import { studentTestimonialsData } from './studentTestimonialsData';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function StudentTestimonials() {
  return (
    <section className="align-items-center">
      <h1 className="fw-bold p-4 mt-4 mb-3 mb-md-4 text-center">
        Our Student Testimonials
      </h1>
      <Container>
        <Row md={2} lg={3} className="g-4 m-5">
          {studentTestimonialsData.map((student, ind) => {
            const Fig = student.linkedin;
            return (
              <Col key={ind}>
                <CardComp
                  key={ind}
                  className="shadow bg-body-tertiary p-lg-2"
                  border="0">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex gap-3">
                      <div>
                        <img
                          src={student.img + ind}
                          alt="student"
                          className="rounded-circle"
                          width={80}
                          height={80}
                        />
                      </div>
                      <div>
                        <p className="m-0 h4">{student.name}</p>
                        <p className="m-0">{student.title}</p>
                        <p className="m-0 primary-text-color">
                          {student.company}
                        </p>
                      </div>
                    </div>
                    <Fig size={36} />
                  </div>
                  <div>{student.desc}</div>
                </CardComp>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default StudentTestimonials;
