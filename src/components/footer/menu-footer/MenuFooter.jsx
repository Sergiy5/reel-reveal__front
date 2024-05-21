import { ItemStyled, ListMenuStyled } from './MenuFooter.styled';
import { NavLinkStyled } from '../list-social/ListSocial.styled';

export const MenuFootr = () => {
  return (
    <ListMenuStyled>
      <ItemStyled>
        <NavLinkStyled>How it works</NavLinkStyled>
      </ItemStyled>
      <ItemStyled>
        <NavLinkStyled>Take a quiz</NavLinkStyled>
      </ItemStyled>
      <ItemStyled>
        <NavLinkStyled>Movie search</NavLinkStyled>
      </ItemStyled>
      <ItemStyled>
        <NavLinkStyled>Login</NavLinkStyled>
      </ItemStyled>
    </ListMenuStyled>
  );
};
