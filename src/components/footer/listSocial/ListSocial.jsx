import { Link } from "react-router-dom";
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
        <Link>
          <ItemSvg>
            <FaceBookIcon />
          </ItemSvg>
        </Link>
        <Link>
          <ItemSvg>
            <InstagramIcon />
          </ItemSvg>
        </Link>
        <Link>
          <ItemSvg><MailIcon/></ItemSvg>
        </Link>
      </ListSocialStyled>
    );
};
