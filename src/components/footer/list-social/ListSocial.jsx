import { ListSocialStyled, Item, SvgStyled, NavLinkStyled } from './ListSocial.styled';
import Sprite from '../../../assets/images/svg-sprite/sprite.svg';

export const ListSocial = () => {
  return (
    <ListSocialStyled>
      <Item>
        <NavLinkStyled
          href="https://www.facebook.com/?locale=uk_UA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgStyled>
            <use xlinkHref={`${Sprite}#icon-facebook`} />
          </SvgStyled>
        </NavLinkStyled>
      </Item>
      <Item>
        <NavLinkStyled
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgStyled>
            <use xlinkHref={`${Sprite}#icon-instagram`} />
          </SvgStyled>
        </NavLinkStyled>
      </Item>
      <Item>
        <NavLinkStyled
          href="https://www.gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgStyled>
            <use xlinkHref={`${Sprite}#icon-mail`} />
          </SvgStyled>
        </NavLinkStyled>
      </Item>
    </ListSocialStyled>
  );
};
