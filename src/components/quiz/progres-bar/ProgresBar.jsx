import { BarWrapper, Circle } from './ProgresBar.styled';

export const ProgresBar = ({ page }) => {
  const barArray = [1, 2, 3, 4, 5, 6, 7];
// const page =8
  return (
    <BarWrapper>
      {barArray.map(bar => {
        const color = bar <= page ? 'true' : undefined;

        const bg = bar < page ? 'true' : undefined;

        return <Circle key={bar} $bg={bg} color={color} />;
      })}
    </BarWrapper>
  );
};
