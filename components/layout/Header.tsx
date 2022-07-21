import Link from "next/link";
import styled from 'styled-components';
import Button from './Button';

const HeaderTag = styled.header`
  position: relative;
  z-index: ${props => props.theme.headerZIndex};
  display: flex;
  align-items: center;
  height: 100px;
`;

const LogoH1 = styled.a`
  font-family: 'Press Start 2P', cursive;
  font-size: 30px;
  &:hover {
   text-decoration: none;
  }
`;

const HeaderLink = styled.a`
  margin-left: auto;
  font-weight: bold;
`;

export default function Header() {
  return (
    <HeaderTag>
      <h1>
        <Link href={'/'} passHref>
          <LogoH1>STUDY WITH ME</LogoH1>
        </Link>
      </h1>
      <Link href={'/login'} passHref>
        <HeaderLink>로그인</HeaderLink>
      </Link>
    </HeaderTag>
  )
}