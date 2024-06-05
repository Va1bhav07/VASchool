import {
  Container,
  Row,
  Col,
  Button,
  Collapse,
  Image,
  Badge,
  Figure,
} from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import bannerImage from "../../../assets/img/banner.jpg";
import maleIcon from "../../../assets/img/icon-male.png";
import femaleIcon from "../../../assets/img/icon-female.png";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../index.css";

const HomeComp = ({
  cartDataLength,
  open,
  setOpen,
  // dummyData,
  courses,
  handleEnroll,
  handleAddToCart,
}) => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Image
            src={bannerImage}
            alt="Students Learning"
            fluid
            roundedCircle
          />
        </Row>
        <Row className="row-heading mt-4">
          <Row className="mt-4">
            <Col className="col-heading" md={{}}>
              <h1 className=" text-center headings-homepage">
                Elevate Your Learning, Enrich Your Life
              </h1>
            </Col>
          </Row>

          <Row className="mb-2">
            <Col className="col-heading">
              <p className="italic text-center col-new-course">
                <strong>
                  Welcome to EduFlex, inspiration and education collide. Enter
                  an enormous supply of educational content and observe how your
                  boundaries grow. Our platform provides engaging classes,
                  knowledgeable teachers, and interactive tools to pique your
                  interests and propel your achievement.
                </strong>
              </p>
            </Col>
          </Row>
        </Row>
        {/*Carousel section for courses*/}
        <Row className="mt-5 col-heading">
          <Col className="mt-4 mb-4">
            <Carousel
              data-bs-theme="light"
              controls={false}
              className="carousel-margin"
            >
              {
                /*dummyData.*/ courses.map((course, index) => (
                  <Carousel.Item
                    key={index}
                    interval={1000}
                    className="rounded"
                  >
                    <a href={`course-details/${course._id}`}>
                      <Image
                        // src={course.image_data}
                        src={course.thumbnail}
                        alt={`Course ${index + 1}`}
                        className="img-fluid w-100 rounded"
                      />
                    </a>
                  </Carousel.Item>
                ))
              }
            </Carousel>
          </Col>
        </Row>

        <Row className="mt-5 row-heading">
          <Col className=" col-heading mt-4">
            <h5 className="text-center headings-homepage mt-2 mb-2">
              Step into the Future of Education. Unlock New Doors of Knowledge.
              Ignite Your Curiosity with New Courses
            </h5>
          </Col>
        </Row>

        <Row className="mt-4 row-heading">
          <Col className="mt-4 mb-4">
            <Button
              variant="dark"
              size="lg"
              onClick={() => setOpen(!open)}
              aria-controls="collapse-courses"
              aria-expanded={open}
              as={Col}
              md={12}
              sm={12}
              xs={12}
            >
              Unveil our Latest Courses
            </Button>
          </Col>
        </Row>

        <Row>
          <Collapse in={open}>
            <Row className="mt-4 latest-courses">
              {
                /*dummyData.*/ courses.map((course, index) => (
                  <Col
                    key={index}
                    className="text-center col-new-courses mt-4 mb-4"
                    xs={12}
                    sm={11}
                    md={5}
                  >
                    <Row>
                      <Col>
                        <Badge pill className="mt-2 mb-2">
                          NEW!
                        </Badge>
                      </Col>
                    </Row>
                    <Figure className="mt-1">
                      <Figure.Image
                        alt={course.title}
                        // src={course.image_data}
                        src={course.thumbnail}
                        width={"400px"}
                        rounded
                      />
                      <Figure.Caption>
                        <h6>{course.title}</h6>
                        {/* <p className="italic">{course.short_description}</p> */}
                        <p className="italic">{course.description}</p>
                        <p className="">
                          <strong>Author: </strong>
                          {course.author}
                        </p>
                        <h6>
                          Price: $<strong>{course.price}</strong>
                        </h6>
                        <Row className="justify-content-center">
                          <Col md={6} className="mb-1">
                            <Button
                              variant="info"
                              href={`course-details/${course._id}`}
                              className="w-100"
                            >
                              Details
                            </Button>
                          </Col>
                          <Col md={6}>
                            <Button
                              variant="success"
                              className="w-100"
                              key={index}
                              onClick={() => handleEnroll(course)}
                            >
                              Enroll
                            </Button>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Button
                              variant="outline-primary"
                              onClick={() => {
                                handleAddToCart(course);
                              }}
                              as={Col}
                              xs={12}
                            >
                              <FaCartPlus className="" /> Add to Cart
                            </Button>
                          </Col>
                        </Row>
                      </Figure.Caption>
                    </Figure>
                  </Col>
                ))
              }
            </Row>
          </Collapse>
        </Row>

        <Row className="">
          <Col xs={12} sm={6} className="mt-4">
            <Button
              variant="secondary"
              size="lg"
              as={Link}
              to="/cart"
              className="w-100"
            >
              View Cart ({cartDataLength})
            </Button>
          </Col>
          <Col xs={12} sm={6} className="mt-4">
            <Button
              variant="secondary"
              size="lg"
              as={Link}
              to="/course-listing"
              className="w-100"
            >
              Browse all courses
            </Button>
          </Col>
        </Row>

        <Row className="mt-4 latest">
          <Col>
            <h2 className="headings-homepage">Testimonials</h2>
          </Col>
        </Row>

        <Row className="latest-courses justify-content-center mt-4">
          <Col className="text-center col-testimonial mt-4 mb-4" xs={12} md={3}>
            <Figure className="mt-3">
              <Figure.Image
                alt="person icon"
                src={maleIcon}
                width={"100px"}
                height={"100px"}
              />
              <Figure.Caption>
                <h5>Thilakh</h5>
                <h6 className="italic">IT professional</h6>
                <p className="italic">
                  For me, taking classes with EduFlex has changed everything. I
                  balanced a busy schedule with my pursuits. I'm grateful to
                  EduFlex for enabling me to do new things!
                </p>
              </Figure.Caption>
            </Figure>
          </Col>

          <Col className="text-center col-testimonial mt-4 mb-4" xs={12} md={3}>
            <Figure className="mt-3">
              <Figure.Image
                alt="person icon"
                src={maleIcon}
                width={"100px"}
                height={"100px"}
              />
              <Figure.Caption>
                <h5>Sanjay</h5>
                <h6 className="italic">Business Analyst</h6>
                <p className="italic">
                  Although I was apprehensive about taking an online course. The
                  community engagement is unmatched, the professors are
                  competent, and the courses are captivating. EduFlex far
                  surpassed my expectations. In a few months, I've learned more
                  than I have in years of conventional schooling.
                </p>
              </Figure.Caption>
            </Figure>
          </Col>

          <Col className="text-center col-testimonial mt-4 mb-4" xs={12} md={3}>
            <Figure className="mt-3">
              <Figure.Image
                alt="person icon"
                src={femaleIcon}
                width={"100px"}
                height={"100px"}
              />
              <Figure.Caption>
                <h5>Dhruva</h5>
                <h6 className="italic">UI/UX designer</h6>
                <p className="italic">
                  I've experimented with a lot of onlinelearning environments as
                  an avid learner, but none line EduFlex. Learning is made
                  enjoyable by rich content and the intuitive UI. I rely on
                  EduFlex to deliver ecellent instruction, whether I'm learning
                  a new skill or developing my career.
                </p>
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeComp;
