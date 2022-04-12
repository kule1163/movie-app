import * as React from "react";
import {
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";
import type { LinkProps, PathMatch } from "react-router-dom";
import styled from "styled-components"


interface StyledLinkProps {
    match: PathMatch<string> | null
}
const StyledLink = styled(Link)<StyledLinkProps>`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: ${props => props.match ? "blue" : "white"}
}
`
const CustomLink = ({children, to, ...props}:LinkProps) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
        <div>
            <StyledLink
                match={match}
                to={to}
                {...props}
                >
                {children}
            </StyledLink>
            {/* {match && "(active)"} */}
      </div>
  )
}

export default CustomLink