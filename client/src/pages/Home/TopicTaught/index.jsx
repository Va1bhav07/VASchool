import React, { useEffect, useState } from 'react';
import KeywordsSlider from '../../../components/KeywordsSlider';
import { topics } from './topics';
import { useRandom } from '../../../hooks/useRandom';
import './TopicTaught.css';

function TopicTaught() {
  const { getRandomInt, shuffleArray } = useRandom();
  // const randomInt = getRandomInt({ min: 3000, max: 40000 });
  const [durations, setDurations] = useState(null);
  const [shuffledKeywords, setShuffledKeywords] = useState(null);

  useEffect(() => {
    const durationArray = Array.from({ length: 5 }, () =>
      getRandomInt({ min: 30000, max: 40000 })
    );

    const shuffledArray = Array.from({ length: 5 }, () => {
      const keywordArr = shuffleArray({ data: topics }).slice(0, 10);
      return [...keywordArr, ...keywordArr];
    });

    setDurations(durationArray);
    setShuffledKeywords(shuffledArray);
  }, []);

  if (!durations || !shuffledKeywords) {
    return null;
  }

  return (
    <section className="py-lg-5 d-flex flex-column align-items-center bg-dark-subtle">
      <header className="m-3 text-center">
        <h1 className="display-5 fw-bold">200+ topics taught...</h1>
        <p className="text-body-tertiary">
          Begin your learning journey with us today!
        </p>
      </header>
      <div
        className="py-4 w-75 d-flex flex-column gap-3 overflow-hidden tag-list"
        style={{ maxWidth: '90vw' }}>
        {shuffledKeywords.map((shuffledKeyword, index) => (
          <KeywordsSlider
            key={index}
            data={shuffledKeyword}
            duration={`${durations[index]}ms`}
            direction={`${index % 2 ? 'reverse' : 'normal'}`}
          />
        ))}
      </div>
    </section>
  );
}

export default TopicTaught;
