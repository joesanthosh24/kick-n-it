import { useParams } from "react-router-dom";

import {
  Filters,
  ProductsContainer,
  ShoesPageContainer,
} from "./shoes-page.styles";

import Filter from "../../components/filter/filter.component";

const ShoesPage = () => {
  return (
    <ShoesPageContainer>
      <Filters>
        <Filter filterName="Price" filterType="slider" />
        <Filter filterName="Color" />
      </Filters>
      <ProductsContainer></ProductsContainer>
    </ShoesPageContainer>
  );
};

export default ShoesPage;
