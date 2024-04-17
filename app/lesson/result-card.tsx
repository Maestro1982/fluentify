type Props = {
  variant: 'points' | 'hearts';
  value: number;
};

export const ResultCard = ({ variant, value }: Props) => {
  return <div>{variant}</div>;
};
