import {
  ListSocialStyled,
  ItemSvg,
} from './ListSocial.styled';
import { ReactComponent as FaceBookIcon } from '../../../assets/images/face-book.svg';
import { ReactComponent as InstagramIcon } from "../../../assets/images/instagram.svg";
import { ReactComponent as MailIcon } from '../../../assets/images/mail.svg';

export const ListSocial = () => {
    return (
      <ListSocialStyled>
        <a
          href="https://www.facebook.com/?locale=uk_UA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ItemSvg>
            <FaceBookIcon />
          </ItemSvg>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ItemSvg>
            <InstagramIcon />
          </ItemSvg>
        </a>
        <a
          href="https://www.gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ItemSvg>
            <MailIcon />
          </ItemSvg>
        </a>
      </ListSocialStyled>
    );
};
