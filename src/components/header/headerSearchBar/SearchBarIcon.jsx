import { BtnSearchBarIcon, FiSearchStyled} from "./HeaderSearchBar.styled"

export const SearchBarIcon = ({ $focus }) => {

    return (
        <BtnSearchBarIcon type="submit" $focus={$focus}>
            <FiSearchStyled  size='24px' $focus={ $focus} />
        </BtnSearchBarIcon>
    )
}