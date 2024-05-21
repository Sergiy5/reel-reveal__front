import { useState } from 'react'
import {BtnSearchBar, HeaderInputStyled, SvgSearchStyled, WrapperSearchBar} from './HeaderSearchBar.styled' 
import sprite from '../../../assets/images/svg-sprite/sprite.svg'
import { useEffect } from 'react';
import useResize from 'utils/useResize';

const textPlaceHolder = 'search by movie, actor, genre, etc'

export const HeaderSearchBar = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [isHiden, setIsHIden] = useState(false)

const vievWidth = useResize()

  useEffect(() => {
    if (vievWidth <= 768) setIsHIden(true);
    if (vievWidth >= 769) setIsHIden(false);
  }, [vievWidth]);
  

  return (
    <>
      {isHiden ? null : (
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