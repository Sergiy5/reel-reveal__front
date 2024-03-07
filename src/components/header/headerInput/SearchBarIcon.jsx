import { WrapperSearchBarIcon } from "./HeaderInput.styled"
// import logoSearchBar from '../../images/logoSearchBar.svg';
import { FiSearch } from 'react-icons/fi';


export const SearchBarIcon = ({ $focus }) => {
    

    return (
        <WrapperSearchBarIcon type="submit" $focus={$focus}>
            <FiSearch size="24px" color={$focus ? "#20e8da": 'black'}/>
        </WrapperSearchBarIcon>
    )
}