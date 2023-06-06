import { styled } from "styled-components";

export const Navbar = styled.div`
  background-color: #f5f5f5;
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  position: fixed;
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
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid #000;
  }
`
