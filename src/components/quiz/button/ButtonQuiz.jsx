import { BtnQuiz } from './ButtonQuiz.styled';

export const ButtonQuiz = ({ buttons, click, isActive }) => {
  return buttons.map(item => {
    // To prettie text in button to devide strings
    const [first, second] = item.split(/\s*(?=\()/);

    return (
      <BtnQuiz
        key={item}
        onClick={() => click(item)}
        $isActiv={isActive}
        disabled={isActive}
        type="button"
      >
        <p>
          {first}
          <br />
          {second}
        </p>
      </BtnQuiz>
    );
  });
};
