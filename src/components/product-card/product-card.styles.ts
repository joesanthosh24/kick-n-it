import styled from 'styled-components';

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
  font-family: "Roboto", sans-serif;
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
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "gray"};
  border-radius: 50%;
  margin-left: 5px;
  cursor: pointer;
`;

export const Price = styled.div`
  margin-left: auto;

  > p {
    color: #8d8a8c;
  }
`;

export const AddToCartButton = styled.div`
  width: 100%;
  height: 35px;
  border-radius: 17px;
  background-color: #acde49;
  cursor: pointer;

  > p {
    text-align: center;
    padding: 8px;
  }
`;
