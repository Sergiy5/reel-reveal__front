import { NavLink } from 'react-router-dom';
import { SvgStyled } from "./MainLogo.styled"


export const MainLogo = () => {
    return (
        <NavLink to={''}>
            <SvgStyled />
        </NavLink>
    )
}