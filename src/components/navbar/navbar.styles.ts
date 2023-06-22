import { styled } from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Navbar = styled.div`
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  position: fixed;
  background-color: #181818;
`;

export const Title = styled.h1`
  margin-left: 20px;
  font-family: 'Roboto', sans-serif;
  padding: 3px;
  color: #fff;
  cursor: pointer;
`

export const Links = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 100px;
`

export const Link = styled(RouterLink)`
  padding-top: 10px;
  padding-bottom: 10px;
  margin: auto 20px;
  transition: border-bottom 0.2s, border-color 0.2s, color 0.2s;
  cursor: pointer;
  color: #fff;
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid #000;
    border-color: #6463ef;
    color: #6463ef
  }
`;

export const ShoppingCartLink = styled(RouterLink)`
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  color: #ff;
  margin-left: 40px;
  text-decoration: none;
  position: relative;

  &:hover {
    border: none;
  }
`;

export const ShoppingCartIcon = styled.i`
  color: #fff;
  font-size: 30px;
`;

export const CartItems = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 100%;
  background-color: #db0f2e;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  font-size: 10px;
  color: #fff;
  bottom: 29px;
  left: 29px;
`;
