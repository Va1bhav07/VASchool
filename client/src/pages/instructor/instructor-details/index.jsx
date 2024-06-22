import React, { useEffect, useState } from 'react';
import CardComp from '../../../components/Cards';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
// import axios from 'axios';

const dummyData = {
  image:
    'https://img.freepik.com/free-photo/man-green-shirt-having-his-arms-crossed_23-2148401380.jpg?w=360&t=st=1709525483~exp=1709526083~hmac=6cbd1c93c97370340157b29964e6f09d236e2deff9a22faa4283a532c15485be',
  name: 'Sam Taylor',
  about:
    'Instructor is the title for an individual responsible for teaching students in a particular subject area. Instructors teach courses in their area of expertise and develop an instructional plan and assignments to be administered to students. Instructors may have teaching and research responsibilities at school.',
};

function InstructorDetails() {
  const [instructorDetails, setInstructorDetails] = useState({
    image: '',
    name: '',
    about: '',
  });

  useEffect(() => {
    setInstructorDetails(dummyData);
  }, []);
  //   const getInstructorDetails = () => {
  //     const url = "http://localhost:4000/instructor/1";
  //     axios
  //       .get(url)
  //       .then(function (response) {
  //         console.log(response);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //         // filling dummy data
  //         setInstructorDetails(dummyData);
  //       });
  //   };
  //   getInstructorDetails();
  return (
    <section className="d-flex justify-content-center align-items-center">
      <CardComp className="mt-2 card-course p-1">
        <Card.Title className="text-center fs-2 mb-4">
          About instructor
        </Card.Title>
        <Row>
          <Col lg="3">
            <Image src={instructorDetails.image} thumbnail />
          </Col>
          <Col lg="9">
            <h3>Name: {instructorDetails.name} </h3>
            <p>
              <strong>Details:</strong> {instructorDetails.about}
            </p>
            <Button type="submit">Contact this instructor</Button>
          </Col>
        </Row>
      </CardComp>
    </section>
  );
}

export default InstructorDetails;
