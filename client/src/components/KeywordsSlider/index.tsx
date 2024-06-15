import { CSSProperties } from 'react';
import './keywordsSlider.css';

type KeywordsSliderProps = {
  children?: React.ReactNode;
  data?: string[];
  className?: string;
  space?: number;
  duration: string;
  direction: string;
};
function KeywordsSlider({
  children,
  data = [],
  space = 1,
  className,
  duration,
  direction,
}: KeywordsSliderProps): JSX.Element {
  return (
    <div
      className={`loop-slider ${className || ''}`}
      style={
        {
          '--duration': duration,
          '--direction': direction,
          '--space': `${space}rem`,
        } as CSSProperties
      }>
      <div className={`d-flex inner`}>
        {children ??
          data.map((val, ind) => (
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
