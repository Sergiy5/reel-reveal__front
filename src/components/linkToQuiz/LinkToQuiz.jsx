import { NavLink } from 'react-router-dom';
import { Container } from 'styles';
import { SharedStyledLinkBtn } from 'styles';

export const LinkToQuiz = () => {
  return (
    <Container $row $center>
      <h2>Take Our Quiz!</h2>
      <SharedStyledLinkBtn as={NavLink} to="#" $width="249px">
        take a quiz
      </SharedStyledLinkBtn>
    </Container>
  );
};
