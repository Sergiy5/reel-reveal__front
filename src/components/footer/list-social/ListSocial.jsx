import { ListSocialStyled, Item, SvgStyled} from './ListSocial.styled';
import Sprite from '../../../assets/images/svg-sprite/sprite.svg';
import { SharedNavLink } from 'components/shared-nav_link/SharedNavLink';

export const ListSocial = () => {
  return (
    <ListSocialStyled>
      <Item>
        <SharedNavLink
          href="https://www.facebook.com/?locale=uk_UA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgStyled>
            <use xlinkHref={`${Sprite}#icon-facebook`} />
          </SvgStyled>
        </SharedNavLink>
      </Item>
      <Item>
        <SharedNavLink
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgStyled>
            <use xlinkHref={`${Sprite}#icon-instagram`} />
          </SvgStyled>
        </SharedNavLink>
      </Item>
      <Item>
        <SharedNavLink
          href="https://www.gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgStyled>
            <use xlinkHref={`${Sprite}#icon-mail`} />
          </SvgStyled>
        </SharedNavLink>
      </Item>
    </ListSocialStyled>
  );
};
