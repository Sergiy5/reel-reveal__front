import { useState } from 'react'
import {BtnSearchBar, FiSearchStyled, HeaderInputStyled, WrapperSearchBar} from './HeaderSearchBar.styled' 


const textPlaceHolder = 'search by movie, actor, genre, etc'

export const HeaderSearchBar = () => {
    const [isFocus, setIsFocus] = useState(true)
    console.log(isFocus);
  
    return (
      <WrapperSearchBar>
        <HeaderInputStyled
          type="text"
          onBlur={() => {
            setIsFocus(!isFocus);
          }}
          onFocus={() => {
            setIsFocus(!isFocus);
          }}
          placeholder={textPlaceHolder}
        />
        <BtnSearchBar
          type="submit"
          onFocus={() => {
            setIsFocus(!isFocus);
          }}
          onBlur={() => {
            setIsFocus(!isFocus);
          }}
          $focus={isFocus}
        >
          <FiSearchStyled size="24px" $focus={isFocus} />
        </BtnSearchBar>
      </WrapperSearchBar>
    );
}