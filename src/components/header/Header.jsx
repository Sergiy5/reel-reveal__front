// import { LogoHeader } from "components/logo/Logo";
import { MainLogo } from "components/mainLogo/MainLogo";
import { WrapperHeader } from "./Header.styled";
import { HeaderSearchBar } from "./headerInput/HeaderSearchBar";

const Header = () => {
  return (
    <WrapperHeader>
      <MainLogo />
      <HeaderSearchBar/>
    </WrapperHeader>
  );
};

export default Header;
