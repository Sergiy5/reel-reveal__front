import { useState } from 'react'
import {HeaderSearchBarStyled, WrapperSearchBar} from './HeaderInput.styled' 
import { SearchBarIcon } from './SearchBarIcon'


const textPlaceHolder = 'search by movie, actor, genre, etc'

export const HeaderSearchBar = () => {
    const [isFocus, setIsFocus] = useState(true)
    console.log(isFocus)
    
  
    return (
        <WrapperSearchBar>
            <HeaderSearchBarStyled type='text' onBlur={() => {
                setIsFocus(!isFocus)
      }} onFocus={() => {
                setIsFocus(!isFocus)
                }} placeholder={textPlaceHolder} />
            {/* <FiSearch color='green'/> */}
            <SearchBarIcon color='green' $focus={isFocus} />
      </WrapperSearchBar>
    )
}