import { styled } from "styled-components";

export const ShoesPageContainer = styled.div`
  background-color: #eef0f2;
  height: 100vh;
  color: #000;
  padding: 135px 55px 55px 55px;
  display: flex;
`;

export const FilterText = styled.h3`
  text-align: left;
  margin-bottom: 5px;
`;

export const Filters = styled.div`
  flex: 1;
  border: 1px solid #f4f4f4;
  background-color: transparent;
  margin-right: 5px;
`;

export const ProductsContainer = styled.div`
  flex: 5;
  background-color: transparent;
  margin-left: 5px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: lpx solid #ccc;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  max-width: 240px;
  margin: 10px;
  font-family: 'Roboto', sans-serif;
  padding: 18px;
`;

export const CardImage = styled.img`
  width: 70%;
  object-fit: scale-down;
`;

export const CardContent = styled.div`
  text-align: left;
`;

export const CardTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 2px;
`;

export const CardDescription = styled.p`
  font-size: 10px;
  margin-bottom: 0;
`;

export const ColorSelection = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin: 15px 0;
`;

export const ColorCircleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ColorCircle = styled.div`
  height: 12px;
  width: 12px;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : 'gray'};
  border-radius: 50%;
  margin-left: 5px;
  cursor: pointer;
`;
