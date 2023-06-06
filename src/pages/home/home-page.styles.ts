import { styled } from "styled-components";

export const HomeContainer = styled.div`
  height: 100%;
  background-color: #f5f5f5;
  width: 100vw;
`;

export const ImageTextContainer = styled.div`
  position: relative;
`;

export const LandingImage = styled.img`
  color: #2e332f;
  height: 400px;
  width: 400px;
  transform: rotate(30deg);
  position: relative;
  left: -100px;
  top: 150px;
`;

export const LandingPageTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
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
    background-color: #282923;
    cursor: pointer;
  }
`;
