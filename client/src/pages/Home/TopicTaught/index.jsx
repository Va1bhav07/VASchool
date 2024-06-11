import KeywordsSlider from '../../../components/KeywordsSlider';
import { topics } from './topics';
function TopicTaught() {
  return (
    <section className="mpt-2 pt-lg-5 text-center bg-dark-subtle">
      <header className="m-3">
        <h1>200+ topics taught...</h1>
        <p className="text-body-tertiary">
          Begin your learning journey with us today!
        </p>
      </header>
      <div className="tag-list">
        <KeywordsSlider data={topics} className="test" />
      </div>
    </section>
  );
}

export default TopicTaught;
