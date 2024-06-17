import CardComp from '../../../components/Cards';
import Button from 'react-bootstrap/Button';
import gift from '../../../assets/img/gift.png';
import ribbion from '../../../assets/img/ribbon.png';
import { FaGift } from 'react-icons/fa';
import './giftCourse.css';

function GiftCourse() {
  return (
    <section className="align-items-center">
      <h1 className="fw-bold p-4 mt-4 mb-3 mb-md-4 text-center">
        Gift a Course
      </h1>
      <CardComp
        border="0"
        className="shadow bg-body-tertiary mx-auto rounded-4 mb-4 custom-width gift-card p-4 position-relative">
        <img
          src={ribbion}
          alt="Gift"
          width={400}
          height={400}
          className="position-absolute top-0 start-0 ribbon"
        />

        <div className="d-flex flex-column-reverse gap-2 flex-lg-row gap-lg-4 align-items-center">
          <div className="d-flex flex-column justify-content-center">
            <p className="fs-lg-5 text-center text-lg-start">
              Now you can gift your favourite courses to your loved ones ❤️
            </p>

            <Button variant="success rounded-pill fw-bold py-3 px-5 d-flex align-items-center justify-content-center gap-2 mx-auto ms-lg-0">
              <FaGift size={20} /> GIFT A COURSE
            </Button>
          </div>
          <img
            src={gift}
            alt="Gift"
            width={400}
            height={400}
            className="gift-boxes"
          />
        </div>
      </CardComp>
    </section>
  );
}

export default GiftCourse;
