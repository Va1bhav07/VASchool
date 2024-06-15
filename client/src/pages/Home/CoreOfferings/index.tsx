import CardComp from '../../../components/Cards';
import Card from 'react-bootstrap/Card';
import { offeringData } from './offeringsData';
import './coreOfferings.css';

function CoreOfferings() {
  return (
    <section className="align-items-center bg-dark-subtle">
      <h1 className="fw-bold p-4 mt-4 mb-3 mb-md-4 text-center">
        Core Offerings
      </h1>

      <div className="offerings-container mb-5">
        {offeringData.map((data, index) => {
          const Svg = data.fig;
          return (
            <CardComp
              key={index}
              border="0"
              className="bg-body-tertiary shadow scale-effect mx-3 m-lg-0">
              <div className="p-2">
                <div className="mb-3">
                  <Svg size={36} />
                </div>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.desc}</Card.Text>
              </div>
            </CardComp>
          );
        })}
      </div>
    </section>
  );
}

export default CoreOfferings;
