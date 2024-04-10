import { ListSocialStyled, Item, SvgStyled } from './ListSocial.styled';
import Sprite from '../../../assets/images/svgSprite/sprite.svg';

export const ListSocial = () => {
  return (
    <ListSocialStyled>
      <Item>
        <a
          href="https://www.facebook.com/?locale=uk_UA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgStyled >
            <use xlinkHref={`${Sprite}#icon-facebook`} />
          </SvgStyled>
          {/* <FaceBookIcon /> */}
        </a>
      </Item>
      <Item>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgStyled >
            <use xlinkHref={`${Sprite}#icon-instagram`} />
          </SvgStyled>
          {/* <InstagramIcon /> */}
        </a>
      </Item>
      <Item>
        <a
          href="https://www.gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgStyled >
            <use xlinkHref={`${Sprite}#icon-mail`} />
          </SvgStyled>
          {/* <MailIcon /> */}
        </a>
      </Item>
    </ListSocialStyled>
  );
};
