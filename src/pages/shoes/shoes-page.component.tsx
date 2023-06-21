import ShoeImage from "../../assets/images/shoe_image.webp";

import Card from "../../components/product-card/product-card.component";

import {
  FilterText,
  Filters,
  ProductsContainer,
  ShoesPageContainer,
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
        <Card
          image={ShoeImage}
          title="Jordan 6 rings"
          description="Men's gym Red/White/Black"
          circleColors={["black", "gray", "red", "blue"]}
          price="134.00"
        />
      </ProductsContainer>
    </ShoesPageContainer>
  );
};

export default ShoesPage;
