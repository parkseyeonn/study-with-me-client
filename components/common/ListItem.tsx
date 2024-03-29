import {LiHTMLAttributes} from "react";
import styled from "styled-components";

interface Props extends LiHTMLAttributes<HTMLLIElement> {
}

const StyledLi = styled.li`
  padding: 20px;
  border-radius: 10px;
  box-shadow: ${props => props.theme.boxShadow};
  transition: .2s;
  cursor: pointer;
  &:hover {
     box-shadow: ${props => props.theme.hoverBoxShadow};
  }
`;

export function ListItem({children, ...props}: Props) {
    return(
        <StyledLi {...props}>
        {children}
        </StyledLi>
    )
}
