import { useState } from 'react'
import {BtnSearchBar, HeaderInputStyled, SvgSearchStyled, WrapperSearchBar} from './HeaderSearchBar.styled' 
import sprite from '../../../assets/images/svgSprite/sprite.svg'
import { useEffect } from 'react';

const textPlaceHolder = 'search by movie, actor, genre, etc'

export const HeaderSearchBar = ({ viewWidth }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isHiden, setIsHIden] = useState(false)

  useEffect(() => {
    if (viewWidth < 620) setIsHIden(true);
    if (viewWidth > 621) setIsHIden(false);
  }, [viewWidth])
  

  return (
    <>
      {isHiden ? (
        <SvgSearchStyled $focus={isFocus}>
          <use xlinkHref={`${sprite}#search-icon`} />
        </SvgSearchStyled>) : (
        <WrapperSearchBar>
          <HeaderInputStyled
            type="text"
            onBlur={() => {
              setIsFocus(false);
            }}
            onFocus={() => {
              setIsFocus(true);
            }}
            placeholder={textPlaceHolder}
          />
          <BtnSearchBar
            type="submit"
            onFocus={() => {
              setIsFocus(true);
            }}
            onBlur={() => {
              setIsFocus(false);
            }}
            $focus={isFocus}
          >
            <SvgSearchStyled $focus={isFocus}>
              <use xlinkHref={`${sprite}#search-icon`} />
            </SvgSearchStyled>
          </BtnSearchBar>
        </WrapperSearchBar>
      
      )}
    </>
  );
};