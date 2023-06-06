import { styled } from "styled-components";

export const HomeContainer = styled.div`
  height: 100%;
  background-color: #00051d;
  width: 100vw;
  color: #fff;
`;

export const ImageTextContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  align-items: center;
  top: 50%;
`;

export const LandingImage = styled.img`
  height: 400px;
  width: 400px;
  transform: rotate(30deg);
`;

export const LandingPageTextContainer = styled.div`

`;

export const PageTitle = styled.h1`
  font-size: 40px;
`;

export const PageDescription = styled.p`
  text-align: center;
`;

export const ShopNowButton = styled.button`
  background-color: #4d69ff;
  padding: 10px 15px;
  margin-top: 20px;
  border: none;
  border-radius: 20px;
  color: #fff;

  &:hover {
    background-color: #fbbb42;
    cursor: pointer;
  }
`;
