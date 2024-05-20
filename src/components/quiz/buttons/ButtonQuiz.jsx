import { BtnQuiz } from './ButtonQuiz.styled';

export const ButtonQuiz = ({ buttons, click, isActiv }) => {
  return buttons.map(item => {
    // To prettie text in button to devide strings
    const [one, two] = item.split(/\s*(?=\()/);

    return (
      <BtnQuiz
        key={item}
        onClick={() => click(item)}
        $isActiv={isActiv}
        disabled={isActiv}
        type="button"
      >
        <>
          {one}
          <br />
          {two}
        </>
      </BtnQuiz>
    );
  });
};
