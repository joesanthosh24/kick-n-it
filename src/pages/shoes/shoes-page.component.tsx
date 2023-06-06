import { useParams } from 'react-router-dom';

import { ShoesPageContainer } from "./shoes-page.styles";

const ShoesPage = () => {
  const { shoeBrand } = useParams();

  return <ShoesPageContainer>Shoes Page for Brand: {shoeBrand}</ShoesPageContainer>;
};

export default ShoesPage;
