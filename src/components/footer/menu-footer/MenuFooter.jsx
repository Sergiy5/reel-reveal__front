import { ItemStyled, ListMenuStyled } from './MenuFooter.styled';
import { SharedNavLink } from 'components/shared-nav_link/SharedNavLink';

export const MenuFooter = () => {
  return (
    <ListMenuStyled>
      <ItemStyled>
        <SharedNavLink linlTo={''}>How it works</SharedNavLink>
      </ItemStyled>
      <ItemStyled>
        <SharedNavLink linlTo={''}>Take a quiz</SharedNavLink>
      </ItemStyled>
      <ItemStyled>
        <SharedNavLink linlTo={''}>Movie search</SharedNavLink>
      </ItemStyled>
      <ItemStyled>
        <SharedNavLink linlTo={''}>Login</SharedNavLink>
      </ItemStyled>
    </ListMenuStyled>
  );
};
