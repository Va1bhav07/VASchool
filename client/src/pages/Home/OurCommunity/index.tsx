import { communityData } from './community';
import './community.css';

function OurCommunity(): JSX.Element {
  return (
    <section className="d-flex flex-column align-items-center mb-3">
      <h1 className="fw-bold p-4 mt-4 mb-3 mb-md-4 text-center">
        Our Community
      </h1>
      <div className="d-flex flex-column flex-lg-row shadow rounded-3 bg-body-tertiary scale-effect mb-5">
        {communityData.map((data, ind) => {
          const CardSvg = data.img;
          return (
            <div
              key={ind}
              className={`px-5 py-4 mb-0 stat ${ind === 1 ? 'border-start border-end' : ' border-0'}`}>
              <div className="fs-5">{data.title}</div>

              <div className="fw-bold fs-1 lh-1">{data.number}</div>
              <div className="stat-svg">
                <CardSvg fontSize={'48px'} size={60} />
              </div>
              <div>
                <div className="fs-6">{data.text}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default OurCommunity;
