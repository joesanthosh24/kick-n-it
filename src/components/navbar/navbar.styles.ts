import { styled } from "styled-components";

export const Navbar = styled.div`
  background-color: #2e332f;
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const Title = styled.h1`
  margin-left: 20px;
  font-family: 'Roboto', sans-serif;
  padding: 3px;
`

export const Links = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 100px;
`

export const Link = styled.a`
  padding-top: 10px;
  padding-bottom: 10px;
  margin: auto 20px;
  transition: border-bottom 0.2s;

  &:hover {
    border-bottom: 3px solid #fff;
    cursor: pointer;
  }
`
