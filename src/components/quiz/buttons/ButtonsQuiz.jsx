import { BtnQuiz } from './ButtonsQuiz.styled';

export const ButtonsQuiz = ({ buttons, click }) => {
  return buttons.map(item => {
    const [one, two] = item.split(/\s*(?=\()/);

    return (
      <BtnQuiz key={item} onClick={() => click(item)} type="button">
        <>
          {one}
          <br />
          {two}
        </>
      </BtnQuiz>
    );
  });
};
