import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQs = () => {
  return (
    <Accordion defaultActiveKey="0" className="mt-4">
      <Accordion.Item eventKey="0">
        <Accordion.Header> What is EduFlex?</Accordion.Header>
        <Accordion.Body>
          EduFlex is an innovative online learning platform designed to provide
          users with a comprehensive and flexible learning experience. It offers
          a diverse range of courses spanning various subjects, including
          technology, business, arts, sciences, and more. EduFlex aims to
          empower learners of all ages and backgrounds to acquire new skills,
          expand their knowledge, and achieve their personal and professional
          goals.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> How do I enroll in a course?</Accordion.Header>
        <Accordion.Body>
          To enroll in a course, simply navigate to the course page and click on
          the "Enroll" button. Follow the prompts to complete the enrollment
          process.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          Can I access course materials offline?
        </Accordion.Header>
        <Accordion.Body>
          Yes, you can download course materials for offline access. Look for
          the download option next to each resource.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header> How do I contact support?</Accordion.Header>
        <Accordion.Body>
          You can contact support by emailing support@eduflex.com or by filling
          out the contact form on our website.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default FAQs;
