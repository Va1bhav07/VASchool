import './keywordsSlider.css';

type KeywordsSliderProps = {
  data: string[];
  className?: string;
};
function KeywordsSlider({ data, className }: KeywordsSliderProps): JSX.Element {
  return (
    <div className={`loop-slider ${className || ''}`}>
      {data.map((val) => (
        <div className="inner" key={val}>
          <div className="tag">
            {val}
           
          </div>
        </div>
      ))}
    </div>
  );
}

export default KeywordsSlider;
