import { useState } from 'react'
import {BtnSearchBar, FiSearchStyled, HeaderInputStyled, WrapperSearchBar} from './HeaderSearchBar.styled' 


const textPlaceHolder = 'search by movie, actor, genre, etc'

export const HeaderSearchBar = () => {
    const [isFocus, setIsFocus] = useState(false)
  
    return (
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
          <FiSearchStyled size="24px" $focus={isFocus} />
        </BtnSearchBar>
      </WrapperSearchBar>
    );
}