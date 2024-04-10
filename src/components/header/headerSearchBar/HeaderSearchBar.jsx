import { useState } from 'react'
import {HeaderInputStyled, WrapperSearchBar} from './HeaderSearchBar.styled' 
import { SearchBarIcon } from './SearchBarIcon'


const textPlaceHolder = 'search by movie, actor, genre, etc'

export const HeaderSearchBar = () => {
    const [isFocus, setIsFocus] = useState(true)
    
  
    return (
        <WrapperSearchBar>
            <HeaderInputStyled type='text' onBlur={() => {
                setIsFocus(!isFocus)
      }} onFocus={() => {
                setIsFocus(!isFocus)
                }} placeholder={textPlaceHolder} />
            <SearchBarIcon color='green' $focus={isFocus} />
      </WrapperSearchBar>
    )
}