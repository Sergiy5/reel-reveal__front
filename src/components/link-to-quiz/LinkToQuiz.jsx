import { NavLink } from 'react-router-dom';
import { SharedStyledLinkBtn } from 'styles';
import { LinkToQuizWrapper } from './LinkToQuiz.styled';
import useResize from 'utils/useResize';

export const LinkToQuiz = () => {
  const viewWidth = useResize();

  const responsiveWidth = viewWidth > 768 ?  "249px" : '343px'

  return (
    <LinkToQuizWrapper>
      {viewWidth > 768 ? <h2>Take Our Quiz!</h2> : null}
      <SharedStyledLinkBtn as={NavLink} to="#" $width={responsiveWidth}>
        take a quiz
      </SharedStyledLinkBtn>
    </LinkToQuizWrapper>
  );
};
