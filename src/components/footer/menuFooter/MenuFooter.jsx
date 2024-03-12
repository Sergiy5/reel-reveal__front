import { Link } from "react-router-dom";
import { ItemStyled, ListMenuStyled } from "./MenuFooter.styled";

export const MenuFootr = () => {
    return (
      <ListMenuStyled>
        <Link>
          <ItemStyled>How it works</ItemStyled>
        </Link>
        <Link>
          <ItemStyled>Take a quiz</ItemStyled>
        </Link>
        <Link>
          <ItemStyled>Movie search</ItemStyled>
        </Link>
        <Link>
          <ItemStyled>Login</ItemStyled>
        </Link>
      </ListMenuStyled>
    );
}