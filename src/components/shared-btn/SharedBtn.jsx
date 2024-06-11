import { useRef } from 'react';
import { SharedBtnStyled } from './SharedBtn.styled';

export const SharedBtn = ({ children, width, height,
$textColor,
border,
$bgColor
}) => {

  const navLinkRef = useRef(null);
  
  const handleClick = () => {
    if (navLinkRef.current) {
      navLinkRef.current.blur();
    }
  };
  return (
    <>
      <SharedBtnStyled
        ref={navLinkRef}
        onClick={handleClick}
        $width={width}
        $height={height}
        $textColor={$textColor}
        $border={border}
        $bgColor={$bgColor}
      >
        {' '}
        {children}{' '}
      </SharedBtnStyled>
    </>
  );
};
