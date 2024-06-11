import { useRef } from "react";
import { SharedNavLinkStyled } from "./SharedNavLink.styled";

export const SharedNavLink = ({ children, href, target, rel }) => {
    
    const navLinkRef = useRef(null);
     
     const handleClick = () => {
       if (navLinkRef.current) {
         navLinkRef.current.blur();
       }
     };

    return (
      <SharedNavLinkStyled
        to={href}
        target={target}
        rel={rel}
        ref={navLinkRef}
        onClick={handleClick}
      >
        {children}
      </SharedNavLinkStyled>
    );
}