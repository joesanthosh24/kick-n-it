import { useNavigate } from "react-router-dom";

import {
  ButtonArrowIcon,
  HomeContainer,
  ImageTextContainer,
  LandingImage,
  LandingPageTextContainer,
  PageDescription,
  PageTitle,
  ShopNowButton,
} from "./home-page.styles";
import landingPageLogo from "../../assets/images/landing-page-image.png";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <ImageTextContainer>
        <LandingImage src={landingPageLogo} alt="Landing Page Shoe" />
        <LandingPageTextContainer>
          <PageTitle>KICK'N IT</PageTitle>
          <PageDescription>Shop our latest Shoes</PageDescription>
          <ShopNowButton onClick={() => navigate("/shoes/jordan")}>
            Shop Now{" "}
            <ButtonArrowIcon className="fa-solid fa-arrow-right"></ButtonArrowIcon>
          </ShopNowButton>
        </LandingPageTextContainer>
      </ImageTextContainer>
    </HomeContainer>
  );
};

export default HomePage;
