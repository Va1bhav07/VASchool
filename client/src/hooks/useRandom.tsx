type RandomProps = {
  min: number;
  max: number;
};

type ShuffleArrayProps = {
  data: string[];
};

export function useRandom() {
  const getRandomInt = ({ min, max }: RandomProps): number => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const shuffleArray = ({ data = [] }: ShuffleArrayProps) =>
    [...data].sort(() => 0.5 - Math.random());

  return {
    getRandomInt,
    shuffleArray,
  };
}
