import { StyledSearchBlock } from './style'

export function SearchBlock() : JSX.Element {

    return(
        <StyledSearchBlock encType="multipart/form-data" method='post'>
            <input type='text' placeholder='Что вы ищите...?' name='search'/>
        </StyledSearchBlock>
    )
}