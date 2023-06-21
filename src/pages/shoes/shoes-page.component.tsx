import ShoeImage from "../../assets/images/shoe_image.webp";
import ShoeImage2 from "../../assets/images/shoe_image2.webp";

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
        <Filter
          filterName="Color"
          filterType="colors"
          options={{
            values: [
              "red",
              "green",
              "orange",
              "blue",
              "violet",
              "purple",
              "black",
              "yellow",
              "pink",
              "crimson",
              "brown"
            ],
          }}
        />
      </Filters>
      <ProductsContainer>
        <Card
          image={ShoeImage}
          title="Jordan 6 rings"
          description="Men's gym Red/White/Black"
          circleColors={["black", "gray", "red", "blue"]}
          price="134.99"
        />
        <Card
          image={ShoeImage2}
          title="Jordan Jumpman Trey 2"
          description="Men's Black/Red/White"
          circleColors={["black", "blue", "gray"]}
          price="134.99"
        />
      </ProductsContainer>
    </ShoesPageContainer>
  );
};

export default ShoesPage;
