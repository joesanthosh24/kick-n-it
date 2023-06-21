import { useParams } from "react-router-dom";

import ShoeImage from "../../assets/images/shoe_image.webp";

import {
  Card,
  CardContent,
  CardDescription,
  CardImage,
  CardTitle,
  ColorCircle,
  ColorCircleContainer,
  ColorSelection,
  FilterText,
  Filters,
  Price,
  ProductsContainer,
  ShoesPageContainer,
  AddToCartButton,
} from "./shoes-page.styles";

import Filter from "../../components/filter/filter.component";

const ShoesPage = () => {
  return (
    <ShoesPageContainer>
      <Filters>
        <FilterText>Filters</FilterText>
        <Filter
          filterName="Price"
          filterType="slider"
          options={{
            min: 10,
            max: 400,
          }}
        />
        <Filter filterName="Color" filterType="checkbox" />
      </Filters>
      <ProductsContainer>
        <Card>
          <div>
            <CardImage src={ShoeImage} />
          </div>
          <CardContent>
            <CardTitle>Jordan 6 rings</CardTitle>
            <CardDescription>Men's gym Red/White/Black</CardDescription>
          </CardContent>
          <ColorSelection>
            <p>Colour: </p>
            <ColorCircleContainer>
              <ColorCircle backgroundColor="black"></ColorCircle>
              <ColorCircle backgroundColor="gray"></ColorCircle>
              <ColorCircle backgroundColor="red"></ColorCircle>
              <ColorCircle backgroundColor="blue"></ColorCircle>
            </ColorCircleContainer>
            <Price>
              <p>$ 134.00</p>
            </Price>
          </ColorSelection>
          <AddToCartButton>
            <p>Add To Cart</p>
          </AddToCartButton>
        </Card>
      </ProductsContainer>
    </ShoesPageContainer>
  );
};

export default ShoesPage;
