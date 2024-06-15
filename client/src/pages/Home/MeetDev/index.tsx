import CardComp from '../../../components/Cards';
import Card from 'react-bootstrap/Card';
import { meetDevData } from './meetDevData';

function MeetDev() {
  const { img, name, title, desc, comment, namasteDevLink, links } =
    meetDevData;

  return (
    <section className="align-items-center">
      <h1 className="fw-bold p-4 mt-4 mb-3 mb-md-4 text-center">
        Meet The Developer
      </h1>
      <CardComp
        border="0"
        className="shadow bg-body-tertiary w-75 mx-auto mb-5">
        <div className="d-lg-flex align-items-center  gap-5 text-center text-lg-start">
          <div className="m-3 m-lg-0">
            <img
              src={img}
              className="rounded-4"
              alt="developer image"
              width={200}
              height={250}
            />
          </div>
          <div>
            <Card.Title className="fs-2">{name}</Card.Title>
            <Card.Subtitle className="mb-3">{title}</Card.Subtitle>
            <Card.Text>{desc}</Card.Text>
            <Card.Text>
              {comment}{' '}
              <a href={namasteDevLink.src} target="_blank">
                {namasteDevLink.title}
              </a>
            </Card.Text>

            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              {links.map((link) => {
                const Fig = link.fig;
                return (
                  <a href={link.src} target="_blank" className="text-white">
                    <Fig size={30} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </CardComp>
    </section>
  );
}

export default MeetDev;
