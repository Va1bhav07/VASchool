import { CSSProperties } from 'react';
import './keywordsSlider.css';

type KeywordsSliderProps = {
  data?: string[];
  className?: string;
  duration: string;
  direction?: string;
};
function KeywordsSlider({
  data = [],
  className,
  duration,
  direction,
}: KeywordsSliderProps): JSX.Element {
  return (
    <div
      className={`loop-slider ${className || ''}`}
      style={
        { '--duration': duration, '--direction': direction } as CSSProperties
      }>
      <div className="d-flex gap-3 inner">
        {data.map((val, ind) => (
          <div
            key={ind}
            className="shadow rounded p-2 bg-body-secondary d-flex align-items-center tag">
            {val}
          </div>
        ))}
      </div>
    </div>
  );
}

export default KeywordsSlider;
