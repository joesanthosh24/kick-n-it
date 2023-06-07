import { useParams } from "react-router-dom";

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
      <ProductsContainer></ProductsContainer>
    </ShoesPageContainer>
  );
};

export default ShoesPage;
