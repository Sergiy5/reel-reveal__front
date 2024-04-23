import { NavLink } from 'react-router-dom';
import { Container } from 'styles';
import { SharedStyledLinkBtn } from 'styles';

export const LinkToQuiz = () => {
  return (
    <Container $height='40px'>
      <Container $row $center $absolute $z_index='1'>
        <h2>Take Our Quiz!</h2>
        <SharedStyledLinkBtn as={NavLink} to="#" $width="249px">
          take a quiz
        </SharedStyledLinkBtn>
      </Container>
    </Container>
  );
};
