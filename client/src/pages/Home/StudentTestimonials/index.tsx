import CardComp from '../../../components/Cards';
import { studentTestimonialsData } from './studentTestimonialsData';
import Container from 'react-bootstrap/Container';
import './studentTestimonial.css';

function StudentTestimonials() {
  return (
    <section className="align-items-center">
      <h1 className="fw-bold p-4 mt-4 mb-3 mb-md-4 text-center">
        Our Student Testimonials
      </h1>
      <Container fluid={'md'} className="px-0">
        <div className="mb-5 d-flex overflow-x-scroll testimonial-container">
          {/* overflow-scroll flex-nowrap flex-md-wrap */}
          {studentTestimonialsData.map((student, ind) => {
            const Fig = student.linkedin;
            return (
              <CardComp
                key={ind}
                className="m-3 shadow bg-body-tertiary p-lg-2 flex-shrink-0 testimonial-card"
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
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default StudentTestimonials;

// <Row
// md={2}
// lg={3}
// className="g-md-4  overflow-scroll flex-nowrap flex-md-wrap">
// {/* overflow-scroll flex-nowrap flex-md-wrap */}
// {studentTestimonialsData.map((student, ind) => {
//   const Fig = student.linkedin;
//   return (
//     <Col key={ind}>
//       <CardComp
//         key={ind}
//         className="shadow bg-body-tertiary p-lg-2"
//         border="0">
//         <div className="d-flex justify-content-between">
//           <div className="d-flex gap-3">
//             <div>
//               <img
//                 src={student.img + ind}
//                 alt="student"
//                 className="rounded-circle"
//                 width={80}
//                 height={80}
//               />
//             </div>
//             <div>
//               <p className="m-0 h4">{student.name}</p>
//               <p className="m-0">{student.title}</p>
//               <p className="m-0 primary-text-color">
//                 {student.company}
//               </p>
//             </div>
//           </div>
//           <Fig size={36} />
//         </div>
//         <div>{student.desc}</div>
//       </CardComp>
//     </Col>
//   );
// })}
// </Row>
