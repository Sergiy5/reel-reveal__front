import { NavLink } from 'react-router-dom';
import { SharedStyledLinkBtn } from 'styles';
import { LinkToQuizWrapper } from './LinkToQuiz.styled';

export const LinkToQuiz = () => {
  return (
      <LinkToQuizWrapper>
      <h2>Take Our Quiz!</h2>
      <SharedStyledLinkBtn as={NavLink} to="#" $width="249px">
        take a quiz
      </SharedStyledLinkBtn>
      
      </LinkToQuizWrapper>
  );
};
