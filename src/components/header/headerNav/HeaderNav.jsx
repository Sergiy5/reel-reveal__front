import { AiOutlineUser } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import { NavLinkStyled, QuizBtn, WrapperNav } from "./HeaderNav.styled";

export const HeaderNav = () => {
    return (
        <WrapperNav>
            <NavLinkStyled>Movie search</NavLinkStyled>
            <NavLinkStyled>
            <GoHeart size="24px" />
            </NavLinkStyled>
            <NavLinkStyled>
            <AiOutlineUser size="24px" />
            </NavLinkStyled>
            <QuizBtn>take quiz</QuizBtn>

        </WrapperNav>
    )
}