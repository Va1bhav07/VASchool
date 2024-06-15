import KeywordsSlider from '../../../components/KeywordsSlider';
import { topCompaniesData } from './topCompaniesData';

const companiesData = [...topCompaniesData, ...topCompaniesData];

function TopCompanies() {
  return (
    <section className="align-items-center bg-dark-subtle">
      <h1 className="fw-bold p-4 mt-4 mb-3 mb-md-4 text-center">
        Top Companies Where Our Students Work
      </h1>
      <div className="overflow-hidden mb-3">
        <KeywordsSlider duration="50s" direction="normal" space={4}>
          {companiesData.map((data, ind) => (
            <div key={ind} className="d-flex align-items-center">
              <img src={data.src} alt={data.name} width={100} height={'auto'} />
            </div>
          ))}
        </KeywordsSlider>
      </div>
    </section>
  );
}

export default TopCompanies;
